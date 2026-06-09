import { NoteCard } from '@/components/notes/NoteCard';
import type { NoteCardVariant } from '@/components/notes/NoteCard/NoteCard.types';
import type { Note } from '@/types/note.types';
import styles from './NoteList.styles';

interface NoteListProps {
  notes: Note[];
  variant?: NoteCardVariant;
}

export const NoteList = ({ notes, variant }: NoteListProps) => {
  return (
    <section className={styles.cardGrid}>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} variant={variant} />
      ))}
    </section>
  );
};
