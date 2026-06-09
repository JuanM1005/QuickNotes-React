import { useEffect, useState, type ReactNode } from 'react';
import SidebarContext from './SidebarContext';
import type { SidebarItemId } from '../data/Sidebar.data.types';
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
  const [activePage, setActivePage] = useState<SidebarItemId>('notes');

  const toggleSidebar = (): void => {
    setIsCollapsed((prevCollapsed) => !prevCollapsed);
  };

  useEffect(() => {
    persistCollapsed(isCollapsed);
  }, [isCollapsed]);

  return (
    <SidebarContext.Provider
      value={{ isCollapsed, toggleSidebar, activePage, setActivePage }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
