import React from 'react';

interface Props {
  onStart: () => void;
}

export const TitleView: React.FC<Props> = ({ onStart }) => {
  return (
    <div style={styles.container}>
      <div style={styles.inner}>
        <div style={styles.badge}>AI学会懇親会 体験ゲーム</div>
        <h1 style={styles.title}>
          <span style={styles.titleLine1}>攻略</span>
          <span style={styles.titleLine2}>AI学会懇親会</span>
        </h1>
        <p style={styles.subtitle}>
          学会の懇親会で、あなたはどれだけ<br />
          新しい知り合いを作れるか？
        </p>
        <div style={styles.characterRow}>
          {['professor', 'junior_faculty', 'student', 'engineer'].map((id) => (
            <img
              key={id}
              src={`${process.env.PUBLIC_URL}/images/characters/${id}_m.svg`}
              alt={id}
              style={styles.characterIcon}
            />
          ))}
        </div>
        <button style={styles.startButton} onClick={onStart}>
          ゲームスタート
        </button>
        <p style={styles.hint}>※ プレイするたびに登場人物が変わります</p>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#1a1a2e',
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg_venue.svg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    fontFamily: "'Noto Sans JP', sans-serif",
  },
  inner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(10, 10, 30, 0.85)',
    border: '2px solid #e94560',
    borderRadius: '16px',
    padding: '40px 48px',
    maxWidth: '480px',
    width: '90%',
    textAlign: 'center',
  },
  badge: {
    backgroundColor: '#e94560',
    color: '#fff',
    fontSize: '12px',
    fontWeight: 'bold',
    padding: '4px 14px',
    borderRadius: '20px',
    marginBottom: '20px',
    letterSpacing: '0.05em',
  },
  title: {
    margin: '0 0 16px',
    lineHeight: 1.2,
  },
  titleLine1: {
    display: 'block',
    fontSize: '22px',
    color: '#aaa',
    fontWeight: 'bold',
    letterSpacing: '0.15em',
  },
  titleLine2: {
    display: 'block',
    fontSize: '36px',
    color: '#ffd700',
    fontWeight: 'bold',
    letterSpacing: '0.05em',
  },
  subtitle: {
    color: '#ccc',
    fontSize: '14px',
    lineHeight: 1.8,
    margin: '0 0 28px',
  },
  characterRow: {
    display: 'flex',
    gap: '8px',
    marginBottom: '32px',
  },
  characterIcon: {
    height: '90px',
    width: '60px',
    objectFit: 'contain',
    filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.6))',
  },
  startButton: {
    backgroundColor: '#e94560',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '14px 48px',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    letterSpacing: '0.1em',
    marginBottom: '16px',
    transition: 'background-color 0.2s',
  },
  hint: {
    color: '#666',
    fontSize: '12px',
    margin: 0,
  },
};
