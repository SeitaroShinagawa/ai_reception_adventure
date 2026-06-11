import { Character, Gender } from '../../types';

export const characters: Record<string, Character> = {
  professor: {
    id: 'professor',
    name: '山田教授',
    affiliation: 'T大学 人工知能研究所',
    description: '著名な研究者。話しかけにくい雰囲気だが、適切なアプローチで話が弾む。',
    imageUrl: (g: Gender) => `${process.env.PUBLIC_URL}/images/characters/professor_${g}.svg`,
    spawnWeight: 3,
  },
  junior_faculty: {
    id: 'junior_faculty',
    name: '鈴木助教',
    affiliation: 'K大学 機械学習研究室',
    description: 'フレンドリーで学生目線を忘れていない若手教員。',
    imageUrl: (g: Gender) => `${process.env.PUBLIC_URL}/images/characters/junior_faculty_${g}.svg`,
    spawnWeight: 4,
  },
  student: {
    id: 'student',
    name: '田中 蒼',
    affiliation: 'O大学大学院 修士2年',
    description: '他大学の大学院生。同じ学生として共感しやすい。',
    imageUrl: (g: Gender) => `${process.env.PUBLIC_URL}/images/characters/student_${g}.svg`,
    spawnWeight: 4,
  },
  engineer: {
    id: 'engineer',
    name: '佐藤 健',
    affiliation: 'AIスタートアップ エンジニア',
    description: '実務寄りの話が好き。学術的すぎる話題だと反応が薄い。',
    imageUrl: (g: Gender) => `${process.env.PUBLIC_URL}/images/characters/engineer_${g}.svg`,
    spawnWeight: 3,
  },
};
