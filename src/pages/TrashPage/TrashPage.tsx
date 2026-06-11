import { PageLayout } from '@/components/layout/PageLayout';
import { PageHeader } from '@/components/layout/PageHeader';
import { NoteList } from '@/components/notes/NoteList';
import { NotesEmptyState } from '@/components/notes/NotesEmptyState/NotesEmptyState';
import { useNotesFilter } from '@/hooks/useNotesFilter';
import { APP_IMAGES } from '@/constants';
import { MdOutlineAutoDelete } from 'react-icons/md';
import styles from './TrashPage.styles';
import { useNotesSearch } from '@/hooks/useNotesSearch';
import { NotesSearchInput } from '../components/NotesSearchInput';

export const TrashPage = () => {
  const trashNotes = useNotesFilter('deleted');
  const { filteredNotes, searchTerm, setSearchTerm } =
    useNotesSearch(trashNotes);

  return (
    <PageLayout>
      {filteredNotes.length > 0 ? (
        <>
          <PageHeader
            title="Papelera"
            description="Elementos eliminados recientemente"
            image={APP_IMAGES.Icons.trash}
            imageAlt="Papelera"
          />

          {trashNotes.length > 0 && (
            <NotesSearchInput value={searchTerm} onChange={setSearchTerm} />
          )}

          <NoteList notes={filteredNotes} variant="trash" />
        </>
      ) : (
        <>
          <div className={styles.simpleHeader}>
            <span className={styles.simpleHeaderAccent} />
            <h2 className={styles.simpleHeaderTitle}>Papelera</h2>
          </div>

          {trashNotes.length > 0 && (
            <NotesSearchInput value={searchTerm} onChange={setSearchTerm} />
          )}

          {searchTerm ? (
            <NotesEmptyState
              imageSrc={APP_IMAGES.Icons.notFound}
              imageAlt="No encontrado"
              title="Sin resultados"
              description="Ninguna nota en la papelera coincide con tu búsqueda."
            />
          ) : (
            <NotesEmptyState
              imageSrc={APP_IMAGES.Icons.trashNone}
              imageAlt="Papelera vacía"
              title="La papelera está vacía"
              description="Las notas que elimines aparecerán aquí antes de borrarse definitivamente."
              tipIcon={MdOutlineAutoDelete}
              tipText="Las notas eliminadas se borran de forma permanente pasado un tiempo."
            />
          )}
        </>
      )}
    </PageLayout>
  );
};
