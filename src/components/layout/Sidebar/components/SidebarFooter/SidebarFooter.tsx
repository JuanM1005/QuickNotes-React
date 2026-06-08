import { LuLogOut } from 'react-icons/lu';
import { Button } from '@/components/ui/Button';
import { SidebarQuickAction } from '../SidebarQuickAction';
import { useSidebar } from '../../context/useSidebarContext';
import styles from './SidebarFooter.styles';

interface SidebarFooterProps {
  onOpenForm: () => void;
}

export const SidebarFooter = ({ onOpenForm }: SidebarFooterProps) => {
  const { isCollapsed } = useSidebar();

  return (
    <div className={styles.wrapper}>
      <SidebarQuickAction onOpenForm={onOpenForm} />

      <hr className={styles.divider} />

      <Button
        variant="unstyled"
        className={styles.logoutBtn(isCollapsed)}
        onClick={(): void => alert('Cerrar sesión proximamente!')}
      >
        <LuLogOut size={18} className="shrink-0" />
        {!isCollapsed && <span>Cerrar sesión</span>}
      </Button>
    </div>
  );
};
