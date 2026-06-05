import { useEffect } from 'react';

export const useLockScroll = (isActive: boolean) => {
  useEffect(() => {
    if (!isActive) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isActive]);
};
