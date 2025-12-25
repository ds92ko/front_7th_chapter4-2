import { Button, ButtonGroup, Flex, Heading, Stack } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { useScheduleAction, useScheduleContext } from '../../contexts/ScheduleContext.ts';
import ScheduleDndProvider from '../../contexts/ScheduleDndProvider.tsx';
import SearchDialog from '../search/SearchDialog.tsx';
import ScheduleTable from './ScheduleTable.tsx';

export const ScheduleTables = () => {
  const { schedulesMap } = useScheduleContext();
  const { setSchedulesMap } = useScheduleAction();
  const [searchInfo, setSearchInfo] = useState<{
    tableId: string;
    day?: string;
    time?: number;
  } | null>(null);

  const disabledRemoveButton = Object.keys(schedulesMap).length === 1;

  const add = useCallback((tableId: string) => setSearchInfo({ tableId }), [setSearchInfo]);

  const duplicate = useCallback(
    (targetId: string) => {
      setSchedulesMap(prev => ({
        ...prev,
        [`schedule-${Date.now()}`]: [...prev[targetId]],
      }));
    },
    [setSchedulesMap],
  );

  const remove = useCallback(
    (targetId: string) => {
      setSchedulesMap(prev => {
        delete prev[targetId];
        return { ...prev };
      });
    },
    [setSchedulesMap],
  );

  const closeSearchDialog = useCallback(() => setSearchInfo(null), []);

  return (
    <>
      <Flex w="full" gap={6} p={6} flexWrap="wrap">
        {Object.entries(schedulesMap).map(([tableId, schedules], index) => (
          <Stack key={tableId} width="600px">
            <Flex justifyContent="space-between" alignItems="center">
              <Heading as="h3" fontSize="lg">
                시간표 {index + 1}
              </Heading>
              <ButtonGroup size="sm" isAttached>
                <Button colorScheme="green" onClick={() => add(tableId)}>
                  시간표 추가
                </Button>
                <Button colorScheme="green" mx="1px" onClick={() => duplicate(tableId)}>
                  복제
                </Button>
                <Button
                  colorScheme="green"
                  isDisabled={disabledRemoveButton}
                  onClick={() => remove(tableId)}
                >
                  삭제
                </Button>
              </ButtonGroup>
            </Flex>
            <ScheduleDndProvider>
              <ScheduleTable
                key={`schedule-table-${index}`}
                schedules={schedules}
                tableId={tableId}
                onScheduleTimeClick={timeInfo => setSearchInfo({ tableId, ...timeInfo })}
                onDeleteButtonClick={({ day, time }) =>
                  setSchedulesMap(prev => ({
                    ...prev,
                    [tableId]: prev[tableId].filter(
                      schedule => schedule.day !== day || !schedule.range.includes(time),
                    ),
                  }))
                }
              />
            </ScheduleDndProvider>
          </Stack>
        ))}
      </Flex>
      {searchInfo && <SearchDialog searchInfo={searchInfo} onClose={closeSearchDialog} />}
    </>
  );
};
