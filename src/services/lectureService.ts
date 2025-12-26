import { cachedFetch } from '../lib/cachedFetch';
import { Lecture } from '../types/search';

const fetchMajors = () => cachedFetch<Lecture[]>('./schedules-majors.json');
const fetchLiberalArts = () => cachedFetch<Lecture[]>('./schedules-liberal-arts.json');

export const fetchAllLectures = async () => {
  const results = await Promise.all([
    fetchMajors(),
    fetchLiberalArts(),
    fetchMajors(),
    fetchLiberalArts(),
    fetchMajors(),
    fetchLiberalArts(),
  ]);

  return results.flatMap(result => result.data);
};
