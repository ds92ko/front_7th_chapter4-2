import { Flex } from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import { useScheduleAction, useScheduleContext } from '../../contexts/ScheduleContext.ts';
import useAutoCallback from '../../hooks/useAutoCallback.ts';
import SearchDialog from '../search/SearchDialog.tsx';
import ScheduleBoard from './ScheduleBoard.tsx';

const SchedulePage = () => {
  const { schedulesMap } = useScheduleContext();
  const { setSchedulesMap } = useScheduleAction();
  const [searchInfo, setSearchInfo] = useState<{
    tableId: string;
    day?: string;
    time?: number;
  } | null>(null);

  const isRemoveDisabled = useMemo(() => Object.keys(schedulesMap).length === 1, [schedulesMap]);

  const handleOpenSearchDialog = useAutoCallback((tableId: string) => setSearchInfo({ tableId }));
  const handleCloseSearchDialog = useAutoCallback(() => setSearchInfo(null));
  const handleDuplicateBoard = useAutoCallback((targetId: string) =>
    setSchedulesMap(prev => ({
      ...prev,
      [`schedule-${Date.now()}`]: [...prev[targetId]],
    })),
  );
  const handleRemoveBoard = useAutoCallback((targetId: string) =>
    setSchedulesMap(prev => {
      delete prev[targetId];
      return { ...prev };
    }),
  );
  const handleEmptyTimeCellClick = useAutoCallback(
    (tableId: string, timeInfo: { day: string; time: number }) =>
      setSearchInfo({ tableId, ...timeInfo }),
  );
  const handleScheduleDelete = useAutoCallback(
    (tableId: string, { day, time }: { day: string; time: number }) =>
      setSchedulesMap(prev => ({
        ...prev,
        [tableId]: prev[tableId].filter(
          schedule => schedule.day !== day || !schedule.range.includes(time),
        ),
      })),
  );

  return (
    <>
      <Flex w="full" gap={6} p={6} flexWrap="wrap">
        {Object.entries(schedulesMap).map(([tableId, schedules], index) => (
          <ScheduleBoard
            key={tableId}
            index={index}
            tableId={tableId}
            schedules={schedules}
            isRemoveDisabled={isRemoveDisabled}
            onOpenSearchDialog={handleOpenSearchDialog}
            onDuplicateBoard={handleDuplicateBoard}
            onRemoveBoard={handleRemoveBoard}
            onEmptyTimeCellClick={handleEmptyTimeCellClick}
            onScheduleDelete={handleScheduleDelete}
          />
        ))}
      </Flex>
      {searchInfo && <SearchDialog searchInfo={searchInfo} onClose={handleCloseSearchDialog} />}
    </>
  );
};

export default SchedulePage;
