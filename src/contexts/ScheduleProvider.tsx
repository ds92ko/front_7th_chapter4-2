import { PropsWithChildren, useState } from 'react';
import dummyScheduleMap from '../data/dummyScheduleMap';
import { Schedule } from '../types/schedule';
import { ScheduleContext } from './ScheduleContext';

export const ScheduleProvider = ({ children }: PropsWithChildren) => {
  const [schedulesMap, setSchedulesMap] = useState<Record<string, Schedule[]>>(dummyScheduleMap);

  return (
    <ScheduleContext.Provider value={{ schedulesMap, setSchedulesMap }}>
      {children}
    </ScheduleContext.Provider>
  );
};
