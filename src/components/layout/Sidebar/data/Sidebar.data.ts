import { LuFileText, LuStar, LuArchive, LuTrash2 } from 'react-icons/lu';
import type { SidebarItemsProps } from './Sidebar.data.types';

export const SIDEBAR_ITEMS: SidebarItemsProps[] = [
  {
    id: 'notes',
    label: 'Notas',
    icon: LuFileText,
  },
  {
    id: 'favorites',
    label: 'Favoritas',
    icon: LuStar,
  },
  {
    id: 'archived',
    label: 'Archivadas',
    icon: LuArchive,
  },
  {
    id: 'trash',
    label: 'Papelera',
    icon: LuTrash2,
  },
];
