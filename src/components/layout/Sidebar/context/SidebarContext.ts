import { createContext } from 'react';
import type { SidebarItemId } from '../data/Sidebar.data.types';

export interface SidebarContextProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
  activePage: SidebarItemId;
  setActivePage: (id: SidebarItemId) => void;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined,
);

export default SidebarContext;
