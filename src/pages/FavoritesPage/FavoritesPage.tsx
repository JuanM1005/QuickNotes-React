// import { useMemo, useState } from 'react';
// import { FaSearch } from 'react-icons/fa';

import { PageLayout } from '@/components/layout/PageLayout';
import { PageHeader } from '@/components/layout/PageHeader';
import { NoteList } from '@/components/notes/NoteList';
import { EmptyState } from '@/components/ui/EmptyState';
import { useNotesFilter } from '@/hooks/useNotesFilter';
import { APP_IMAGES } from '@/constants';
// import styles from './FavoritesPage.styles';

export const FavoritesPage = () => {
  const allFavorites = useNotesFilter('favorites');
  // const [searchQuery, setSearchQuery] = useState('');

  // const favorites = useMemo(() => {
  //   const query = searchQuery.trim().toLowerCase();
  //   if (!query) return allFavorites;
  //   return allFavorites.filter(
  //     (n) =>
  //       n.title.toLowerCase().includes(query) ||
  //       n.content.toLowerCase().includes(query),
  //   );
  // }, [allFavorites, searchQuery]);

  return (
    <PageLayout>
      <PageHeader
        title="Favoritos"
        description="Tus notas destacadas en un solo lugar"
        image={APP_IMAGES.Icons.favorites}
        imageAlt="Favoritos"
      />
      {/* 
      <div className={styles.searchWrapper}>
        <label htmlFor="search-favorites" className="sr-only">
          Buscar favoritos
        </label>
        <FaSearch className={styles.searchIcon} size={14} />
        <input
          id="search-favorites"
          type="text"
          placeholder="Buscar en favoritos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
      </div> */}

      {allFavorites.length > 0 ? (
        <NoteList notes={allFavorites} variant="favorites" />
      ) : allFavorites.length === 0 ? (
        <EmptyState
          title="Sin favoritos aún"
          description="Marca una nota con ⭐ para verla aquí."
        />
      ) : (
        <EmptyState
          title="Sin resultados"
          description="Ningún favorito coincide con tu búsqueda."
        />
      )}
    </PageLayout>
  );
};
