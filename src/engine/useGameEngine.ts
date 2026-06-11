import { useState, useCallback } from 'react';
import { GameState, CharacterId, Gender } from '../types';
import { characters } from '../data/characters';
import { sceneMap } from '../data/scenes';
import { selectCharacters } from './selectCharacters';

function getFirstSceneForCharacter(characterId: CharacterId): string {
  return `${characterId}_1`;
}

function buildEncounterQueue(characterIds: CharacterId[]): string[] {
  return characterIds.map(getFirstSceneForCharacter);
}

function randomGenders(): Record<CharacterId, Gender> {
  return Object.fromEntries(
    Object.keys(characters).map((id) => [id, Math.random() < 0.5 ? 'm' : 'f'])
  ) as Record<CharacterId, Gender>;
}

export function useGameEngine() {
  const [initialCharacters] = useState<CharacterId[]>(selectCharacters);
  const [encounterQueue, setEncounterQueue] = useState<string[]>(() =>
    buildEncounterQueue(initialCharacters)
  );
  const [gameState, setGameState] = useState<GameState>({
    currentSceneId: 'intro_1',
    score: 0,
    metCharacters: [],
    selectedCharacters: initialCharacters,
    characterGenders: randomGenders(),
  });
  const [pendingFeedback, setPendingFeedback] = useState<string | null>(null);

  const resolveNextScene = useCallback(
    (nextSceneId: string, queue: string[]): { sceneId: string; newQueue: string[] } => {
      if (nextSceneId === 'encounter_next') {
        if (queue.length > 0) {
          return { sceneId: queue[0], newQueue: queue.slice(1) };
        } else {
          return { sceneId: 'ending', newQueue: [] };
        }
      }
      return { sceneId: nextSceneId, newQueue: queue };
    },
    []
  );

  const chooseOption = useCallback(
    (choiceIndex: number) => {
      const scene = sceneMap[gameState.currentSceneId];
      if (!scene?.choices) return;

      const choice = scene.choices[choiceIndex];
      if (!choice) return;

      const { sceneId, newQueue } = resolveNextScene(choice.nextSceneId, encounterQueue);

      if (choice.feedback) {
        setPendingFeedback(choice.feedback);
      }

      // encounter_next への遷移 = キャラクターとの会話終了なので met に追加
      const currentCharacterId = sceneMap[gameState.currentSceneId]?.characterId;
      const justMet =
        choice.nextSceneId === 'encounter_next' && currentCharacterId ? [currentCharacterId] : [];

      setEncounterQueue(newQueue);
      setGameState((prev) => ({
        ...prev,
        currentSceneId: sceneId,
        score: prev.score + choice.scoreChange,
        metCharacters: Array.from(new Set([...prev.metCharacters, ...justMet])),
      }));
    },
    [gameState.currentSceneId, encounterQueue, resolveNextScene]
  );

  const dismissFeedback = useCallback(() => setPendingFeedback(null), []);

  const currentScene = sceneMap[gameState.currentSceneId];

  return {
    gameState,
    currentScene,
    pendingFeedback,
    chooseOption,
    dismissFeedback,
  };
}
