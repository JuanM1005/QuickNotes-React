import { useMemo, useState } from 'react';
import { useNotes } from '@/context/notes';
import type { Note, NoteFilter } from '@/types/note.types';

export const useNotesFilter = () => {
  const { notes } = useNotes();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeFilter, setActiveFilter] = useState<NoteFilter>('all');

  const filteredNotes = useMemo<Note[]>(() => {
    return notes.filter((note) => {
      const matchesCategory =
        activeFilter === 'all' || note.category === activeFilter;

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === '' ||
        note.title.toLowerCase().includes(query) ||
        note.content.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [notes, searchQuery, activeFilter]);

  return {
    searchQuery,
    activeFilter,
    filteredNotes,
    setSearchQuery,
    setActiveFilter,
  };
};
