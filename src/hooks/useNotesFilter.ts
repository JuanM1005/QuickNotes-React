import { useMemo } from 'react';
import { useNotes } from '@/context/notes';
import type { Note, NoteStatus } from '@/types/note.types';

export const useNotesFilter = (status: NoteStatus): Note[] => {
  const { notes } = useNotes();

  return useMemo(() => {
    if (status === 'favorites') return notes.filter((note) => note.isFavorite);
    if (status === 'archived') return notes.filter((note) => note.isArchived);
    if (status === 'deleted') return notes.filter((note) => note.isDeleted);
    return notes;
  }, [notes, status]);
};
