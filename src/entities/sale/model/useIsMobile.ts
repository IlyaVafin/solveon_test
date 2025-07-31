'use client';

import { useEffect, useState } from 'react';

export const useIsMobile = (breakpoint = 595) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= breakpoint);
    if (typeof window !== 'undefined') {
      check();
      window.addEventListener('resize', check);
    }
    return window.removeEventListener('resize', check);
  }, []);

  return isMobile;
};
