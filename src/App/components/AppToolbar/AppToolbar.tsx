import { FaSearch } from 'react-icons/fa';

import type { NoteFilter } from '@/types/note.types';
import styles from './AppToolbar.styles';

import { FILTERS_ITEMS } from '../../data';
import { Button } from '@/components/ui/Button';

interface AppToolbarProps {
  searchQuery: string;
  activeFilter: NoteFilter;
  onSearch: (value: string) => void;
  onFilterChange: (filter: NoteFilter) => void;
}

export const AppToolbar = ({
  searchQuery,
  activeFilter,
  onSearch,
  onFilterChange,
}: AppToolbarProps) => {
  return (
    <div className={styles.toolbar}>
      <div className={styles.searchWrapper}>
        <label htmlFor="search-notes" className="sr-only">
          Buscar notas
        </label>

        <FaSearch className={styles.searchIcon} size={14} />

        <input
          id="search-notes"
          name="search-notes"
          type="text"
          placeholder="Buscar notas..."
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      <div className={styles.filters}>
        {FILTERS_ITEMS.map(({ icon: Icon, label, value }) => (
          <Button
            key={value}
            variant={activeFilter === value ? 'selected' : 'secondary'}
            size="md"
            onClick={() => onFilterChange(value)}
          >
            <Icon size={13} />
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
};
