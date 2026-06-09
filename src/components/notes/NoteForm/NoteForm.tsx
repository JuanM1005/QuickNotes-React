import type { ChangeEvent } from 'react';

import { type NoteFormProps } from './NoteForm.types';
import { Button } from '@/components/ui/Button';
import { FormField } from '@/components/ui/FormField';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import styles from './NoteForm.styles';
import { useNoteForm } from './hooks/useNoteForm';
import { NoteCategoryPicker } from './components/NoteCategoryPicker';
import { NoteIconPicker } from './components/NoteIconPicker';
import { NoteColorPicker } from './components/NoteColorPicker';

export const NoteForm = ({ onSubmit, onCancel }: NoteFormProps) => {
  const {
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
    handleSubmit,
    handleCancel,
    isSubmitDisabled,
  } = useNoteForm({ onSubmit, onCancel });

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <FormField label="Titulo" htmlFor="note-title">
        <Input
          id="note-title"
          type="text"
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
          placeholder="Escribe el titulo de tu nota"
          autoFocus
        />
      </FormField>

      <FormField
        label="Contenido"
        htmlFor="note-content"
        required
        hint="Máximo 500 caracteres"
      >
        <Textarea
          id="note-content"
          value={content}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setContent(e.target.value)
          }
          placeholder="Escribe el contenido de tu nota..."
          maxLength={500}
        />
      </FormField>

      <FormField label="Categoría">
        <NoteCategoryPicker category={category} onChange={setCategory} />
      </FormField>

      <FormField label="Ícono">
        <NoteIconPicker icon={icon} onChange={setIcon} />
      </FormField>

      <FormField label="Color">
        <NoteColorPicker color={color} onChange={setColor} />
      </FormField>

      <div className={styles.actions}>
        <Button variant="secondary" onClick={handleCancel}>
          Cancelar
        </Button>
        <Button type="submit" variant="primary" disabled={isSubmitDisabled}>
          Guardar nota
        </Button>
      </div>
    </form>
  );
};
