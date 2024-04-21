import { useState, useEffect, useCallback } from "react";

// debounce 커스텀 훅
const useDebounce = (callback: Function, delay: number) => {
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  const debounceCallback = useCallback(
    (...args: any[]) => {
      if (timerId) {
        clearTimeout(timerId);
      }
      const newTimerId = setTimeout(() => {
        callback(...args);
      }, delay);

      setTimerId(newTimerId);
    },
    [callback, delay, timerId],
  );

  useEffect(() => {
    // 컴포넌트가 언마운트되면 타이머 제거
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [timerId]);

  return debounceCallback;
};

export default useDebounce;
