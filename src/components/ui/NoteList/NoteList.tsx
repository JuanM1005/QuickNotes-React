import { NoteCard } from '@/components/ui/NoteCard';
import type { Note } from '@/types/note.types';
import styles from './NoteList.styles';

interface NoteListProps {
  notes: Note[];
}

export const NoteList = ({ notes }: NoteListProps) => {
  return (
    <section className={styles.cardGrid}>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </section>
  );
};
