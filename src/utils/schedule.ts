import { SCHEDULE_COLORS } from '../constants/schedule';
import { Schedule } from '../types/schedule';

const getTimeRange = (value: string): number[] => {
  const [start, end] = value.split('~').map(Number);
  if (end === undefined) return [start];
  return Array(end - start + 1)
    .fill(start)
    .map((v, k) => v + k);
};

export const parseSchedule = (schedule: string) => {
  const schedules = schedule.split('<p>');
  return schedules.map(schedule => {
    const reg = /^([가-힣])(\d+(~\d+)?)(.*)/;

    const [day] = schedule.split(/(\d+)/);

    const range = getTimeRange(schedule.replace(reg, '$2'));

    const room = schedule.replace(reg, '$4')?.replace(/\(|\)/g, '');

    return { day, range, room };
  });
};

export const createScheduleColorMap = (schedules: Schedule[]): Map<string, string> => {
  const lectures = [...new Set(schedules.map(({ lecture }) => lecture.id))];
  const map = new Map<string, string>();
  lectures.forEach((lectureId, index) => {
    map.set(lectureId, SCHEDULE_COLORS[index % SCHEDULE_COLORS.length]);
  });
  return map;
};
