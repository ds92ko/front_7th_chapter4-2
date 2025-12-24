import { Lecture } from './search.ts';

export interface Schedule {
  lecture: Lecture;
  day: string;
  range: number[];
  room?: string;
}
