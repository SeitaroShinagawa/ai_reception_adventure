import React from 'react';
import { Scene, Character, Gender } from '../types';

interface Props {
  scene: Scene;
  character?: Character;
  gender?: Gender;
  onChoose: (index: number) => void;
  score: number;
}

export const SceneView: React.FC<Props> = ({ scene, character, gender = 'm', onChoose, score }) => {
  return (
    <div style={styles.container}>
      <div style={styles.scoreBar}>名刺交換スコア: {score}</div>

      <div style={styles.stage}>
        {character && (
          <div style={styles.characterArea}>
            <img
              src={character.imageUrl(gender)}
              alt={character.name}
              style={styles.portrait}
            />
            <div style={styles.nameplate}>
              <span style={styles.name}>{character.name}</span>
              <span style={styles.affiliation}>{character.affiliation}</span>
            </div>
          </div>
        )}
      </div>

      <div style={styles.textBox}>
        <p style={styles.text}>{scene.text}</p>
      </div>

      {scene.choices && (
        <div style={styles.choices}>
          {scene.choices.map((choice, i) => (
            <button key={i} style={styles.choiceButton} onClick={() => onChoose(i)}>
              {choice.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#1a1a2e',
    color: '#eee',
    fontFamily: "'Noto Sans JP', sans-serif",
  },
  scoreBar: {
    padding: '8px 16px',
    backgroundColor: '#16213e',
    textAlign: 'right',
    fontSize: '14px',
    color: '#ffd700',
  },
  stage: {
    flex: 1,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg_venue.svg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '300px',
    padding: '16px',
  },
  characterArea: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  portrait: {
    height: '220px',
    objectFit: 'contain',
    filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.8))',
  },
  nameplate: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: '6px',
    padding: '4px 12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '4px',
  },
  name: {
    fontWeight: 'bold',
    fontSize: '16px',
  },
  affiliation: {
    fontSize: '12px',
    color: '#aaa',
  },
  textBox: {
    backgroundColor: 'rgba(0,0,0,0.85)',
    padding: '16px 20px',
    minHeight: '100px',
    borderTop: '2px solid #0f3460',
  },
  text: {
    margin: 0,
    lineHeight: 1.8,
    whiteSpace: 'pre-wrap',
  },
  choices: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    padding: '12px 16px',
    backgroundColor: '#16213e',
  },
  choiceButton: {
    backgroundColor: '#0f3460',
    color: '#eee',
    border: '1px solid #e94560',
    borderRadius: '6px',
    padding: '10px 16px',
    cursor: 'pointer',
    textAlign: 'left',
    fontSize: '14px',
    transition: 'background-color 0.2s',
  },
};
