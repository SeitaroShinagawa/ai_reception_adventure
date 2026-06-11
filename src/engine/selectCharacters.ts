import { CharacterId, Character } from '../types';
import { characters } from '../data/characters';

// 重み付き抽選でキャラクターを選ぶ（3人）
export function selectCharacters(): CharacterId[] {
  const pool = Object.values(characters);
  const selected: CharacterId[] = [];

  const remaining = [...pool];
  for (let i = 0; i < 3 && remaining.length > 0; i++) {
    const totalWeight = remaining.reduce((sum, c) => sum + c.spawnWeight, 0);
    let rand = Math.random() * totalWeight;
    for (let j = 0; j < remaining.length; j++) {
      rand -= remaining[j].spawnWeight;
      if (rand <= 0) {
        selected.push(remaining[j].id);
        remaining.splice(j, 1);
        break;
      }
    }
  }

  return selected;
}
