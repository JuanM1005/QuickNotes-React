import { FaPlus } from 'react-icons/fa';
import { LuNotebookPen } from 'react-icons/lu';
import { Button } from '@/components/ui/Button';
import { useSidebar } from '../../context/useSidebarContext';
import styles from './SidebarQuickAction.styles';

interface SidebarQuickActionProps {
  onOpenForm: () => void;
}

export const SidebarQuickAction = ({ onOpenForm }: SidebarQuickActionProps) => {
  const { isCollapsed } = useSidebar();

  if (isCollapsed) {
    return (
      <Button
        variant="primary"
        onClick={onOpenForm}
        className={styles.collapsedBtn}
      >
        <FaPlus size={15} />
      </Button>
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.iconWrapper}>
          <LuNotebookPen size={15} />
        </div>
        <div className={styles.textWrapper}>
          <p className={styles.title}>Nueva nota</p>
          <p className={styles.description}>Captura tu próxima idea</p>
        </div>
      </div>

      <Button variant="primary" fullWidth onClick={onOpenForm}>
        <FaPlus size={13} /> Crear nota
      </Button>
    </div>
  );
};
