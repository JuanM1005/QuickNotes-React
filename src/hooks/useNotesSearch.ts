import { useMemo, useState } from 'react';
import type { Note } from '@/types/note.types';

export const useNotesSearch = (notes: Note[]) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredNotes = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return notes
      .filter(
        (note) =>
          note.title.toLowerCase().includes(query) ||
          note.content.toLowerCase().includes(query),
      )
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
  }, [notes, searchTerm]);

  return {
    filteredNotes,
    searchTerm,
    setSearchTerm,
  };
};
