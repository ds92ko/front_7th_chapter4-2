import { startTransition } from 'react';
import { useScheduleAction } from '../contexts/ScheduleContext';

export const useScheduleBoard = () => {
  const setSchedulesMap = useScheduleAction();

  const duplicateBoard = (targetId: string) => {
    startTransition(() => {
      setSchedulesMap(prev => ({
        ...prev,
        [`schedule-${Date.now()}`]: [...prev[targetId]],
      }));
    });
  };

  const removeBoard = (targetId: string) => {
    startTransition(() => {
      setSchedulesMap(prev => {
        delete prev[targetId];
        return { ...prev };
      });
    });
  };

  const deleteSchedule = (tableId: string, { day, time }: { day: string; time: number }) => {
    startTransition(() => {
      setSchedulesMap(prev => ({
        ...prev,
        [tableId]: prev[tableId].filter(
          schedule => schedule.day !== day || !schedule.range.includes(time),
        ),
      }));
    });
  };

  return {
    duplicateBoard,
    removeBoard,
    deleteSchedule,
  };
};
