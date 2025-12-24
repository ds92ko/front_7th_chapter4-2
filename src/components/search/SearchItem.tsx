import { Button, Td, Tr } from '@chakra-ui/react';
import { memo } from 'react';
import { Lecture } from '../../types/search.ts';

interface SearchItemProps extends Lecture {
  onClick: (lecture: Lecture) => void;
}

const SearchItem = memo(({ onClick, ...lecture }: SearchItemProps) => {
  const handleClick = () => onClick(lecture);

  return (
    <Tr>
      <Td width="100px">{lecture.id}</Td>
      <Td width="50px">{lecture.grade}</Td>
      <Td width="200px">{lecture.title}</Td>
      <Td width="50px">{lecture.credits}</Td>
      <Td width="150px" dangerouslySetInnerHTML={{ __html: lecture.major }} />
      <Td width="150px" dangerouslySetInnerHTML={{ __html: lecture.schedule }} />
      <Td width="80px">
        <Button size="sm" colorScheme="green" onClick={handleClick}>
          추가
        </Button>
      </Td>
    </Tr>
  );
});

export default SearchItem;
