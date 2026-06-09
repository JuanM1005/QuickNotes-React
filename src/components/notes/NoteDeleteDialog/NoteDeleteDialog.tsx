import { useNotes } from '@/context/notes';
import { ConfirmDialog } from '@/components/ui/ConfirmDialog';

export const NoteDeleteDialog = () => {
  const { noteToDelete, confirmDeleteNote, cancelDeleteNote } = useNotes();

  return (
    <ConfirmDialog
      isOpen={noteToDelete !== null}
      title={`¿Eliminar "${noteToDelete?.title ?? ''}"?`}
      description="Esta acción no se puede deshacer."
      variant="danger"
      confirmText="Eliminar"
      onConfirm={confirmDeleteNote}
      onCancel={cancelDeleteNote}
    />
  );
};
