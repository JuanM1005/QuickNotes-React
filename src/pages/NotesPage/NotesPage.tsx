import { NoteList } from '@/components/notes/NoteList';
import { PageLayout } from '@/components/layout/PageLayout';
import { PageHeader } from '@/components/layout/PageHeader';
import { NotesToolbar } from './components/NotesToolbar';
import { useNotesSearch } from './hooks/useNotesSearch';
import { APP_IMAGES } from '@/constants';
import { NotesEmptyState } from '@/components/notes/NotesEmptyState/NotesEmptyState';
import { NotesRecents } from './components/NoteRecents/NotesRecents';
import styles from './NotesPage.styles';

export const NotesPage = () => {
  const {
    searchQuery,
    activeFilter,
    filteredNotes,
    isSearching,
    setSearchQuery,
    setActiveFilter,
  } = useNotesSearch();

  return (
    <PageLayout>
      {filteredNotes.length > 0 ? (
        <PageHeader
          eyebrow="Bienvenido/a de nuevo 👋"
          title="QuickNotes"
          description="Tus ideas, apuntes y recordatorios en un solo lugar."
          image={APP_IMAGES.logo}
          imageAlt="Logo de QuickNotes"
        />
      ) : (
        <div className={styles.simpleHeader}>
          <span className={styles.simpleHeaderAccent} />
          <h2 className={styles.simpleHeaderTitle}>Notas</h2>
        </div>
      )}

      <NotesToolbar
        searchQuery={searchQuery}
        activeFilter={activeFilter}
        onSearch={setSearchQuery}
        onFilterChange={setActiveFilter}
      />

      {filteredNotes.length > 0 ? (
        <>
          <NotesRecents />
          <NoteList notes={filteredNotes} variant="default" />
        </>
      ) : isSearching ? (
        <NotesEmptyState
          imageSrc={APP_IMAGES.Icons.notFound}
          imageAlt="No encontrado"
          title="Sin resultados"
          description="Ninguna nota coincide con tu búsqueda. Intenta con otras palabras o cambia el filtro activo."
        />
      ) : (
        <NotesEmptyState
          imageSrc={APP_IMAGES.Icons.notNotes}
          imageAlt="Sin notas"
          title="No hay notas todavía"
          description="Crea tu primera nota para comenzar a organizar tus ideas, apuntes y recordatorios."
        />
      )}
    </PageLayout>
  );
};
