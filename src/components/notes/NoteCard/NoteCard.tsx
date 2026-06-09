import clsx from 'clsx';
import { FaRegTrashAlt, FaRegStar, FaStar } from 'react-icons/fa';
import { LuFileText } from 'react-icons/lu';
import { useState } from 'react';

import { formatDate } from '@/utils/formatDate.utils';
import { useNotes } from '@/context/notes';
import type { NoteCardProps } from './NoteCard.types';
import { NOTE_ICONS } from '@/data/noteIcons.data';
import { Button } from '@/components/ui/Button';
import styles, { iconBoxStyles } from './NoteCard.styles';
import { NoteCategoryBadge } from './components/NoteCategoryBadge';
import toast from 'react-hot-toast';

export const NoteCard = ({ note }: NoteCardProps) => {
  const { requestDeleteNote } = useNotes();
  const [selected, setSelected] = useState<boolean>(false);

  const iconBoxClass = note.color ? iconBoxStyles[note.color] : styles.iconBoxDefault;
  const NoteIcon = note.icon ? NOTE_ICONS[note.icon] : LuFileText;

  const handleFavoriteClick = (): void => {
    toast('Favoritos próximamente, por el momento solo visualización del estado del botón.');
    setSelected((prev) => !prev);
  };

  const handleDeleteClick = (): void => requestDeleteNote(note.id);

  return (
    <article className={styles.card}>
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
        <Button
          variant="unstyled"
          onClick={handleFavoriteClick}
          className={styles.favoriteBtn(selected)}
        >
          {selected ? <FaStar size={16} /> : <FaRegStar size={16} />}
        </Button>

        <Button
          variant="unstyled"
          onClick={handleDeleteClick}
          className={styles.deleteBtn}
        >
          <FaRegTrashAlt size={18} />
        </Button>
      </div>
    </article>
  );
};
