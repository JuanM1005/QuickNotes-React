import { useEffect } from 'react';

export const useLockScroll = (isActive: boolean) => {
  useEffect(() => {
    if (!isActive) return;

    // Se guarda el valor original por si el body ya tenía overflow configurado antes de abrir el modal
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isActive]);
};
