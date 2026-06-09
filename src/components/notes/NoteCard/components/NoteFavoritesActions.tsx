import { FaStar, FaRegStar } from 'react-icons/fa';
import { Button } from '@/components/ui/Button';
import { useNotes } from '@/context/notes';
import actionStyles from './NoteActions.styles';

interface NoteFavoritesActionsProps {
  noteId: string;
  isFavorite: boolean;
}

export const NoteFavoritesActions = ({
  noteId,
  isFavorite,
}: NoteFavoritesActionsProps) => {
  const { toggleFavorite } = useNotes();

  return (
    <Button
      variant="unstyled"
      onClick={() => toggleFavorite(noteId)}
      aria-label="Quitar de favoritas"
      className={actionStyles.favoriteBtn(isFavorite)}
    >
      {isFavorite ? <FaStar size={16} /> : <FaRegStar size={16} />}
    </Button>
  );
};
