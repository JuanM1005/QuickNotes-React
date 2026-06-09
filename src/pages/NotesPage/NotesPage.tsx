import { NoteList } from '@/components/notes/NoteList';
import { useNotes } from '@/context/notes';
import { ConfirmDialog } from '@/components/ui/ConfirmDialog';
import { NotesHeader } from './components/NotesHeader';
import { NotesToolbar } from './components/NotesToolbar';
import { useNotesFilter } from './hooks/useNotesFilter';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Button } from '@/components/ui/Button';
import styles from './NotesPage.styles';
import toast from 'react-hot-toast';

export const NotesPage = () => {
  const { notes, noteToDelete, confirmDeleteNote, cancelDeleteNote } =
    useNotes();
  const {
    searchQuery,
    activeFilter,
    filteredNotes,
    setSearchQuery,
    setActiveFilter,
  } = useNotesFilter();

  const handleViewAllNotes = (): void => {
    toast(
      'Próximamente podrás ver y gestionar todas tus notas desde una vista dedicada.',
    );
  };

  return (
    <div className={styles.container}>
      <NotesHeader />

      <NotesToolbar
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

      {filteredNotes.length > 0 ? (
        <NoteList notes={filteredNotes} />
      ) : notes.length === 0 ? (
        <div className={styles.emptyState}>
          <h2 className={styles.emptyStateTitle}>No hay notas todavía</h2>

          <p className={styles.emptyStateDescription}>
            Crea tu primera nota para comenzar a organizar tus ideas, apuntes y
            recordatorios.
          </p>
        </div>
      ) : (
        <div className={styles.emptyState}>
          <h2 className={styles.emptyStateTitle}>Sin resultados</h2>

          <p className={styles.emptyStateDescription}>
            Ninguna nota coincide con tu búsqueda. Intenta con otras palabras o
            cambia el filtro activo.
          </p>
        </div>
      )}

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
