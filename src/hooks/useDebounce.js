import { useEffect, useState } from 'react';

const useDebounce = (value, delay) => {
  const [debounce, setDebounce] = useState(value);

  useEffect(() => {
    const handleDebounce = setTimeout(() => {
      setDebounce(value);
    }, delay);

    return () => {
      clearTimeout(handleDebounce);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return debounce;
};

export default useDebounce;
