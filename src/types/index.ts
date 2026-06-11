export type CharacterId = 'professor' | 'junior_faculty' | 'student' | 'engineer';

export type Gender = 'm' | 'f';

export interface Character {
  id: CharacterId;
  name: string;
  affiliation: string;
  description: string;
  imageUrl: (gender: Gender) => string;
  spawnWeight: number; // 出現確率の重み
}

export interface Choice {
  text: string;
  nextSceneId: string;
  scoreChange: number; // 名刺交換スコアへの影響
  feedback?: string;   // 選択後のフィードバックメッセージ
}

export interface Scene {
  id: string;
  characterId?: CharacterId;
  text: string;
  choices?: Choice[];
  isEnding?: boolean;
}

export interface GameState {
  currentSceneId: string;
  score: number;
  metCharacters: CharacterId[];
  selectedCharacters: CharacterId[]; // 今回のプレイで出現するキャラクター
  characterGenders: Record<CharacterId, Gender>; // 各キャラクターの性別（プレイごとにランダム）
}
