import { Scene } from '../../types';
import { introScenes } from './intro';
import { professorScenes } from './professor';
import { juniorFacultyScenes } from './junior_faculty';
import { studentScenes } from './student';
import { engineerScenes } from './engineer';
import { endingScenes } from './ending';

export const allScenes: Scene[] = [
  ...introScenes,
  ...professorScenes,
  ...juniorFacultyScenes,
  ...studentScenes,
  ...engineerScenes,
  ...endingScenes,
];

export const sceneMap: Record<string, Scene> = Object.fromEntries(
  allScenes.map((s) => [s.id, s])
);
