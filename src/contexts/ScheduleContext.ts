import React, { createContext, useContext } from 'react';
import { Schedule } from '../types/schedule.ts';

interface ScheduleContextType {
  schedulesMap: Record<string, Schedule[]>;
}

interface ScheduleActionType {
  setSchedulesMap: React.Dispatch<React.SetStateAction<Record<string, Schedule[]>>>;
}

export const ScheduleContext = createContext<ScheduleContextType | undefined>(undefined);
export const ScheduleAction = createContext<ScheduleActionType | undefined>(undefined);

export const useScheduleContext = () => {
  const context = useContext(ScheduleContext);
  if (context === undefined) {
    throw new Error('useScheduleContext must be used within a ScheduleProvider');
  }
  return context;
};

export const useScheduleAction = () => {
  const context = useContext(ScheduleAction);
  if (context === undefined) {
    throw new Error('useScheduleAction must be used within a ScheduleProvider');
  }
  return context;
};
