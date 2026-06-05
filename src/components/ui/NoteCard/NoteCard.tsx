import clsx from 'clsx';
import { formatDate } from '@/utils/formatDate';
import type { NoteCardProps } from './NoteCard.types';
import styles, { noteColorStyles } from './NoteCard.styles';
import { FaRegCalendarAlt } from 'react-icons/fa';

export const NoteCard = ({ note }: NoteCardProps) => {
  const colorClassname = note.color
    ? noteColorStyles[note.color]
    : styles.defaultColor;

  return (
    <article className={clsx(styles.card, colorClassname)}>
      <header className={styles.header}>
        <h3 className={styles.title}>{note.title}</h3>

        <p className={styles.date}>
          <FaRegCalendarAlt size={15} />{' '}
          <span>{formatDate(note.createdAt)}</span>
        </p>
      </header>

      <p className={styles.content}>{note.content}</p>
    </article>
  );
};
