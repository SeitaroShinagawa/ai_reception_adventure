import React from 'react';

interface Props {
  message: string;
  onDismiss: () => void;
}

export const FeedbackModal: React.FC<Props> = ({ message, onDismiss }) => (
  <div style={styles.overlay}>
    <div style={styles.modal}>
      <div style={styles.icon}>💡</div>
      <p style={styles.message}>{message}</p>
      <button style={styles.button} onClick={onDismiss}>
        なるほど、続ける
      </button>
    </div>
  </div>
);

const styles: Record<string, React.CSSProperties> = {
  overlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  modal: {
    backgroundColor: '#16213e',
    border: '2px solid #e94560',
    borderRadius: '12px',
    padding: '24px',
    maxWidth: '400px',
    textAlign: 'center',
    color: '#eee',
    fontFamily: "'Noto Sans JP', sans-serif",
  },
  icon: {
    fontSize: '32px',
    marginBottom: '12px',
  },
  message: {
    lineHeight: 1.8,
    fontSize: '14px',
    marginBottom: '16px',
  },
  button: {
    backgroundColor: '#e94560',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    padding: '10px 24px',
    cursor: 'pointer',
    fontSize: '14px',
  },
};
