import { useContext } from 'react';
import SidebarContext, { type SidebarContextProps } from './SidebarContext';

export const useSidebar = (): SidebarContextProps => {
  const context = useContext(SidebarContext);

  if (context === undefined) {
    throw new Error('useSidebar debe usarse dentro de un SidebarProvider');
  }

  return context;
};
