import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { NoteList } from '@/components/notes/NoteList';
import { NoteForm } from '@/components/notes/NoteForm';
import { useNotes } from '@/context/notes';
import type { NoteInput } from '@/types/note.types';
import { FaPlus } from 'react-icons/fa';
import styles from './AppContent.styles';
import { ConfirmDialog } from '../components/ui/ConfirmDialog/ConfirmDialog';

export const AppContent = () => {
  const { handleAddNote } = useNotes();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenForm = (): void => setIsModalOpen(true);
  const handleCloseForm = (): void => setIsModalOpen(false);

  const handleFormSubmit = (input: NoteInput): void => {
    handleAddNote(input);
    handleCloseForm();
  };

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

      <NoteList />

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseForm}
        title="Agregar nueva nota"
      >
        <NoteForm onSubmit={handleFormSubmit} onCancel={handleCloseForm} />
      </Modal>

      <ConfirmDialog
        title="hola"
        description="prueba"
        variant="danger"
        isOpen={isModalOpen}
        onCancel={handleCloseForm}
      />
    </div>
  );
};
