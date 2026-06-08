import clsx from 'clsx';
import {
  FaRegCalendarAlt,
  FaRegTrashAlt,
  FaRegStar,
  FaStar,
} from 'react-icons/fa';

import { formatDate } from '@/utils/formatDate';
import { useNotes } from '@/context/notes';
import type { NoteCategory } from '@/types/note.types';
import type { NoteCardProps } from './NoteCard.types';
import styles, { noteColorStyles, badgeColorStyles } from './NoteCard.styles';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';

const CATEGORY_LABELS: Record<NoteCategory, string> = {
  work: 'Trabajo',
  personal: 'Personal',
  ideas: 'Ideas',
};

export const NoteCard = ({ note }: NoteCardProps) => {
  const { requestDeleteNote } = useNotes();
  const [selected, setSelected] = useState<boolean>(false);

  const colorClassname = note.color
    ? noteColorStyles[note.color]
    : styles.defaultColor;

  const badgeClassname = note.color
    ? badgeColorStyles[note.color]
    : styles.defaultBadge;

  const handleFavoriteClick = (): void => {
    console.log('Agregar a favoritos proximamente!');
    setSelected((prev) => !prev);
  };

  const handleDeleteClick = (): void => requestDeleteNote(note.id);

  return (
    <article className={clsx(styles.card, colorClassname)}>
      <header className={styles.header}>
        <div className="min-w-0">
          {note.category && (
            <span className={clsx(styles.badge, badgeClassname)}>
              {CATEGORY_LABELS[note.category]}
            </span>
          )}
          <h3 className={styles.title}>{note.title}</h3>
        </div>
      </header>

      <div className={styles.body}>
        <p className={styles.date}>
          <FaRegCalendarAlt size={15} />
          <span>{formatDate(note.createdAt)}</span>
        </p>

        <p className={styles.content}>{note.content}</p>
      </div>

      <div className={styles.footer}>
        <Button
          variant="unstyled"
          onClick={handleFavoriteClick}
          className={clsx(
            styles.actionBtn,
            selected ? 'text-amber-500' : styles.favoriteBtn,
          )}
        >
          {selected ? <FaStar size={16} /> : <FaRegStar size={16} />}
        </Button>

        <Button
          variant="unstyled"
          onClick={handleDeleteClick}
          className={clsx(styles.actionBtn, styles.deleteBtn)}
        >
          <FaRegTrashAlt size={16} />
        </Button>
      </div>
    </article>
  );
};
