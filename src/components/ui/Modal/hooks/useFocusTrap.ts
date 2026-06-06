import { useEffect } from 'react';

export const useFocusTrap = (isActive: boolean) => {
  useEffect(() => {
    if (!isActive) return;

    const root = document.getElementById('root');
    if (!root) return;

    // inert desactiva toda interactividad de #root mientras el modal está abierto,
    // forzando que el foco quede atrapado en el modal (que se renderiza fuera de root via portal)
    root.inert = true;

    return () => {
      root.inert = false;
    };
  }, [isActive]);
};
