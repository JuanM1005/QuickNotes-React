import { NoteList } from '@/components/notes/NoteList';
import { useNotes } from '@/context/notes';
import { PageLayout } from '@/components/layout/PageLayout';
import { PageHeader } from '@/components/layout/PageHeader';
import { NotesToolbar } from './components/NotesToolbar';
import { useNotesSearch } from './hooks/useNotesSearch';
import { APP_IMAGES } from '@/constants';
import { NotesEmptyState } from '@/components/notes/NotesEmptyState/NotesEmptyState';
import { NotesRecents } from './components/NoteRecents/NotesRecents';

export const NotesPage = () => {
  const { notes } = useNotes();
  const {
    searchQuery,
    activeFilter,
    filteredNotes,
    setSearchQuery,
    setActiveFilter,
  } = useNotesSearch();

  return (
    <PageLayout>
      <PageHeader
        eyebrow="Bienvenido/a de nuevo 👋"
        title="QuickNotes"
        description="Tus ideas, apuntes y recordatorios en un solo lugar."
        image={APP_IMAGES.logo}
        imageAlt="Logo de QuickNotes"
      />

      {filteredNotes.length > 0 ? (
        <>
          <NotesToolbar
            searchQuery={searchQuery}
            activeFilter={activeFilter}
            onSearch={setSearchQuery}
            onFilterChange={setActiveFilter}
          />
          <NotesRecents />
          <NoteList notes={filteredNotes} variant="default" />
        </>
      ) : notes.length === 0 ? (
        <NotesEmptyState
          imageSrc={APP_IMAGES.Icons.notNotes}
          imageAlt="Sin notas"
          title="No hay notas todavía"
          description="Crea tu primera nota para comenzar a organizar tus ideas, apuntes y recordatorios."
        />
      ) : (
        <NotesEmptyState
          imageSrc={APP_IMAGES.Icons.notFound}
          imageAlt="No encontrado"
          title="Sin resultados"
          description="Ninguna nota coincide con tu búsqueda. Intenta con otras palabras o cambia el filtro activo."
        />
      )}
    </PageLayout>
  );
};
