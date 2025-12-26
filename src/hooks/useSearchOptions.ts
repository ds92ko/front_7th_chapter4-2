import { useEffect, useState } from 'react';
import { SearchOption } from '../types/search';
import useAutoCallback from './useAutoCallback';

interface UseSearchOptionsOptions {
  initialDay?: string;
  initialTime?: number;
  onOptionChange?: () => void;
}

export const useSearchOptions = ({
  initialDay,
  initialTime,
  onOptionChange,
}: UseSearchOptionsOptions = {}) => {
  const [searchOptions, setSearchOptions] = useState<SearchOption>({
    query: '',
    grades: [],
    days: [],
    times: [],
    majors: [],
  });

  useEffect(() => {
    setSearchOptions(prev => ({
      ...prev,
      days: initialDay ? [initialDay] : [],
      times: initialTime ? [initialTime] : [],
    }));
    onOptionChange?.();
  }, [initialDay, initialTime, onOptionChange]);

  const changeSearchOption = useAutoCallback(
    (field: keyof SearchOption, value: SearchOption[typeof field]) => {
      setSearchOptions(prev => ({ ...prev, [field]: value }));
      onOptionChange?.();
    },
  );

  const handleChangeQuery = useAutoCallback((value: SearchOption['query']) =>
    changeSearchOption('query', value),
  );
  const handleChangeCredits = useAutoCallback((value: SearchOption['credits']) =>
    changeSearchOption('credits', value),
  );
  const handleChangeGrades = useAutoCallback((value: SearchOption['grades']) =>
    changeSearchOption('grades', value),
  );
  const handleChangeDays = useAutoCallback((value: SearchOption['days']) =>
    changeSearchOption('days', value),
  );
  const handleChangeTimes = useAutoCallback((value: SearchOption['times']) =>
    changeSearchOption('times', value),
  );
  const handleChangeMajors = useAutoCallback((value: SearchOption['majors']) =>
    changeSearchOption('majors', value),
  );

  const handleChange = {
    query: handleChangeQuery,
    credits: handleChangeCredits,
    grades: handleChangeGrades,
    days: handleChangeDays,
    times: handleChangeTimes,
    majors: handleChangeMajors,
  };

  return {
    searchOptions,
    handleChange,
    reset: () =>
      setSearchOptions({
        query: '',
        grades: [],
        days: [],
        times: [],
        majors: [],
      }),
  };
};
