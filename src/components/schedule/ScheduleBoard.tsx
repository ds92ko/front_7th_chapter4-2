import { Button, ButtonGroup, Flex, Heading, Stack } from '@chakra-ui/react';
import { memo, useCallback } from 'react';
import ScheduleDndProvider from '../../contexts/ScheduleDndProvider';
import { Schedule } from '../../types/schedule';
import ScheduleTable from './ScheduleTable';

interface ScheduleBoardProps {
  index: number;
  tableId: string;
  schedules: Schedule[];
  isRemoveDisabled: boolean;
  onOpenSearchDialog: (tableId: string) => void;
  onDuplicateBoard: (tableId: string) => void;
  onRemoveBoard: (tableId: string) => void;
  onEmptyTimeCellClick: (tableId: string, timeInfo: { day: string; time: number }) => void;
  onScheduleDelete: (tableId: string, timeInfo: { day: string; time: number }) => void;
}

const ScheduleBoard = memo(
  ({
    index,
    tableId,
    schedules,
    isRemoveDisabled,
    onOpenSearchDialog,
    onDuplicateBoard,
    onRemoveBoard,
    onEmptyTimeCellClick,
    onScheduleDelete,
  }: ScheduleBoardProps) => {
    const handleScheduleTimeClick = useCallback(
      (timeInfo: { day: string; time: number }) => {
        onEmptyTimeCellClick(tableId, timeInfo);
      },
      [tableId, onEmptyTimeCellClick],
    );
    const handleDeleteButtonClick = useCallback(
      (timeInfo: { day: string; time: number }) => {
        onScheduleDelete(tableId, timeInfo);
      },
      [tableId, onScheduleDelete],
    );

    return (
      <Stack width="600px">
        <Flex justifyContent="space-between" alignItems="center">
          <Heading as="h3" fontSize="lg">
            시간표 {index + 1}
          </Heading>
          <ButtonGroup size="sm" isAttached>
            <Button colorScheme="green" onClick={() => onOpenSearchDialog(tableId)}>
              시간표 추가
            </Button>
            <Button colorScheme="green" mx="1px" onClick={() => onDuplicateBoard(tableId)}>
              복제
            </Button>
            <Button
              colorScheme="green"
              isDisabled={isRemoveDisabled}
              onClick={() => onRemoveBoard(tableId)}
            >
              삭제
            </Button>
          </ButtonGroup>
        </Flex>
        <ScheduleDndProvider>
          <ScheduleTable
            schedules={schedules}
            tableId={tableId}
            onScheduleTimeClick={handleScheduleTimeClick}
            onDeleteButtonClick={handleDeleteButtonClick}
          />
        </ScheduleDndProvider>
      </Stack>
    );
  },
);

export default ScheduleBoard;
