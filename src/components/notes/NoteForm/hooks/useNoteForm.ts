import {
  useState,
  type Dispatch,
  type SetStateAction,
  type SubmitEvent,
} from 'react';
import type { NoteColor } from '@/types/note.types';
import type { NoteFormProps } from '../NoteForm.types';

interface UseNoteFormReturn {
  title: string;
  content: string;
  color: NoteColor | undefined;
  setTitle: Dispatch<SetStateAction<string>>;
  setContent: Dispatch<SetStateAction<string>>;
  setColor: Dispatch<SetStateAction<NoteColor | undefined>>;
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

  const resetForm = (): void => {
    setTitle('');
    setContent('');
    setColor(undefined);
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Si el usuario escribe "  " técnicamente el input no está vacío
    // En este caso con el método .trim() quitamos los espacios en blanco y validamos que los input no este vacio
    const trimmedTitle: string = title.trim();
    const trimmedContent: string = content.trim();

    if (!trimmedTitle || !trimmedContent) return;

    onSubmit({ title: trimmedTitle, content: trimmedContent, color });

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
    setTitle,
    setContent,
    setColor,
    resetForm,
    handleSubmit,
    handleCancel,
    isSubmitDisabled,
  };
};
