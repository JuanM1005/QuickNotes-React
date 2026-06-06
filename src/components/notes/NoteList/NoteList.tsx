import { NoteCard } from '@/components/notes/NoteCard';
import type { Note } from '@/types/note.types';
import styles from './NoteList.styles';

interface NoteListProps {
  notes: Note[];
  onDelete: (id: string) => void;
}

export const NoteList = ({ notes, onDelete }: NoteListProps) => {
  return (
    <section className={styles.cardGrid}>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} onDelete={onDelete} />
      ))}
    </section>
  );
};
