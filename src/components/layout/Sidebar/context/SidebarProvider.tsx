import { useState, type ReactNode } from 'react';
import SidebarContext from './SidebarContext';

interface SidebarProviderProps {
  children: ReactNode;
  defaultCollapsed?: boolean;
}

const SidebarProvider = ({
  children,
  defaultCollapsed = false,
}: SidebarProviderProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(defaultCollapsed);

  const toggleSidebar = (): void => {
    setIsCollapsed((prevCollapsed) => !prevCollapsed);
  };

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
