import { Scene } from '../../types';

export const engineerScenes: Scene[] = [
  {
    id: 'engineer_1',
    characterId: 'engineer',
    text: '「佐藤 健（AIスタートアップ）」という名札の人がいる。\n企業の人だ。どう話しかける？',
    choices: [
      {
        text: '「どんなプロダクト開発されているんですか？」と聞く',
        nextSceneId: 'engineer_2a',
        scoreChange: 2,
      },
      {
        text: '「最近話題の〇〇の論文、実務で使えそうですよね」と話題を振る',
        nextSceneId: 'engineer_2b',
        scoreChange: 2,
      },
      {
        text: '「インターンを募集していますか？」といきなり聞く',
        nextSceneId: 'engineer_2c',
        scoreChange: -1,
        feedback: '初対面でいきなり就活・インターンの話は印象が良くないことが多いです。まず相手の仕事に興味を持つ姿勢を見せましょう。',
      },
    ],
  },
  {
    id: 'engineer_2a',
    characterId: 'engineer',
    text: '「LLMを使った業務自動化ツールを作っていて…」と話してくれた。\n実務の話で目が輝いている。',
    choices: [
      {
        text: '技術的な詳細を深掘りして盛り上がる',
        nextSceneId: 'engineer_3a',
        scoreChange: 3,
      },
      {
        text: '「自分の研究も少し関連していて」と繋げる',
        nextSceneId: 'engineer_3a',
        scoreChange: 2,
      },
    ],
  },
  {
    id: 'engineer_2b',
    characterId: 'engineer',
    text: '「そうなんですよ！あれ実際に試したんですけど…」\n実務経験を持つエンジニアならではの視点で話が盛り上がった。',
    choices: [
      {
        text: '学術と実務の視点を交えて議論する',
        nextSceneId: 'engineer_3b',
        scoreChange: 3,
      },
    ],
  },
  {
    id: 'engineer_2c',
    characterId: 'engineer',
    text: '「えっと…採用は人事に聞いてもらえますか」とやや冷たく返された。\n',
    choices: [
      {
        text: '「失礼しました、お仕事の話を聞かせてください」と仕切り直す',
        nextSceneId: 'engineer_2a',
        scoreChange: 0,
      },
    ],
  },
  {
    id: 'engineer_3a',
    characterId: 'engineer',
    text: '「研究者とこういう話できるのが学会の醍醐味ですよね」\n名刺を渡しながら「ぜひ今後も情報交換しましょう」と言ってもらえた。',
    choices: [
      {
        text: '次の人との出会いへ',
        nextSceneId: 'encounter_next',
        scoreChange: 2,
      },
    ],
  },
  {
    id: 'engineer_3b',
    characterId: 'engineer',
    text: '「実はうちの会社、来月ハッカソンやるんですよ。参加しませんか？」\n思わぬ誘いをもらえた！',
    choices: [
      {
        text: '次の人との出会いへ',
        nextSceneId: 'encounter_next',
        scoreChange: 3,
        feedback: '研究の話題を実務と繋げることで、企業の方との共通言語が生まれます。',
      },
    ],
  },
];
