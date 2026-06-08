import { NoteList } from '@/components/notes/NoteList';
import { useNotes } from '@/context/notes';
import { ConfirmDialog } from '@/components/ui/ConfirmDialog';
import { AppHeader } from '../AppHeader';
import { AppToolbar } from '../AppToolbar';
import { useNotesFilter } from '../../hooks/useNotesFilter';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Button } from '@/components/ui/Button';
import styles from './AppContent.styles';

export const AppContent = () => {
  const { noteToDelete, confirmDeleteNote, cancelDeleteNote } = useNotes();
  const {
    searchQuery,
    activeFilter,
    filteredNotes,
    setSearchQuery,
    setActiveFilter,
  } = useNotesFilter();

  const handleViewAllNotes = (): void => {
    alert('Próximamente...');
  };

  return (
    <div className={styles.container}>
      <AppHeader />

      <AppToolbar
        searchQuery={searchQuery}
        activeFilter={activeFilter}
        onSearch={setSearchQuery}
        onFilterChange={setActiveFilter}
      />

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

      <NoteList notes={filteredNotes} />

      <ConfirmDialog
        isOpen={noteToDelete !== null}
        title={`¿Eliminar "${noteToDelete?.title ?? ''}"?`}
        description="Esta acción no se puede deshacer."
        variant="danger"
        onConfirm={confirmDeleteNote}
        onCancel={cancelDeleteNote}
      />
    </div>
  );
};
