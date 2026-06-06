import { NOTES } from '@/data/notes.data';
import type { Note, NoteInput } from '@/types/note.types';
import { createNote } from '@/utils/createNote';
import { useState } from 'react';

interface UseAppContentReturn {
  isModalOpen: boolean;
  notes: Note[];
  handleAddNote: (input: NoteInput) => void;
  handleOpenForm: () => void;
  handleCloseForm: () => void;
}

export const useAppContent = (): UseAppContentReturn => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [notes, setNotes] = useState<Note[]>(NOTES);

  const handleAddNote = (input: NoteInput): void => {
    const newNote = createNote(input);

    setNotes((prevNotes) => [newNote, ...prevNotes]);
    handleCloseForm();
  };

  const handleOpenForm = (): void => {
    setIsModalOpen(true);
  };

  const handleCloseForm = (): void => {
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    notes,
    handleAddNote,
    handleOpenForm,
    handleCloseForm,
  };
};
