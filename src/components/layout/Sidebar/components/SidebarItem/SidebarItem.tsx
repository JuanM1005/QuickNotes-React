import type { IconType } from 'react-icons';
import { Button } from '@/components/ui/Button';
import { useSidebar } from '../../context/useSidebarContext';
import styles from './SidebarItem.styles';

interface SidebarItemProps {
  icon: IconType;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const SidebarItem = ({
  icon: Icon,
  label,
  isActive = false,
  onClick,
}: SidebarItemProps) => {
  const { isCollapsed } = useSidebar();

  return (
    <Button
      variant="unstyled"
      onClick={onClick}
      className={styles.button(isCollapsed, isActive)}
    >
      <Icon size={18} className={styles.icon} />
      {!isCollapsed && <span>{label}</span>}
    </Button>
  );
};
