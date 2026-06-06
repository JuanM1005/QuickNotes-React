import type { Note, NoteInput } from '@/types/note.types';

/**
 * Define la estructura del contexto de notas.
 *
 * Este contrato indica qué datos y funciones estarán disponibles
 * para los componentes que consuman NotesContext.
 */
export interface NotesContextValue {
  notes: Note[];
  handleAddNote: (input: NoteInput) => void;
  handleDeleteNote: (id: string) => void;
}
