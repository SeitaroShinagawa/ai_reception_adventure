import { Character } from '../../types';

export const characters: Record<string, Character> = {
  professor: {
    id: 'professor',
    name: '山田 隆教授',
    affiliation: 'T大学 人工知能研究所',
    description: '著名な研究者。話しかけにくい雰囲気だが、適切なアプローチで話が弾む。',
    imageUrl: '/images/characters/professor.png',
    spawnWeight: 3,
  },
  junior_faculty: {
    id: 'junior_faculty',
    name: '鈴木 花助教',
    affiliation: 'K大学 機械学習研究室',
    description: 'フレンドリーで学生目線を忘れていない若手教員。',
    imageUrl: '/images/characters/junior_faculty.png',
    spawnWeight: 4,
  },
  student: {
    id: 'student',
    name: '田中 蒼',
    affiliation: 'O大学大学院 修士2年',
    description: '他大学の大学院生。同じ学生として共感しやすい。',
    imageUrl: '/images/characters/student.png',
    spawnWeight: 4,
  },
  engineer: {
    id: 'engineer',
    name: '佐藤 健',
    affiliation: 'AIスタートアップ エンジニア',
    description: '実務寄りの話が好き。学術的すぎる話題だと反応が薄い。',
    imageUrl: '/images/characters/engineer.png',
    spawnWeight: 3,
  },
};
