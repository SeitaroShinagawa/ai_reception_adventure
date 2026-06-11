import React, { useCallback, useState } from 'react';
import { useGameEngine } from './engine/useGameEngine';
import { TitleView } from './components/TitleView';
import { SceneView } from './components/SceneView';
import { FeedbackModal } from './components/FeedbackModal';
import { EndingView } from './components/EndingView';
import { characters } from './data/characters';

type Screen = 'title' | 'game';

function App() {
  const [screen, setScreen] = useState<Screen>('title');
  const [gameKey, setGameKey] = useState(0);

  const handleStart = useCallback(() => setScreen('game'), []);

  const handleRestart = useCallback(() => {
    setGameKey((k) => k + 1);
    setScreen('title');
  }, []);

  if (screen === 'title') {
    return <TitleView onStart={handleStart} />;
  }

  return <Game key={gameKey} onRestart={handleRestart} />;
}

function Game({ onRestart }: { onRestart: () => void }) {
  const { gameState, currentScene, pendingFeedback, chooseOption, dismissFeedback } =
    useGameEngine();

  if (!currentScene) return null;

  if (currentScene.isEnding) {
    return (
      <EndingView
        score={gameState.score}
        metCount={gameState.metCharacters.length}
        onRestart={onRestart}
      />
    );
  }

  const characterId = currentScene.characterId;
  const character = characterId ? characters[characterId] : undefined;
  const gender = characterId ? gameState.characterGenders[characterId] : undefined;

  return (
    <>
      <SceneView
        scene={currentScene}
        character={character}
        gender={gender}
        onChoose={chooseOption}
        score={gameState.score}
      />
      {pendingFeedback && (
        <FeedbackModal message={pendingFeedback} onDismiss={dismissFeedback} />
      )}
    </>
  );
}

export default App;
