import type { Note } from '@/types/note.types';

export type NoteCardVariant = 'default' | 'favorites' | 'trash' | 'archived';

export interface NoteCardProps {
  note: Note;
  variant?: NoteCardVariant;
}
