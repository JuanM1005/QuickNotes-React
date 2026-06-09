const SIDEBAR_STORAGE_KEY = 'quicknotes-sidebar-collapsed';

export const getInitialCollapsed = (defaultCollapsed: boolean): boolean => {
  try {
    if (typeof window === 'undefined') return defaultCollapsed;

    const storedState = localStorage.getItem(SIDEBAR_STORAGE_KEY);

    if (storedState === null) {
      return defaultCollapsed;
    }

    return storedState === 'true';
  } catch {
    return defaultCollapsed;
  }
};

export const persistCollapsed = (isCollapsed: boolean): void => {
  try {
    if (typeof window === 'undefined') return;

    localStorage.setItem(SIDEBAR_STORAGE_KEY, String(isCollapsed));
  } catch {
    return;
  }
};
