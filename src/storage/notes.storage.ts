// import { NOTES } from '@/data/notes.data';
import type { Note } from '@/types/note.types';

const NOTES_STORAGE_KEY = 'quicknotes-notes';

export const getStoredNotes = (): Note[] => {
  try {
    const storedNotes = localStorage.getItem(NOTES_STORAGE_KEY);

    if (!storedNotes) return [];

    return JSON.parse(storedNotes) as Note[];
  } catch {
    return [];
  }
};

export const saveNotes = (notes: Note[]): void => {
  localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
};
