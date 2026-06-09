import { useEffect, useState, type ReactNode } from 'react';
import type { Note, NoteInput } from '@/types/note.types';
import { createNote } from '@/utils/createNote.utils';
import { NotesContext } from './NotesContext';
import { getStoredNotes, saveNotes } from '@/storage/notes.storage';
import toast from 'react-hot-toast';

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

  const addNote = (input: NoteInput): void => {
    const newNote = createNote(input);
    setNotes((prev) => [newNote, ...prev]);
    toast.success('Nota agregada correctamente.', { duration: 3000 });
  };

  // Alterna el campo isFavorite de la nota indicada.
  // Notas sin el campo (undefined) se vuelven favoritas en el primer click
  // gracias a la coerción !undefined === true.
  const toggleFavorite = (id: string) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, isFavorite: !note.isFavorite } : note,
      ),
    );
    toast.success('Nota marcada como favorita'); // Solo de prueba, un toast al marcar/desmarcar se vuelve demasiado ruido en la UX
  };

  // Borrado en 2 pasos: primero se registra la nota a eliminar (abre el diálogo),
  // luego el usuario confirma o cancela.
  const requestDeleteNote = (id: string): void => {
    const note = notes.find((note) => note.id === id); // Busca la nota por su id y la guarda en noteToDelete
    if (note) setNoteToDelete(note);
  };

  const confirmDeleteNote = (): void => {
    if (!noteToDelete) return;
    setNotes((prev) =>
      prev.map((note) =>
        note.id === noteToDelete.id ? { ...note, isDeleted: true } : note,
      ),
    );
    setNoteToDelete(null);
    toast.success('Nota movida a la papelera.', { duration: 3000 });
  };

  const restoreNote = (id: string): void => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, isDeleted: false } : note,
      ),
    );
    toast.success('Nota restaurada correctamente.', { duration: 3000 });
  };

  const permanentlyDeleteNote = (id: string): void => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
    toast.success('Nota eliminada definitivamente.', { duration: 3000 });
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
        addNote,
        toggleFavorite,
        requestDeleteNote,
        confirmDeleteNote,
        cancelDeleteNote,
        restoreNote,
        permanentlyDeleteNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
