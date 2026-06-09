import { PageLayout } from '@/components/layout/PageLayout';
import { PageHeader } from '@/components/layout/PageHeader';
import { NoteList } from '@/components/notes/NoteList';
import { EmptyState } from '@/components/ui/EmptyState';
import { useNotesFilter } from '@/hooks/useNotesFilter';
import { APP_IMAGES } from '@/constants';

export const ArchivedPage = () => {
  const allArchived = useNotesFilter('archived');

  return (
    <PageLayout>
      <PageHeader
        title="Papelera"
        description="Elementos eliminados recientemente"
        image={APP_IMAGES.Icons.archived}
        imageAlt="Eliminados"
      />

      {allArchived.length > 0 ? (
        <NoteList notes={allArchived} />
      ) : allArchived.length === 0 ? (
        <EmptyState
          title="La papelera está vacía"
          description="Las notas que elimines aparecerán aquí."
        />
      ) : (
        <EmptyState
          title="Sin resultados"
          description="Ninguna nota eliminada coincide con tu búsqueda."
        />
      )}
    </PageLayout>
  );
};
