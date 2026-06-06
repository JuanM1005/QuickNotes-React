import type { Note, NoteInput } from '@/types/note.types';

/**
 * Define la estructura del contexto de notas.
 *
 * Este contrato indica qué datos y funciones estarán disponibles
 * para los componentes que consuman NotesContext.
 */
export interface NotesContextValue {
  notes: Note[];
  noteToDelete: Note | null;
  handleAddNote: (input: NoteInput) => void;
  requestDeleteNote: (id: string) => void;
  confirmDeleteNote: () => void;
  cancelDeleteNote: () => void;
}
