import {
  Box,
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { ComponentProps, memo, useMemo } from 'react';
import { DAY_LABELS } from '../../constants/common';
import { CellSize } from '../../constants/schedule';
import useAutoCallback from '../../hooks/useAutoCallback';
import { Schedule } from '../../types/schedule';
import ScheduleText from './ScheduleText';

interface ScheduleItemProps extends Omit<ComponentProps<typeof Box>, 'children'> {
  id: string;
  data: Schedule;
  onDeleteButtonClick?: (timeInfo: { day: string; time: number }) => void;
}

const ScheduleItem = memo(({ id, data, bg, onDeleteButtonClick }: ScheduleItemProps) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { day, range, room, lecture } = data;
  const { attributes, setNodeRef, listeners, transform } = useDraggable({ id });
  const leftIndex = DAY_LABELS.indexOf(day as (typeof DAY_LABELS)[number]);
  const topIndex = range[0] - 1;
  const size = range.length;

  const transformString = useMemo(() => {
    return transform ? CSS.Translate.toString(transform) : undefined;
  }, [transform]);

  const positionStyles = useMemo(
    () => ({
      left: `${120 + CellSize.WIDTH * leftIndex + 1}px`,
      top: `${40 + topIndex * CellSize.HEIGHT + 1}px`,
      width: `${CellSize.WIDTH - 1}px`,
      height: `${CellSize.HEIGHT * size - 1}px`,
    }),
    [leftIndex, topIndex, size],
  );

  const handleDelete = useAutoCallback(() =>
    onDeleteButtonClick?.({
      day,
      time: range[0],
    }),
  );

  const content = (
    <Box
      position="absolute"
      left={positionStyles.left}
      top={positionStyles.top}
      width={positionStyles.width}
      height={positionStyles.height}
      bg={bg}
      p={1}
      boxSizing="border-box"
      cursor="pointer"
      ref={setNodeRef}
      transform={transformString}
      {...listeners}
      {...attributes}
      onClick={onToggle}
    >
      <ScheduleText title={lecture.title} room={room} />
    </Box>
  );

  return isOpen ? (
    <Popover isOpen={isOpen} onClose={onClose} isLazy lazyBehavior="unmount">
      <PopoverTrigger>{content}</PopoverTrigger>
      <PopoverContent onClick={event => event.stopPropagation()}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <Text>강의를 삭제하시겠습니까?</Text>
          <Button colorScheme="red" size="xs" onClick={handleDelete}>
            삭제
          </Button>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  ) : (
    content
  );
});

export default ScheduleItem;
