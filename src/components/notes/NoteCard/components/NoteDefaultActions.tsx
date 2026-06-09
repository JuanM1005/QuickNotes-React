import { FaRegStar, FaStar, FaTrash } from 'react-icons/fa';
import { Button } from '@/components/ui/Button';
import { useNotes } from '@/context/notes';
import actionStyles from './NoteActions.styles';

interface NoteDefaultActionsProps {
  noteId: string;
  isFavorite: boolean;
}

export const NoteDefaultActions = ({
  noteId,
  isFavorite,
}: NoteDefaultActionsProps) => {
  const { toggleFavorite, requestDeleteNote } = useNotes();

  return (
    <>
      <Button
        variant="unstyled"
        onClick={() => toggleFavorite(noteId)}
        aria-label={isFavorite ? 'Quitar de favoritas' : 'Marcar como favorita'}
        className={actionStyles.favoriteBtn(isFavorite)}
      >
        {isFavorite ? <FaStar size={16} /> : <FaRegStar size={16} />}
      </Button>

      <Button
        variant="unstyled"
        onClick={() => requestDeleteNote(noteId)}
        aria-label={isFavorite ? 'Mover a papelera' : 'Mover a papelera'}
        className={actionStyles.paperBtn}
      >
        <FaTrash size={14} />
      </Button>
    </>
  );
};
