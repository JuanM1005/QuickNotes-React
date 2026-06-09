// import { LuLogOut } from 'react-icons/lu';
// import { Button } from '@/components/ui/Button';
import { SidebarQuickAction } from '../SidebarQuickAction';
// import { useSidebar } from '../../context/useSidebarContext';
import styles from './SidebarFooter.styles';
// import toast from 'react-hot-toast';

interface SidebarFooterProps {
  onOpenForm: () => void;
}

export const SidebarFooter = ({ onOpenForm }: SidebarFooterProps) => {
  // const { isCollapsed } = useSidebar();

  // const handleLogout = (): void => {
  //   toast('Módulo de autenticación + cerrar sesión proximamente!');
  // };

  return (
    <div className={styles.wrapper}>
      <hr className={styles.divider} />
      <SidebarQuickAction onOpenForm={onOpenForm} />

      {/* 
      <Button
        variant="unstyled"
        className={styles.logoutBtn(isCollapsed)}
        onClick={handleLogout}
      >
        <LuLogOut size={18} className="shrink-0" />
        {!isCollapsed && <span>Cerrar sesión</span>}
      </Button> */}
    </div>
  );
};
