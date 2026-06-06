import type { NoteInput } from '@/types/note.types';

export interface NoteFormProps {
  onSubmit: (input: NoteInput) => void;
  onCancel: () => void;
}
