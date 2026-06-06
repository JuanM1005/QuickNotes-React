import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { NoteList } from '@/components/notes/NoteList';
import { FaPlus } from 'react-icons/fa';
import styles from './AppContent.styles';
import { NoteForm } from '@/components/notes/NoteForm';
import { useAppContent } from './hooks/useAppContent';

export const AppContent = () => {
  const {
    isModalOpen,
    notes,
    handleAddNote,
    handleDeleteNote,
    handleOpenForm,
    handleCloseForm,
  } = useAppContent();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <span className={styles.eyebrow}>App notas</span>

          <h1 className={styles.title}>QuickNotes</h1>

          <p className={styles.description}>
            Organiza tus ideas, apuntes y recordatorios en un solo lugar de
            forma rápida y sencilla.
          </p>
        </div>

        <Button onClick={handleOpenForm}>
          <FaPlus size={15} /> Agregar nueva nota
        </Button>
      </header>

      <NoteList notes={notes} onDelete={handleDeleteNote} />

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseForm}
        title="Agregar nueva nota"
      >
        <NoteForm onSubmit={handleAddNote} onCancel={handleCloseForm} />
      </Modal>
    </div>
  );
};
