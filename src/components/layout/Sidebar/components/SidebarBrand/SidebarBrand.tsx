import { LuNotebookPen } from 'react-icons/lu';
import { useSidebar } from '../../context/useSidebarContext';
import styles from './SidebarBrand.styles';

export const SidebarBrand = () => {
  const { isCollapsed } = useSidebar();

  return (
    <div className={styles.wrapper(isCollapsed)}>
      <div className={styles.iconWrapper}>
        <LuNotebookPen size={24} />
      </div>

      {!isCollapsed && (
        <div className={styles.textWrapper}>
          <span className={styles.title}>QuickNotes</span>
        </div>
      )}
    </div>
  );
};
