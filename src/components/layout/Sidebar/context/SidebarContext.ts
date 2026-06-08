import { createContext } from 'react';

export interface SidebarContextProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined,
);

export default SidebarContext;
