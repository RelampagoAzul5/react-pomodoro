import { useEffect, useRef } from 'react';

export function useInterval<C extends CallableFunction>(
  callback: C,
  delay: number | null,
): void {
  const savedCallback = useRef<C | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null || isNaN(delay) || delay <= 0) return;

    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }

    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}
