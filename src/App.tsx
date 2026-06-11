import React, { useCallback, useState } from 'react';
import { useGameEngine } from './engine/useGameEngine';
import { SceneView } from './components/SceneView';
import { FeedbackModal } from './components/FeedbackModal';
import { EndingView } from './components/EndingView';
import { characters } from './data/characters';

function App() {
  const [key, setKey] = useState(0);

  const handleRestart = useCallback(() => {
    setKey((k) => k + 1);
  }, []);

  return <Game key={key} onRestart={handleRestart} />;
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

  const character = currentScene.characterId
    ? characters[currentScene.characterId]
    : undefined;

  return (
    <>
      <SceneView
        scene={currentScene}
        character={character}
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
