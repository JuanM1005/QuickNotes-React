import type { Note } from '@/types/note.types';

export interface NoteViewModalProps {
  note: Note;
  isOpen: boolean;
  onClose: () => void;
}
