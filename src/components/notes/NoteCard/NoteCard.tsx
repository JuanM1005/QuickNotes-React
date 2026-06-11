import clsx from 'clsx';
import { LuFileText } from 'react-icons/lu';
import { formatDate } from '@/utils/formatDate.utils';
import type { NoteCardProps } from './NoteCard.types';
import { NOTE_ICONS } from '@/data/noteIcons.data';
import styles, { iconBoxStyles, cardColorStyles } from './NoteCard.styles';
import { NoteCategoryBadge } from './components/NoteCategoryBadge';
import { NoteDefaultActions } from './components/NoteDefaultActions';
import { NoteFavoritesActions } from './components/NoteFavoritesActions';
import { NoteTrashActions } from './components/NoteTrashActions';
import { NoteArchivedActions } from './components/NoteArchivedActions';

export const NoteCard = ({ note, variant = 'default' }: NoteCardProps) => {
  const cardColorClass = note.color
    ? cardColorStyles[note.color]
    : styles.cardDefault;
  const iconBoxClass = note.color
    ? iconBoxStyles[note.color]
    : styles.iconBoxDefault;
  const NoteIcon = note.icon ? NOTE_ICONS[note.icon] : LuFileText;

  return (
    <article className={clsx(styles.card, cardColorClass)}>
      <div className={clsx(styles.iconBox, iconBoxClass)}>
        <NoteIcon size={28} />
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{note.title}</h3>

        <p className={styles.content}>{note.content}</p>

        <div className={styles.footer}>
          <span className={styles.date}>{formatDate(note.createdAt)}</span>
          {note.category && <NoteCategoryBadge category={note.category} />}
        </div>
      </div>

      <div className={styles.actions}>
        {variant === 'trash' && <NoteTrashActions noteId={note.id} />}
        {variant === 'favorites' && (
          <NoteFavoritesActions
            noteId={note.id}
            isFavorite={note.isFavorite ?? false}
          />
        )}
        {variant === 'archived' && <NoteArchivedActions noteId={note.id} />}
        {(variant === 'default' || !variant) && (
          <NoteDefaultActions
            noteId={note.id}
            isFavorite={note.isFavorite ?? false}
          />
        )}
      </div>
    </article>
  );
};
