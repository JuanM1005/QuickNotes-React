import { Button } from '@/components/ui/Button';
import styles from './NotesRecents.styles';
import { MdKeyboardArrowRight } from 'react-icons/md';
import toast from 'react-hot-toast';

export const NotesRecents = () => {
  const handleViewAllNotes = (): void => {
    toast(
      'Próximamente podrás ver y gestionar todas tus notas desde una vista dedicada.',
    );
  };

  return (
    <div className={styles.sectionHeader}>
      <h2 className={styles.sectionTitle}>Notas recientes</h2>

      <Button
        variant="unstyled"
        className={styles.viewAllBtn}
        onClick={handleViewAllNotes}
      >
        Ver todas
        <MdKeyboardArrowRight size={18} />
      </Button>
    </div>
  );
};
