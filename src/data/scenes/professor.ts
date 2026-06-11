import { Scene } from '../../types';

export const professorScenes: Scene[] = [
  {
    id: 'professor_1',
    characterId: 'professor',
    text: '年配の紳士が一人で立っている。名札を見ると「山田 隆（T大学）」とある。\nAI分野では知らない人はいない著名な教授だ。どう話しかける？',
    choices: [
      {
        text: '「先生のご研究、いつも拝読しております！」と声をかける',
        nextSceneId: 'professor_2a',
        scoreChange: 1,
      },
      {
        text: '「あの…自己紹介させてください」とだけ言う',
        nextSceneId: 'professor_2b',
        scoreChange: 0,
      },
      {
        text: '「先生、今日の基調講演、感動しました。特に〇〇の部分が…」と具体的に話す',
        nextSceneId: 'professor_2c',
        scoreChange: 2,
      },
    ],
  },
  {
    id: 'professor_2a',
    characterId: 'professor',
    text: '「ありがとう。どちらの学生さんですか？」と穏やかに返してくれた。\n話が続きそうだ。自分の研究についてどう話す？',
    choices: [
      {
        text: '自分の研究テーマを一言で説明する',
        nextSceneId: 'professor_3a',
        scoreChange: 2,
      },
      {
        text: '「先生の研究と少し関連していて…」と接点を見つけて話す',
        nextSceneId: 'professor_3b',
        scoreChange: 3,
      },
    ],
  },
  {
    id: 'professor_2b',
    characterId: 'professor',
    text: '「はい、どうぞ」と短く返された。\n少しぎこちない空気になってしまった。',
    choices: [
      {
        text: '研究の話をして盛り上げようとする',
        nextSceneId: 'professor_3a',
        scoreChange: 1,
      },
      {
        text: '名刺だけ渡して次の人に移る',
        nextSceneId: 'encounter_next',
        scoreChange: 0,
        feedback: '話題なく自己紹介だけだと印象に残りにくいです。相手の研究や講演への感想など、共通の話題から始めると良いでしょう。',
      },
    ],
  },
  {
    id: 'professor_2c',
    characterId: 'professor',
    text: '「おお、あの部分に気づいてくれましたか！実はあそこが一番伝えたかったところで…」\n教授の目が輝いた。話が弾みそうだ！',
    choices: [
      {
        text: '質問を重ねて深掘りする',
        nextSceneId: 'professor_3b',
        scoreChange: 3,
      },
      {
        text: '自分の研究との関連を話す',
        nextSceneId: 'professor_3b',
        scoreChange: 3,
      },
    ],
  },
  {
    id: 'professor_3a',
    characterId: 'professor',
    text: '「なるほど、面白い研究ですね」と興味を持ってもらえた。\n名刺を交換し、「またぜひ連絡をください」と言ってもらえた。',
    choices: [
      {
        text: '次の人との出会いへ',
        nextSceneId: 'encounter_next',
        scoreChange: 2,
      },
    ],
  },
  {
    id: 'professor_3b',
    characterId: 'professor',
    text: '話が弾み、気づけば20分も会話していた。\n「君の研究、うちの学生にも聞かせてあげたい。今度うちの研究室に来ませんか」と言われた！',
    choices: [
      {
        text: '次の人との出会いへ',
        nextSceneId: 'encounter_next',
        scoreChange: 3,
        feedback: '相手の講演や発表への具体的な感想は、話しかけるきっかけとして非常に効果的です。',
      },
    ],
  },
];
