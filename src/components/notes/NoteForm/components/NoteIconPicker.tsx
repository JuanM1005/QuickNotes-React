import type { NoteIcon } from '@/types/note.types';
import { NOTE_ICONS, NOTE_ICON_KEYS } from '@/data/noteIcons.data';
import styles from '../NoteForm.styles';

interface NoteIconPickerProps {
  icon: NoteIcon | undefined;
  onChange: (value: NoteIcon | undefined) => void;
}

export const NoteIconPicker = ({ icon, onChange }: NoteIconPickerProps) => (
  <div className={styles.iconList}>
    {NOTE_ICON_KEYS.map((key) => {
      const Icon = NOTE_ICONS[key];
      return (
        <button
          key={key}
          type="button"
          onClick={() => onChange(key === icon ? undefined : key)}
          aria-label={`Ícono ${key}`}
          className={styles.iconBtn(icon === key)}
        >
          <Icon size={16} />
        </button>
      );
    })}
    <button
      type="button"
      onClick={() => onChange(undefined)}
      className={styles.noIconBtn(icon === undefined)}
    >
      Sin ícono
    </button>
  </div>
);
