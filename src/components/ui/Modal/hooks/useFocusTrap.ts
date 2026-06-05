import { useEffect } from 'react';

export const useFocusTrap = (isActive: boolean) => {
  useEffect(() => {
    if (!isActive) return;

    const root = document.getElementById('root');
    if (!root) return;

    root.inert = true;

    return () => {
      root.inert = false;
    };
  }, [isActive]);
};
