import React from 'react';

interface Props {
  score: number;
  metCount: number;
  onRestart: () => void;
}

interface RankInfo {
  rank: string;
  comment: string;
  color: string;
  bg: string;
  emoji: string;
}

function getRank(score: number): RankInfo {
  if (score >= 12) return {
    rank: 'S',
    comment: '完璧な懇親会マスター！誰とでも深い関係を築けました。',
    color: '#FFD700',
    bg: 'rgba(255, 215, 0, 0.15)',
    emoji: '🏆',
  };
  if (score >= 8) return {
    rank: 'A',
    comment: '素晴らしい！多くの人と良い関係を築けました。',
    color: '#00C896',
    bg: 'rgba(0, 200, 150, 0.15)',
    emoji: '🎉',
  };
  if (score >= 4) return {
    rank: 'B',
    comment: 'まずまずです。もう少し積極的に話題を広げてみましょう。',
    color: '#4A9EFF',
    bg: 'rgba(74, 158, 255, 0.15)',
    emoji: '👍',
  };
  return {
    rank: 'C',
    comment: '次回はもっと相手への興味を示してみましょう！',
    color: '#FF7A50',
    bg: 'rgba(255, 122, 80, 0.15)',
    emoji: '💪',
  };
}

const tips = [
  '相手の発表・講演への具体的な感想は最高の話しかけのきっかけになります',
  '「何を研究していますか？」よりも「〇〇の研究をされているんですよね？」の方が会話が弾みます',
  '初対面でいきなりお願いごとをするのは避けましょう。まず関係を作ることが大切です',
  '共通の話題（今日の発表、最近の論文など）から始めると距離が縮まります',
  '企業の方には実務との接点を意識した話題が効果的です',
];

export const EndingView: React.FC<Props> = ({ score, metCount, onRestart }) => {
  const rankInfo = getRank(score);
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>懇親会終了！</h1>

      <div style={{ ...styles.rankCard, backgroundColor: rankInfo.bg, borderColor: rankInfo.color }}>
        <div style={styles.rankEmoji}>{rankInfo.emoji}</div>
        <div style={{ ...styles.rankLetter, color: rankInfo.color }}>{rankInfo.rank}</div>
        <p style={styles.comment}>{rankInfo.comment}</p>
      </div>

      <p style={styles.stats}>出会った人数: {metCount}人 &nbsp;|&nbsp; スコア: {score}点</p>

      <div style={styles.tipsSection}>
        <h2 style={styles.tipsTitle}>攻略のコツ</h2>
        <ul style={styles.tipsList}>
          {tips.map((tip, i) => (
            <li key={i} style={styles.tip}>{tip}</li>
          ))}
        </ul>
      </div>

      <button style={styles.restartButton} onClick={onRestart}>
        もう一度プレイする
      </button>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#1a1a2e',
    color: '#eee',
    padding: '32px 24px',
    fontFamily: "'Noto Sans JP', sans-serif",
  },
  title: {
    fontSize: '28px',
    marginBottom: '20px',
    color: '#ffd700',
  },
  rankCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '2px solid',
    borderRadius: '16px',
    padding: '24px 48px',
    marginBottom: '20px',
    minWidth: '260px',
  },
  rankEmoji: {
    fontSize: '36px',
    marginBottom: '4px',
  },
  rankLetter: {
    fontSize: '88px',
    fontWeight: 'bold',
    lineHeight: 1,
    marginBottom: '12px',
  },
  comment: {
    fontSize: '15px',
    textAlign: 'center',
    maxWidth: '320px',
    lineHeight: 1.8,
    margin: 0,
    color: '#ddd',
  },
  stats: {
    fontSize: '14px',
    color: '#aaa',
    marginBottom: '28px',
  },
  tipsSection: {
    backgroundColor: '#16213e',
    borderRadius: '12px',
    padding: '20px 24px',
    maxWidth: '500px',
    width: '100%',
    marginBottom: '32px',
  },
  tipsTitle: {
    fontSize: '18px',
    color: '#ffd700',
    marginBottom: '12px',
  },
  tipsList: {
    paddingLeft: '20px',
    margin: 0,
  },
  tip: {
    fontSize: '14px',
    lineHeight: 1.8,
    marginBottom: '8px',
  },
  restartButton: {
    backgroundColor: '#e94560',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '14px 32px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};
