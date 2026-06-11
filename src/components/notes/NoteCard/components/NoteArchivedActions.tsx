import { FaTrash } from 'react-icons/fa';
import { MdUnarchive } from 'react-icons/md';
import { Button } from '@/components/ui/Button';
import { useNotes } from '@/context/notes';
import actionStyles from './NoteActions.styles';

interface NoteArchivedActionsProps {
  noteId: string;
}

export const NoteArchivedActions = ({ noteId }: NoteArchivedActionsProps) => {
  const { toggleArchive, requestDeleteNote } = useNotes();

  return (
    <div className={actionStyles.btnContainer}>
      <Button
        variant="unstyled"
        onClick={() => toggleArchive(noteId)}
        className={actionStyles.restoreBtn}
      >
        <MdUnarchive size={14} />
        Desarchivar
      </Button>

      <Button
        variant="unstyled"
        onClick={() => requestDeleteNote(noteId)}
        className={actionStyles.deleteBtn}
      >
        <FaTrash size={14} />
        Eliminar
      </Button>
    </div>
  );
};
