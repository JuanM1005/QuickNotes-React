import { useState } from 'react';
import { useNotes } from '@/context/notes';
import type { NoteInput } from '@/types/note.types';

export const useNoteModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { addNote: handleAddNote } = useNotes();

  const open = (): void => setIsOpen(true);
  const close = (): void => setIsOpen(false);

  const handleSubmit = (input: NoteInput): void => {
    handleAddNote(input);
    close();
  };

  return { isOpen, open, close, handleSubmit };
};
