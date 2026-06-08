import type { IconType } from 'react-icons';

export type SidebarItemId = 'notes' | 'favorites' | 'archived' | 'trash';

export interface SidebarItemsProps {
  id: SidebarItemId;
  label: string;
  icon: IconType;
}
