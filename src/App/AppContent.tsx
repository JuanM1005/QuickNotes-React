import { Button } from '@/components/ui/Button';
import { NoteList } from '@/components/notes/NoteList';
import { NOTES } from '@/data/notes.data';
import { FaPlus } from 'react-icons/fa';
import styles from './AppContent.styles';

export const AppContent = () => {
  const handleClick = (): void => {
    console.log('Agregar nueva nota.');
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

        <Button onClick={handleClick}>
          <FaPlus size={15} /> Agregar nueva nota
        </Button>
      </header>

      <NoteList notes={NOTES} />
    </div>
  );
};
