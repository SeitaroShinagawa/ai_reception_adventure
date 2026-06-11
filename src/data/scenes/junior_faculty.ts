import { Scene } from '../../types';

export const juniorFacultyScenes: Scene[] = [
  {
    id: 'junior_faculty_1',
    characterId: 'junior_faculty',
    text: '名札に「鈴木 花（K大学 助教）」とある。\n笑顔で周りを見渡していて、話しかけやすそうな雰囲気だ。',
    choices: [
      {
        text: '「どちらのご研究をされているんですか？」と聞く',
        nextSceneId: 'junior_faculty_2a',
        scoreChange: 1,
      },
      {
        text: '「今日の発表、聞かれましたか？面白かったですね」と話しかける',
        nextSceneId: 'junior_faculty_2b',
        scoreChange: 2,
      },
      {
        text: '突然「就職活動のアドバイスをください！」と聞く',
        nextSceneId: 'junior_faculty_2c',
        scoreChange: -1,
        feedback: '初対面で一方的にお願いごとをするのは避けましょう。まず関係を作ることが大切です。',
      },
    ],
  },
  {
    id: 'junior_faculty_2a',
    characterId: 'junior_faculty',
    text: '「機械学習の公平性について研究しています！学生さんは？」\nフレンドリーに聞き返してくれた。',
    choices: [
      {
        text: '自分の研究を紹介して意見交換する',
        nextSceneId: 'junior_faculty_3a',
        scoreChange: 2,
      },
      {
        text: '研究の詳しい内容をもっと聞く',
        nextSceneId: 'junior_faculty_3a',
        scoreChange: 2,
      },
    ],
  },
  {
    id: 'junior_faculty_2b',
    characterId: 'junior_faculty',
    text: '「そうそう！あの発表よかったですよね〜。私もあの手法、参考にしたいなと思って」\n共通の話題で一気に距離が縮まった。',
    choices: [
      {
        text: '発表の内容について意見を交わす',
        nextSceneId: 'junior_faculty_3b',
        scoreChange: 3,
      },
    ],
  },
  {
    id: 'junior_faculty_2c',
    characterId: 'junior_faculty',
    text: '「え、あ、はあ…」と少し困った顔をされてしまった。\n気まずい空気になってしまった。',
    choices: [
      {
        text: '話題を変えて研究の話をする',
        nextSceneId: 'junior_faculty_3a',
        scoreChange: 1,
      },
      {
        text: '「すみません、いきなりでしたね」と謝って仕切り直す',
        nextSceneId: 'junior_faculty_2a',
        scoreChange: 1,
      },
    ],
  },
  {
    id: 'junior_faculty_3a',
    characterId: 'junior_faculty',
    text: '「面白い研究してますね！SNSでつながりましょう」と言ってもらえた。\n名刺も交換できた。',
    choices: [
      {
        text: '次の人との出会いへ',
        nextSceneId: 'encounter_next',
        scoreChange: 2,
      },
    ],
  },
  {
    id: 'junior_faculty_3b',
    characterId: 'junior_faculty',
    text: '「実は今度ワークショップを企画していて、学生さんにも参加してほしいんですよね」\n予想以上に仲良くなれた！',
    choices: [
      {
        text: '次の人との出会いへ',
        nextSceneId: 'encounter_next',
        scoreChange: 3,
        feedback: '共通の話題（今日の発表など）から会話を始めるのは非常に効果的です。',
      },
    ],
  },
];
