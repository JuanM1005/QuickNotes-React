import clsx from 'clsx';
import styles from './Sidebar.styles';
import { SidebarContent } from './components/SidebarContent/SidebarContent';
import { useSidebar } from './context/useSidebarContext';
import { SidebarToggle } from './components/SidebarToggle';

export const Sidebar = () => {
  const { isCollapsed, toggleSidebar } = useSidebar();

  return (
    <div className="hidden sm:block">
      <div className="relative">
        <aside
          className={clsx(
            styles.sidebarWrapper,
            isCollapsed ? styles.sidebarCollapsed : styles.sidebarExpanded,
          )}
        >
          <SidebarContent />
        </aside>
        <SidebarToggle />
      </div>
    </div>
  );
};
