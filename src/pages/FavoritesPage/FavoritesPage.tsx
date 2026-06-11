import { PageLayout } from '@/components/layout/PageLayout';
import { PageHeader } from '@/components/layout/PageHeader';
import { NoteList } from '@/components/notes/NoteList';
import { useNotesFilter } from '@/hooks/useNotesFilter';
import { APP_IMAGES } from '@/constants';
import { NotesEmptyState } from '@/components/notes/NotesEmptyState/NotesEmptyState';
import { MdStars } from 'react-icons/md';
import styles from './FavoritesPage.styles';
import { useNotesSearch } from '@/hooks/useNotesSearch';
import { NotesSearchInput } from '../components/NotesSearchInput';

export const FavoritesPage = () => {
  const allFavorites = useNotesFilter('favorites');
  const { filteredNotes, searchTerm, setSearchTerm } =
    useNotesSearch(allFavorites);

  return (
    <PageLayout>
      {filteredNotes.length > 0 ? (
        <>
          <PageHeader
            title="Favoritos"
            description="Tus notas destacadas en un solo lugar"
            image={APP_IMAGES.Icons.favorites}
            imageAlt="Favoritos"
          />

          {allFavorites.length > 0 && (
            <NotesSearchInput value={searchTerm} onChange={setSearchTerm} />
          )}

          <NoteList notes={filteredNotes} variant="favorites" />
        </>
      ) : (
        <>
          <div className={styles.simpleHeader}>
            <span className={styles.simpleHeaderAccent} />
            <h2 className={styles.simpleHeaderTitle}>Favoritos</h2>
          </div>

          {allFavorites.length > 0 && (
            <NotesSearchInput value={searchTerm} onChange={setSearchTerm} />
          )}

          {searchTerm ? (
            <NotesEmptyState
              imageSrc={APP_IMAGES.Icons.notFound}
              imageAlt="No encontrado"
              title="Sin resultados"
              description="Ningún favorito coincide con tu búsqueda."
            />
          ) : (
            <NotesEmptyState
              imageSrc={APP_IMAGES.Icons.favoritesNone}
              imageAlt="Sin favoritos"
              title="No hay notas favoritas"
              description="Las notas que marques como favoritas apareceran aquí para que puedas encontrarlas rápidamente."
              tipIcon={MdStars}
              tipText="Toca el ícono de estrella en cualquier nota para agregarla a favoritos."
            />
          )}
        </>
      )}
    </PageLayout>
  );
};
