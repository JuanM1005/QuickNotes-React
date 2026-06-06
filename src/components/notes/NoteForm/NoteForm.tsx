import type { ChangeEvent } from 'react';
import clsx from 'clsx';

import type { NoteFormProps } from './NoteForm.types';
import type { NoteColor } from '@/types/note.types';
import { Button } from '@/components/ui/Button';
import { FormField } from '@/components/ui/FormField';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import styles, {
  colorOptionStyles,
  colorSelectedStyles,
} from './NoteForm.styles';
import { useNoteForm } from './hooks/useNoteForm';

const AVAILABLE_COLORS: NoteColor[] = [
  'blue',
  'green',
  'yellow',
  'pink',
  'purple',
];

export const NoteForm = ({ onSubmit, onCancel }: NoteFormProps) => {
  const {
    title,
    content,
    color,
    setTitle,
    setContent,
    setColor,
    handleSubmit,
    handleCancel,
    isSubmitDisabled,
  } = useNoteForm({ onSubmit, onCancel });

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <FormField label="Titulo" htmlFor="note-tile">
        <Input
          id="note-title"
          type="text"
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>): void =>
            setTitle(e.target.value)
          }
          placeholder="Ej: Aprender React"
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
          onChange={(e: ChangeEvent<HTMLTextAreaElement>): void =>
            setContent(e.target.value)
          }
          placeholder="Escribe el contenido de tu nota..."
          maxLength={500}
        />
      </FormField>

      <FormField label="Color" htmlFor="note-color">
        <div className={styles.colorList} id="note-color">
          {AVAILABLE_COLORS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={(): void => setColor(c)}
              aria-label={`Color ${c}`}
              className={clsx(
                styles.colorButton,
                colorOptionStyles[c],
                color === c && styles.colorButtonSelected,
                color === c && colorSelectedStyles[c],
              )}
            />
          ))}
          <button
            type="button"
            onClick={(): void => setColor(undefined)}
            className={clsx(
              styles.noColorButton,
              color === undefined && styles.noColorButtonSelected,
            )}
          >
            Sin color
          </button>
        </div>
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
