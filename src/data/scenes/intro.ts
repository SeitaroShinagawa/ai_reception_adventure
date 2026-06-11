import { Scene } from '../../types';

export const introScenes: Scene[] = [
  {
    id: 'intro_1',
    text: 'AI学会の懇親会会場に到着した。\n広いホールには研究者や学生が集まり、あちこちで会話が弾んでいる。\n手には名刺が10枚。さあ、どこから攻略しようか。',
    choices: [
      {
        text: '近くにいる人に話しかけてみる',
        nextSceneId: 'encounter_next',
        scoreChange: 0,
      },
      {
        text: 'まず飲み物を取りに行って様子を見る',
        nextSceneId: 'drink_detour',
        scoreChange: 0,
      },
    ],
  },
  {
    id: 'drink_detour',
    text: '飲み物を手に取りながら会場を見渡す。\n少し落ち着いたところで、近くに立っている人が目に入った。',
    choices: [
      {
        text: '話しかけてみる',
        nextSceneId: 'encounter_next',
        scoreChange: 0,
      },
    ],
  },
];
