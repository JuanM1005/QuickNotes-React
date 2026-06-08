import { useState } from 'react';
import { SidebarItem } from '../SidebarItem';
import { SIDEBAR_ITEMS } from '../../data';
import type { SidebarItemId } from '../../data';
import styles from './SidebarNav.styles';

export const SidebarNav = () => {
  const [activeId, setActiveId] = useState<SidebarItemId>('notes');

  const handleClick = (id: SidebarItemId, label: string): void => {
    setActiveId(id);
    alert(`Proximamente la sección: "${label}"`)
  };

  return (
    <nav className={styles.nav}>
      {SIDEBAR_ITEMS.map((item) => (
        <SidebarItem
          key={item.id}
          icon={item.icon}
          label={item.label}
          isActive={item.id === activeId}
          onClick={() => handleClick(item.id, item.label)}
        />
      ))}
    </nav>
  );
};
