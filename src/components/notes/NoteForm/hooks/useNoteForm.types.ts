import { type Dispatch, type SetStateAction, type SubmitEvent } from 'react';
import type { NoteCategory, NoteColor, NoteIcon } from '@/types/note.types';

export interface UseNoteFormReturn {
  title: string;
  content: string;
  color: NoteColor | undefined;
  category: NoteCategory | undefined;
  icon: NoteIcon | undefined;
  setTitle: Dispatch<SetStateAction<string>>;
  setContent: Dispatch<SetStateAction<string>>;
  setColor: Dispatch<SetStateAction<NoteColor | undefined>>;
  setCategory: Dispatch<SetStateAction<NoteCategory | undefined>>;
  setIcon: Dispatch<SetStateAction<NoteIcon | undefined>>;
  handleSubmit: (e: SubmitEvent<HTMLFormElement>) => void;
  handleCancel: () => void;
  isSubmitDisabled: boolean;
}
