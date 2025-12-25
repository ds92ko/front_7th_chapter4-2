import { PropsWithChildren, useState } from 'react';
import dummyScheduleMap from '../data/dummyScheduleMap';
import { Schedule } from '../types/schedule';
import { ScheduleAction, ScheduleContext } from './ScheduleContext';

export const ScheduleProvider = ({ children }: PropsWithChildren) => {
  const [schedulesMap, setSchedulesMap] = useState<Record<string, Schedule[]>>(dummyScheduleMap);

  return (
    <ScheduleAction.Provider value={{ setSchedulesMap }}>
      <ScheduleContext.Provider value={{ schedulesMap }}>{children}</ScheduleContext.Provider>
    </ScheduleAction.Provider>
  );
};
