import { FaTrash, FaTrashRestore } from 'react-icons/fa';
import { Button } from '@/components/ui/Button';
import { useNotes } from '@/context/notes';
import actionStyles from './NoteActions.styles';

interface NoteTrashActionsProps {
  noteId: string;
}

export const NoteTrashActions = ({ noteId }: NoteTrashActionsProps) => {
  const { restoreNote, requestPermanentlyDeleteNote } = useNotes();

  return (
    <div className={actionStyles.btnContainer}>
      <Button
        variant="unstyled"
        onClick={() => restoreNote(noteId)}
        className={actionStyles.restoreBtn}
      >
        <FaTrashRestore size={14} />
        Restaurar
      </Button>

      <Button
        variant="unstyled"
        onClick={() => requestPermanentlyDeleteNote(noteId)}
        className={actionStyles.deleteBtn}
      >
        <FaTrash size={14} />
        Eliminar
      </Button>
    </div>
  );
};
