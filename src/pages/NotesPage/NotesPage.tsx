import { NoteList } from '@/components/notes/NoteList';
import { useNotes } from '@/context/notes';
import { ConfirmDialog } from '@/components/ui/ConfirmDialog';
import { PageLayout } from '@/components/layout/PageLayout';
import { PageHeader } from '@/components/layout/PageHeader';
import { NotesToolbar } from './components/NotesToolbar';
import { NotesEmptyState } from './components/NotesEmptyState';
import { useNotesFilter } from './hooks/useNotesFilter';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Button } from '@/components/ui/Button';
import { APP_IMAGES } from '@/constants';
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
    <PageLayout>
      <PageHeader
        eyebrow="Bienvenido/a de nuevo 👋"
        title="QuickNotes"
        description="Tus ideas, apuntes y recordatorios en un solo lugar."
        image={APP_IMAGES.logo}
        imageAlt="Logo de QuickNotes"
      />

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
        <NotesEmptyState
          title="No hay notas todavía"
          description="Crea tu primera nota para comenzar a organizar tus ideas, apuntes y recordatorios."
        />
      ) : (
        <NotesEmptyState
          title="Sin resultados"
          description="Ninguna nota coincide con tu búsqueda. Intenta con otras palabras o cambia el filtro activo."
        />
      )}

      <ConfirmDialog
        isOpen={noteToDelete !== null}
        title={`¿Eliminar "${noteToDelete?.title ?? ''}"?`}
        description="Esta acción no se puede deshacer."
        variant="danger"
        onConfirm={confirmDeleteNote}
        onCancel={cancelDeleteNote}
      />
    </PageLayout>
  );
};
