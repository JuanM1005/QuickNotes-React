import { PageLayout } from '@/components/layout/PageLayout';
import { PageHeader } from '@/components/layout/PageHeader';
import { NoteList } from '@/components/notes/NoteList';
import { useNotesFilter } from '@/hooks/useNotesFilter';
import { APP_IMAGES } from '@/constants';
import { NotesEmptyState } from '@/components/notes/NotesEmptyState/NotesEmptyState';
import { MdArchive } from 'react-icons/md';
import styles from './ArchivedPage.styles';
import { useNotesSearch } from '@/hooks/useNotesSearch';
import { NotesSearchInput } from '../components/NotesSearchInput';

export const ArchivedPage = () => {
  const allArchived = useNotesFilter('archived');
  const { filteredNotes, searchTerm, setSearchTerm } =
    useNotesSearch(allArchived);

  return (
    <PageLayout>
      {filteredNotes.length > 0 ? (
        <>
          <PageHeader
            title="Archivadas"
            description="Tus notas guardadas para más adelante"
            image={APP_IMAGES.Icons.archived}
            imageAlt="Archivadas"
          />

          {allArchived.length > 0 && (
            <NotesSearchInput value={searchTerm} onChange={setSearchTerm} />
          )}

          <NoteList notes={filteredNotes} variant="archived" />
        </>
      ) : (
        <>
          <div className={styles.simpleHeader}>
            <span className={styles.simpleHeaderAccent} />
            <h2 className={styles.simpleHeaderTitle}>Archivadas</h2>
          </div>

          {allArchived.length > 0 && (
            <NotesSearchInput value={searchTerm} onChange={setSearchTerm} />
          )}

          {searchTerm ? (
            <NotesEmptyState
              imageSrc={APP_IMAGES.Icons.notFound}
              imageAlt="No encontrado"
              title="Sin resultados"
              description="Ninguna nota archivada coincide con tu búsqueda."
            />
          ) : (
            <NotesEmptyState
              imageSrc={APP_IMAGES.Icons.archivedNone}
              imageAlt="Sin notas archivadas"
              title="No hay notas archivadas"
              description="Las notas que archives aparecerán aquí para mantener tu espacio principal organizado."
              tipIcon={MdArchive}
              tipText="Toca el ícono de archivo en cualquier nota para guardarla aquí."
            />
          )}
        </>
      )}
    </PageLayout>
  );
};
