import { useState } from 'react';
import { SidebarItem } from '../SidebarItem';
import { SIDEBAR_ITEMS } from '../../data';
import type { SidebarItemId } from '../../data/Sidebar.data.types';
import styles from './SidebarNav.styles';

export const SidebarNav = () => {
  const [activeId, setActiveId] = useState<SidebarItemId>('notes');

  return (
    <nav className={styles.nav}>
      {SIDEBAR_ITEMS.map((item) => (
        <SidebarItem
          key={item.id}
          icon={item.icon}
          label={item.label}
          isActive={item.id === activeId}
          onClick={() => setActiveId(item.id)}
        />
      ))}
    </nav>
  );
};
