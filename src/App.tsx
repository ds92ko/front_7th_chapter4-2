import { ChakraProvider } from '@chakra-ui/react';
import { ScheduleTables } from './components/schedule/ScheduleTables.tsx';
import { ScheduleProvider } from './contexts/ScheduleProvider.tsx';

function App() {
  return (
    <ChakraProvider>
      <ScheduleProvider>
        <ScheduleTables />
      </ScheduleProvider>
    </ChakraProvider>
  );
}

export default App;
