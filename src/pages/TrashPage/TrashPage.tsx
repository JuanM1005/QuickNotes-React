import { PageLayout } from '@/components/layout/PageLayout';
import { PageHeader } from '@/components/layout/PageHeader';
import { NoteList } from '@/components/notes/NoteList';
import { EmptyState } from '@/components/ui/EmptyState';
import { useNotesFilter } from '@/hooks/useNotesFilter';
import { APP_IMAGES } from '@/constants';

export const TrashPage = () => {
  const trashNotes = useNotesFilter('deleted');

  return (
    <PageLayout>
      <PageHeader
        title="Papelera"
        description="Elementos eliminados recientemente"
        image={APP_IMAGES.Icons.trash}
        imageAlt="Papelera"
      />

      {trashNotes.length > 0 ? (
        <NoteList notes={trashNotes} variant="trash" />
      ) : (
        <EmptyState
          title="La papelera está vacía"
          description="Las notas que elimines aparecerán aquí."
        />
      )}
    </PageLayout>
  );
};
