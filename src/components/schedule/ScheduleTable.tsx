import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import { useDndContext } from '@dnd-kit/core';
import { Fragment, memo, useMemo } from 'react';
import { DAY_LABELS } from '../../constants/common.ts';
import { CellSize, SCHEDULE_COLORS, TIMES } from '../../constants/schedule.ts';
import { Schedule } from '../../types/schedule.ts';
import { fill2 } from '../../utils/format.ts';
import ScheduleItem from './ScheduleItem.tsx';

interface Props {
  tableId: string;
  schedules: Schedule[];
  onScheduleTimeClick?: (timeInfo: { day: string; time: number }) => void;
  onDeleteButtonClick?: (timeInfo: { day: string; time: number }) => void;
}

const ScheduleTable = memo(
  ({ tableId, schedules, onScheduleTimeClick, onDeleteButtonClick }: Props) => {
    const colorsMap = useMemo(() => {
      const lectures = [...new Set(schedules.map(({ lecture }) => lecture.id))];
      const map = new Map<string, string>();
      lectures.forEach((lectureId, index) => {
        map.set(lectureId, SCHEDULE_COLORS[index % SCHEDULE_COLORS.length]);
      });
      return map;
    }, [schedules]);

    const getColor = (lectureId: string): string => colorsMap.get(lectureId)!;

    const dndContext = useDndContext();

    const activeTableId = useMemo(() => {
      const activeId = dndContext.active?.id;
      return activeId ? String(activeId).split(':')[0] : null;
    }, [dndContext.active?.id]);

    return (
      <Box
        position="relative"
        outline={activeTableId === tableId ? '5px dashed' : undefined}
        outlineColor="blue.300"
      >
        <Grid
          templateColumns={`120px repeat(${DAY_LABELS.length}, ${CellSize.WIDTH}px)`}
          templateRows={`40px repeat(${TIMES.length}, ${CellSize.HEIGHT}px)`}
          bg="white"
          fontSize="sm"
          textAlign="center"
          outline="1px solid"
          outlineColor="gray.300"
        >
          <GridItem key="교시" borderColor="gray.300" bg="gray.100">
            <Flex justifyContent="center" alignItems="center" h="full" w="full">
              <Text fontWeight="bold">교시</Text>
            </Flex>
          </GridItem>
          {DAY_LABELS.map(day => (
            <GridItem key={day} borderLeft="1px" borderColor="gray.300" bg="gray.100">
              <Flex justifyContent="center" alignItems="center" h="full">
                <Text fontWeight="bold">{day}</Text>
              </Flex>
            </GridItem>
          ))}
          {TIMES.map((time, timeIndex) => (
            <Fragment key={`시간-${timeIndex + 1}`}>
              <GridItem
                borderTop="1px solid"
                borderColor="gray.300"
                bg={timeIndex > 17 ? 'gray.200' : 'gray.100'}
              >
                <Flex justifyContent="center" alignItems="center" h="full">
                  <Text fontSize="xs">
                    {fill2(timeIndex + 1)} ({time})
                  </Text>
                </Flex>
              </GridItem>
              {DAY_LABELS.map(day => (
                <GridItem
                  key={`${day}-${timeIndex + 2}`}
                  borderWidth="1px 0 0 1px"
                  borderColor="gray.300"
                  bg={timeIndex > 17 ? 'gray.100' : 'white'}
                  cursor="pointer"
                  _hover={{ bg: 'yellow.100' }}
                  onClick={() => onScheduleTimeClick?.({ day, time: timeIndex + 1 })}
                />
              ))}
            </Fragment>
          ))}
        </Grid>

        {schedules.map((schedule, index) => (
          <ScheduleItem
            key={`${schedule.lecture.title}-${index}`}
            id={`${tableId}:${index}`}
            data={schedule}
            bg={getColor(schedule.lecture.id)}
            onDeleteButtonClick={onDeleteButtonClick}
          />
        ))}
      </Box>
    );
  },
);

export default ScheduleTable;
