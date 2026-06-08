import type { ChangeEvent } from 'react';
import clsx from 'clsx';

import type { NoteFormProps } from './NoteForm.types';
import type { NoteCategory, NoteColor } from '@/types/note.types';
import { NOTE_ICONS, NOTE_ICON_KEYS } from '@/data/noteIcons.data';
import { Button } from '@/components/ui/Button';
import { FormField } from '@/components/ui/FormField';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import styles, { colorOptionStyles } from './NoteForm.styles';
import { useNoteForm } from './hooks/useNoteForm';

const AVAILABLE_COLORS: NoteColor[] = [
  'blue',
  'green',
  'yellow',
  'pink',
  'purple',
  'red',
];

const AVAILABLE_CATEGORIES: { label: string; value: NoteCategory }[] = [
  { label: 'Trabajo', value: 'work' },
  { label: 'Personal', value: 'personal' },
  { label: 'Ideas', value: 'ideas' },
];

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

      <FormField label="Categoría" htmlFor="note-category">
        <div className={styles.categoryList} id="note-category">
          {AVAILABLE_CATEGORIES.map(({ label, value }) => (
            <button
              key={value}
              type="button"
              onClick={() =>
                setCategory(value === category ? undefined : value)
              }
              className={styles.categoryBtn(category === value)}
            >
              {label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setCategory(undefined)}
            className={styles.noCategoryBtn(category === undefined)}
          >
            Sin categoría
          </button>
        </div>
      </FormField>

      <FormField label="Ícono" htmlFor="note-icon">
        <div className={styles.iconList} id="note-icon">
          {NOTE_ICON_KEYS.map((key) => {
            const Icon = NOTE_ICONS[key];
            return (
              <button
                key={key}
                type="button"
                onClick={() => setIcon(key === icon ? undefined : key)}
                aria-label={`Ícono ${key}`}
                className={styles.iconBtn(icon === key)}
              >
                <Icon size={16} />
              </button>
            );
          })}
          <button
            type="button"
            onClick={() => setIcon(undefined)}
            className={styles.noIconBtn(icon === undefined)}
          >
            Sin ícono
          </button>
        </div>
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
