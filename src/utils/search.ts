import { Lecture, SearchOption } from '../types/search';
import { parseSchedule } from './schedule';

export const filterLectures = (lectures: Lecture[], searchOptions: SearchOption): Lecture[] => {
  const { query = '', credits, grades, days, times, majors } = searchOptions;

  return lectures
    .filter(
      lecture =>
        lecture.title.toLowerCase().includes(query.toLowerCase()) ||
        lecture.id.toLowerCase().includes(query.toLowerCase()),
    )
    .filter(lecture => grades.length === 0 || grades.includes(lecture.grade))
    .filter(lecture => majors.length === 0 || majors.includes(lecture.major))
    .filter(lecture => !credits || lecture.credits.startsWith(String(credits)))
    .filter(lecture => {
      if (days.length === 0) {
        return true;
      }
      const schedules = lecture.schedule ? parseSchedule(lecture.schedule) : [];
      return schedules.some(s => days.includes(s.day));
    })
    .filter(lecture => {
      if (times.length === 0) {
        return true;
      }
      const schedules = lecture.schedule ? parseSchedule(lecture.schedule) : [];
      return schedules.some(s => s.range.some(time => times.includes(time)));
    });
};
