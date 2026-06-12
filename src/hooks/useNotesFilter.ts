import { useMemo } from 'react';
import { useNotes } from '@/context/notes';
import type { Note, NoteStatus } from '@/types/note.types';

export const useNotesFilter = (status: NoteStatus): Note[] => {
  const { notes } = useNotes();

  return useMemo(() => {
    if (status === 'active')
      return notes.filter((note) => !note.isArchived && !note.isDeleted);
    if (status === 'favorites')
      return notes.filter((note) => note.isFavorite && !note.isDeleted);
    if (status === 'archived')
      return notes.filter((note) => note.isArchived && !note.isDeleted);
    if (status === 'deleted') return notes.filter((note) => note.isDeleted);
    return notes;
  }, [notes, status]);
};
