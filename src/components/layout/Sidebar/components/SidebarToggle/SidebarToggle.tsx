import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { Button } from '@/components/ui/Button';
import { useSidebar } from '../../context/useSidebarContext';
import styles from './SidebarToggle.styles';

export const SidebarToggle = () => {
  const { isCollapsed, toggleSidebar } = useSidebar();

  return (
    <Button
      variant="unstyled"
      className={styles.button(isCollapsed)}
      onClick={toggleSidebar}
    >
      {isCollapsed ? <LuChevronRight size={14} /> : <LuChevronLeft size={14} />}
    </Button>
  );
};
