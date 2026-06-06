import clsx from 'clsx';
import { FaRegCalendarAlt, FaRegTrashAlt } from 'react-icons/fa';

import { formatDate } from '@/utils/formatDate';
import { useNotes } from '@/context/notes';
import type { NoteCardProps } from './NoteCard.types';
import styles, { noteColorStyles } from './NoteCard.styles';
import { Button } from '../../ui/Button/Button';

export const NoteCard = ({ note }: NoteCardProps) => {
  const { handleDeleteNote } = useNotes();
  const colorClassname = note.color
    ? noteColorStyles[note.color]
    : styles.defaultColor;

  const handleDeleteClick = (): void => handleDeleteNote(note.id);

  return (
    <article className={clsx(styles.card, colorClassname)}>
      <header className={styles.header}>
        <h3 className={styles.title}>{note.title}</h3>

        <Button variant="danger" size="sm" onClick={handleDeleteClick}>
          <FaRegTrashAlt size={15} />
        </Button>
      </header>

      <div className={styles.body}>
        <p className={styles.date}>
          <FaRegCalendarAlt size={15} />
          <span>{formatDate(note.createdAt)}</span>
        </p>

        <p className={styles.content}>{note.content}</p>
      </div>
    </article>
  );
};
