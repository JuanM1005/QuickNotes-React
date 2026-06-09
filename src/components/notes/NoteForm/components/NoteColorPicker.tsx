import clsx from 'clsx';
import type { NoteColor } from '@/types/note.types';
import { AVAILABLE_COLORS } from '../NoteForm.types';
import styles, { colorOptionStyles } from '../NoteForm.styles';

interface NoteColorPickerProps {
  color: NoteColor | undefined;
  onChange: (value: NoteColor | undefined) => void;
}

export const NoteColorPicker = ({ color, onChange }: NoteColorPickerProps) => (
  <div className={styles.colorList}>
    {AVAILABLE_COLORS.map((c) => (
      <button
        key={c}
        type="button"
        onClick={() => onChange(c)}
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
      onClick={() => onChange(undefined)}
      className={clsx(
        styles.noColorButton,
        color === undefined && styles.noColorButtonSelected,
      )}
    >
      Sin color
    </button>
  </div>
);
