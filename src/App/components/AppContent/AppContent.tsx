import { NoteList } from '@/components/notes/NoteList';
import { useNotes } from '@/context/notes';
import { ConfirmDialog } from '@/components/ui/ConfirmDialog';
import { AppHeader } from '../AppHeader';
import { AppToolbar } from '../AppToolbar';
import { useNotesFilter } from '../../hooks/useNotesFilter';
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

  return (
    <div className={styles.container}>
      <AppHeader />

      <AppToolbar
        searchQuery={searchQuery}
        activeFilter={activeFilter}
        onSearch={setSearchQuery}
        onFilterChange={setActiveFilter}
      />

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
