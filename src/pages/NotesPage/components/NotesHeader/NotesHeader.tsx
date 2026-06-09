import styles from './NotesHeader.styles';
import { QUICKNOTES_LOGO_SRC } from '@/constants';

export const NotesHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <span className={styles.eyebrow}>Bienvenido/a de nuevo 👋</span>

          <h1 className={styles.title}>QuickNotes</h1>

          <p className={styles.description}>
            Tus ideas, apuntes y recordatorios en un solo lugar.
          </p>
        </div>

        <img
          src={QUICKNOTES_LOGO_SRC}
          alt="Logo de QuickNotes"
          className={styles.logo}
        />
      </div>
    </header>
  );
};
