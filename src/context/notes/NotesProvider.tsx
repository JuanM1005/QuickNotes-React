import { useState, type ReactNode } from 'react';
import { NOTES } from '@/data/notes.data';
import type { Note, NoteInput } from '@/types/note.types';
import { createNote } from '@/utils/createNote';
import { NotesContext } from './NotesContext';

interface NotesProviderProps {
  children: ReactNode;
}

export const NotesProvider = ({ children }: NotesProviderProps) => {
  const [notes, setNotes] = useState<Note[]>(NOTES);
  // const [noteToDelete, setNoteToDelete] = useState<Note | null>(null);

  const handleAddNote = (input: NoteInput): void => {
    const newNote = createNote(input);
    setNotes((prevNotes) => [newNote, ...prevNotes]);
  };

  const handleDeleteNote = (id: string): void => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };  

  return (
    <NotesContext.Provider value={{ notes, handleAddNote, handleDeleteNote }}>
      {children}
    </NotesContext.Provider>
  );
};
