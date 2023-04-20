import { useState, useRef, useEffect } from "react";

export const useDebounceValue = (value, TIMEOUT_IN_MS = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const timerRef = useRef(null);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(
      () => setDebouncedValue(value),
      TIMEOUT_IN_MS
    );

    return () => clearTimeout(timerRef.current);
  }, [value]);

  return debouncedValue;
};
