import { NoteCard } from '@/components/notes/NoteCard';
import { useNotes } from '@/context/notes';
import styles from './NoteList.styles';

export const NoteList = () => {
  const { notes } = useNotes();

  return (
    <section className={styles.cardGrid}>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </section>
  );
};
