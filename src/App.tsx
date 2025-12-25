import { ChakraProvider } from '@chakra-ui/react';
import SchedulePage from './components/schedule/SchedulePage.tsx';
import { ScheduleProvider } from './contexts/ScheduleProvider.tsx';

function App() {
  return (
    <ChakraProvider>
      <ScheduleProvider>
        <SchedulePage />
      </ScheduleProvider>
    </ChakraProvider>
  );
}

export default App;
