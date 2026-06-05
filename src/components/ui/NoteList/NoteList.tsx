import { NoteCard } from '@/components/ui/NoteCard';
import type { Note } from '@/types/note.types';

interface NoteListProps {
  notes: Note[];
}

export const NoteList = ({ notes }: NoteListProps) => {
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </section>
  );
};
