import {
  useState,
  type Dispatch,
  type SetStateAction,
  type SubmitEvent,
} from 'react';
import type { NoteCategory, NoteColor, NoteIcon } from '@/types/note.types';
import type { NoteFormProps } from '../NoteForm.types';

interface UseNoteFormReturn {
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
  const [icon, setIcon] = useState<NoteIcon | undefined>(undefined);

  const resetForm = (): void => {
    setTitle('');
    setContent('');
    setColor(undefined);
    setCategory(undefined);
    setIcon(undefined);
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const trimmedTitle: string = title.trim();
    const trimmedContent: string = content.trim();

    if (!trimmedTitle || !trimmedContent) return;

    onSubmit({
      title: trimmedTitle,
      content: trimmedContent,
      color,
      category,
      icon,
    });

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
    icon,
    setTitle,
    setContent,
    setColor,
    setCategory,
    setIcon,
    resetForm,
    handleSubmit,
    handleCancel,
    isSubmitDisabled,
  };
};
