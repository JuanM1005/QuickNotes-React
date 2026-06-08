import { LuLogOut } from 'react-icons/lu';
import { Button } from '@/components/ui/Button';
import { SidebarQuickAction } from '../SidebarQuickAction';
import { useSidebar } from '../../context/useSidebarContext';
import styles from './SidebarFooter.styles';
import toast from 'react-hot-toast';

interface SidebarFooterProps {
  onOpenForm: () => void;
}

export const SidebarFooter = ({ onOpenForm }: SidebarFooterProps) => {
  const { isCollapsed } = useSidebar();

  const handleLogout = (): void => {
    toast('Módulo cerrar sesión proximamente!');
  };

  return (
    <div className={styles.wrapper}>
      <SidebarQuickAction onOpenForm={onOpenForm} />

      <hr className={styles.divider} />

      <Button
        variant="unstyled"
        className={styles.logoutBtn(isCollapsed)}
        onClick={handleLogout}
      >
        <LuLogOut size={18} className="shrink-0" />
        {!isCollapsed && <span>Cerrar sesión</span>}
      </Button>
    </div>
  );
};
