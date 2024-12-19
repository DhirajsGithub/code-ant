import { useState, useEffect } from 'react';
const useWindowSize = (threshold: number = 700) => {
  const [isMobile, setIsMobile] = useState(false);

  const checkWindowSize = () => {
    if (window.innerWidth <= threshold) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    checkWindowSize();
    window.addEventListener('resize', checkWindowSize);
    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, [threshold]);

  return isMobile;
};

export default useWindowSize;
