import { useNotes } from '@/context/notes';
import { ConfirmDialog } from '@/components/ui/ConfirmDialog';

export const NoteDeleteDialog = () => {
  const {
    noteToDelete,
    confirmDeleteNote,
    cancelDeleteNote,
    noteToPermanentlyDelete,
    confirmPermanentlyDeleteNote,
    cancelPermanentlyDeleteNote,
  } = useNotes();

  if (noteToPermanentlyDelete) {
    return (
      <ConfirmDialog
        isOpen
        title={`¿Eliminar "${noteToPermanentlyDelete.title}" permanentemente?`}
        description="Esta acción es permanente y no se puede deshacer."
        variant="danger"
        confirmText="Eliminar definitivamente"
        cancelText="Cancelar"
        onConfirm={confirmPermanentlyDeleteNote}
        onCancel={cancelPermanentlyDeleteNote}
      />
    );
  }

  return (
    <ConfirmDialog
      isOpen={noteToDelete !== null}
      title={`¿Mover "${noteToDelete?.title ?? ''}" a la papelera?`}
      description="Podrás restaurarla desde la papelera cuando quieras."
      variant="caution"
      confirmText="Mover a papelera"
      cancelText="Cancelar"
      onConfirm={confirmDeleteNote}
      onCancel={cancelDeleteNote}
    />
  );
};
