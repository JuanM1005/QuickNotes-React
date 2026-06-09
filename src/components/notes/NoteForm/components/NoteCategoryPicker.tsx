import type { NoteCategory } from '@/types/note.types';
import { AVAILABLE_CATEGORIES } from '../NoteForm.types';
import styles from '../NoteForm.styles';

interface NoteCategoryPickerProps {
  category: NoteCategory | undefined;
  onChange: (value: NoteCategory | undefined) => void;
}

export const NoteCategoryPicker = ({
  category,
  onChange,
}: NoteCategoryPickerProps) => (
  <div className={styles.categoryList}>
    {AVAILABLE_CATEGORIES.map(({ label, value }) => (
      <button
        key={value}
        type="button"
        onClick={() => onChange(value === category ? undefined : value)}
        className={styles.categoryBtn(category === value)}
      >
        {label}
      </button>
    ))}
    <button
      type="button"
      onClick={() => onChange(undefined)}
      className={styles.noCategoryBtn(category === undefined)}
    >
      Sin categoría
    </button>
  </div>
);
