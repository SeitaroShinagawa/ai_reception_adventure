import { Scene } from '../../types';

export const studentScenes: Scene[] = [
  {
    id: 'student_1',
    characterId: 'student',
    text: '「田中 蒼（O大学院 修士2年）」という名札の人がいる。\n同じ学生として話しかけやすそうだ。',
    choices: [
      {
        text: '「どんな研究してるんですか？」とシンプルに聞く',
        nextSceneId: 'student_2a',
        scoreChange: 1,
      },
      {
        text: '「修士2年ということは就活どうでした？」と聞く',
        nextSceneId: 'student_2b',
        scoreChange: 1,
      },
      {
        text: '「O大といえば〇〇研究室が有名ですよね」と話題を振る',
        nextSceneId: 'student_2c',
        scoreChange: 2,
      },
    ],
  },
  {
    id: 'student_2a',
    characterId: 'student',
    text: '「自然言語処理やってます。プレイヤーさんは？」\n気さくに返してくれた。',
    choices: [
      {
        text: '自分の研究を話して情報交換する',
        nextSceneId: 'student_3a',
        scoreChange: 2,
      },
      {
        text: 'NLPの話を深掘りして盛り上がる',
        nextSceneId: 'student_3a',
        scoreChange: 2,
      },
    ],
  },
  {
    id: 'student_2b',
    characterId: 'student',
    text: '「あー就活ね、まだ迷ってるんですよね〜」\n共通の悩みで話が盛り上がりそうだ。',
    choices: [
      {
        text: '就活の悩みを共有しながら仲良くなる',
        nextSceneId: 'student_3a',
        scoreChange: 2,
      },
    ],
  },
  {
    id: 'student_2c',
    characterId: 'student',
    text: '「え、知ってるんですか！そうなんですよ、実は〇〇先生の研究室で…」\n相手の大学に詳しいことで一気に親近感を持ってもらえた！',
    choices: [
      {
        text: '研究室や研究の話を聞く',
        nextSceneId: 'student_3b',
        scoreChange: 3,
      },
    ],
  },
  {
    id: 'student_3a',
    characterId: 'student',
    text: '「またTwitterで情報交換しましょう！」\n同じ学生として良い仲間ができた。',
    choices: [
      {
        text: '次の人との出会いへ',
        nextSceneId: 'encounter_next',
        scoreChange: 2,
      },
    ],
  },
  {
    id: 'student_3b',
    characterId: 'student',
    text: '「実は来年インターン先探してて。もしよかったら紹介しますよ！」\n思わぬつながりができた。',
    choices: [
      {
        text: '次の人との出会いへ',
        nextSceneId: 'encounter_next',
        scoreChange: 3,
        feedback: '相手の所属に関連した話題を振ることで、「ちゃんと興味を持ってくれている」と感じてもらえます。',
      },
    ],
  },
];
