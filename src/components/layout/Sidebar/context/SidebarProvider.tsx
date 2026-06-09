import { useEffect, useState, type ReactNode } from 'react';
import SidebarContext from './SidebarContext';
import {
  getInitialCollapsed,
  persistCollapsed,
} from '@/storage/sidebar.storage';

interface SidebarProviderProps {
  children: ReactNode;
  defaultCollapsed?: boolean;
}

const SidebarProvider = ({
  children,
  defaultCollapsed = false,
}: SidebarProviderProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(() =>
    getInitialCollapsed(defaultCollapsed),
  );

  const toggleSidebar = (): void => {
    setIsCollapsed((prevCollapsed) => !prevCollapsed);
  };

  useEffect(() => {
    persistCollapsed(isCollapsed);
  }, [isCollapsed]);

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
