import { useState, useCallback } from 'react';
import { GameState, CharacterId } from '../types';
import { sceneMap } from '../data/scenes';
import { selectCharacters } from './selectCharacters';

function getFirstSceneForCharacter(characterId: CharacterId): string {
  return `${characterId}_1`;
}

function buildEncounterQueue(characterIds: CharacterId[]): string[] {
  return characterIds.map(getFirstSceneForCharacter);
}

export function useGameEngine() {
  const [selectedCharacters] = useState<CharacterId[]>(() => selectCharacters());
  const [encounterQueue, setEncounterQueue] = useState<string[]>(() =>
    buildEncounterQueue(selectCharacters())
  );
  const [gameState, setGameState] = useState<GameState>({
    currentSceneId: 'intro_1',
    score: 0,
    metCharacters: [],
    selectedCharacters: [],
  });
  const [pendingFeedback, setPendingFeedback] = useState<string | null>(null);

  // encounter_next を解決して次のキャラクターまたはエンディングへ
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

      setEncounterQueue(newQueue);
      setGameState((prev) => ({
        ...prev,
        currentSceneId: sceneId,
        score: prev.score + choice.scoreChange,
      }));
    },
    [gameState.currentSceneId, encounterQueue, resolveNextScene]
  );

  const dismissFeedback = useCallback(() => setPendingFeedback(null), []);

  const currentScene = sceneMap[gameState.currentSceneId];

  return {
    gameState,
    selectedCharacters,
    currentScene,
    pendingFeedback,
    chooseOption,
    dismissFeedback,
  };
}
