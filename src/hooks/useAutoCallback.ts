import { useCallback, useRef } from 'react';

const useAutoCallback = <T extends (...args: Parameters<T>) => ReturnType<T>>(callback: T) => {
  const callbackRef = useRef<T>(callback);
  callbackRef.current = callback;

  return useCallback((...args: Parameters<T>) => callbackRef.current?.(...args), []);
};

export default useAutoCallback;
