import { SidebarItem } from '../SidebarItem';
import { SIDEBAR_ITEMS } from '../../data';
import { useSidebar } from '../../context/useSidebarContext';
import styles from './SidebarNav.styles';

export const SidebarNav = () => {
  const { activePage, setActivePage } = useSidebar();

  return (
    <nav className={styles.nav}>
      {SIDEBAR_ITEMS.map((item) => (
        <SidebarItem
          key={item.id}
          icon={item.icon}
          label={item.label}
          isActive={item.id === activePage}
          onClick={() => setActivePage(item.id)}
        />
      ))}
    </nav>
  );
};
