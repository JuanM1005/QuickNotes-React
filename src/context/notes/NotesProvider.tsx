import { useEffect, useState, type ReactNode } from 'react';
import type { Note, NoteInput } from '@/types/note.types';
import { createNote } from '@/utils/createNote';
import { NotesContext } from './NotesContext';
import { getStoredNotes, saveNotes } from '@/storage/notes.storage';

interface NotesProviderProps {
  children: ReactNode;
}

export const NotesProvider = ({ children }: NotesProviderProps) => {
  const [notes, setNotes] = useState<Note[]>(getStoredNotes);
  // Se guarda el objeto completo (no solo el id) porque el ConfirmDialog
  // necesita el título de la nota para mostrarlo en el mensaje de confirmación.
  const [noteToDelete, setNoteToDelete] = useState<Note | null>(null);

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  const handleAddNote = (input: NoteInput): void => {
    const newNote = createNote(input);
    setNotes((prev) => [newNote, ...prev]);
  };

  // Borrado en 2 pasos: primero se registra la nota a eliminar (abre el diálogo),
  // luego el usuario confirma o cancela.
  const requestDeleteNote = (id: string): void => {
    const note = notes.find((n) => n.id === id); // Busca la nota por su id y la guarda en noteToDelete
    if (note) setNoteToDelete(note);
  };

  const confirmDeleteNote = (): void => {
    if (!noteToDelete) return; // Si no hay nota a eliminar no se ejecuta la función
    setNotes((prev) => prev.filter((n) => n.id !== noteToDelete.id)); // Se elimina del estado
    setNoteToDelete(null); // Después se limpia noteToDelete para cerrar el diálogo.
  };

  // Solo limpia noteToDelete para cerrar el diálogo sin modificar
  const cancelDeleteNote = (): void => {
    setNoteToDelete(null);
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        noteToDelete,
        handleAddNote,
        requestDeleteNote,
        confirmDeleteNote,
        cancelDeleteNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
