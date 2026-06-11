import { FaSearch } from 'react-icons/fa';

import styles from './NotesSearchInput.styles';

interface NotesSearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const NotesSearchInput = ({
  value,
  onChange,
}: NotesSearchInputProps) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor="search-notes" className="sr-only">
        Buscar notas
      </label>

      <FaSearch className={styles.icon} size={14} />

      <input
        id="search-notes"
        name="search-notes"
        type="text"
        placeholder="Buscar notas..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.input}
      />
    </div>
  );
};
