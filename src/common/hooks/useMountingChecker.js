import { useEffect, useState } from 'react';

const useMountingChecker = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
};

export default useMountingChecker;
