// import { PageHeader } from '@/components/layout/PageHeader';
import { PageLayout } from '@/components/layout/PageLayout';
// import { NoteList } from '@/components/notes/NoteList';
// import { NotesEmptyState } from '@/components/notes/NotesEmptyState/NotesEmptyState';
// import { APP_IMAGES } from '@/constants';
// import { useNotesFilter } from '@/hooks/useNotesFilter';
// import { MdArchive } from 'react-icons/md';
// import styles from './ArchivedPage.styles';
import { ComingSoonState } from '../../components/feedback/ComingSoonState/ComingSoonState';

export const ArchivedPage = () => {
  // const allArchived = useNotesFilter('archived');
  // const searchQuery = ''; // TODO: conectar con búsqueda
  // const filteredArchived = allArchived;

  return (
    <PageLayout>

      <ComingSoonState title='Sección de notas archivadas' />
      {/* {filteredArchived.length > 0 ? (
        <>
          <PageHeader
            title="Archivadas"
            description="Tus notas archivadas para consultar"
            image={APP_IMAGES.Icons.archived}
            imageAlt="Notas archivadas"
          />

          <NoteList notes={filteredArchived} variant="archived" />
        </>
      ) : (
        <>
          <div className={styles.simpleHeader}>
            <span className={styles.simpleHeaderAccent} />
            <h2 className={styles.simpleHeaderTitle}>Archivadas</h2>
          </div>

          {searchQuery ? (
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
              description="Las notas que archives aparecerán aquí para que puedas encontrarlas fácilmente cuando las necesites."
              tipIcon={MdArchive}
              tipText="Toca el ícono de archivo en cualquier nota para agregarla a archivados."
            />
          )}
        </>
      )} */}
    </PageLayout>
  );
};
