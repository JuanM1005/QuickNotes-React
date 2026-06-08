import {
  useState,
  type Dispatch,
  type SetStateAction,
  type SubmitEvent,
} from 'react';
import type { NoteCategory, NoteColor } from '@/types/note.types';
import type { NoteFormProps } from '../NoteForm.types';

interface UseNoteFormReturn {
  title: string;
  content: string;
  color: NoteColor | undefined;
  category: NoteCategory | undefined;
  setTitle: Dispatch<SetStateAction<string>>;
  setContent: Dispatch<SetStateAction<string>>;
  setColor: Dispatch<SetStateAction<NoteColor | undefined>>;
  setCategory: Dispatch<SetStateAction<NoteCategory | undefined>>;
  resetForm: () => void;
  handleSubmit: (e: SubmitEvent<HTMLFormElement>) => void;
  handleCancel: () => void;
  isSubmitDisabled: boolean;
}

export const useNoteForm = ({
  onSubmit,
  onCancel,
}: NoteFormProps): UseNoteFormReturn => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [color, setColor] = useState<NoteColor | undefined>(undefined);
  const [category, setCategory] = useState<NoteCategory | undefined>(undefined);

  const resetForm = (): void => {
    setTitle('');
    setContent('');
    setColor(undefined);
    setCategory(undefined);
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const trimmedTitle: string = title.trim();
    const trimmedContent: string = content.trim();

    if (!trimmedTitle || !trimmedContent) return;

    onSubmit({ title: trimmedTitle, content: trimmedContent, color, category });

    resetForm();
  };

  const handleCancel = () => {
    resetForm();
    onCancel();
  };

  const isSubmitDisabled = !title.trim() || !content.trim();

  return {
    title,
    content,
    color,
    category,
    setTitle,
    setContent,
    setColor,
    setCategory,
    resetForm,
    handleSubmit,
    handleCancel,
    isSubmitDisabled,
  };
};
