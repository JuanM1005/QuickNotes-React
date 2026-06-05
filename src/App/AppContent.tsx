import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { NoteList } from '@/components/notes/NoteList';
import { FaPlus } from 'react-icons/fa';
import styles from './AppContent.styles';
import { NOTES } from '@/data/notes.data';
import type { Note } from '@/types/note.types';
import { createNote } from '@/utils/createNote';

export const AppContent = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [notes, setNotes] = useState<Note[]>(NOTES)

  const addNote = (): void => {
    const newNote = createNote({
      title: `Nueva nota ${notes.length + 1}`,
      content: 'Escribe aquí el contenido de tu nota.',
      color: 'blue',
    });

    setNotes(prevNotes => [...prevNotes, newNote])
    setIsModalOpen(false)
  }

  const openModal = (): void => {
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
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

        <Button onClick={openModal}>
          <FaPlus size={15} /> Agregar nueva nota
        </Button>
      </header>

      <NoteList notes={notes} />

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Agregar nueva nota"
      >
        <p>Aquí irá el formulario para crear una nota.</p>

        <div className="mt-6 flex justify-end gap-3">
          <Button variant="secondary" onClick={closeModal}>
            Cancelar
          </Button>

          <Button variant="primary" onClick={addNote}>
            Guardar nota
          </Button>
        </div>
      </Modal>
    </div>
  );
};