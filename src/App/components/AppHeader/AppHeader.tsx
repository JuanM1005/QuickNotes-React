import styles from './AppHeader.styles';

export const AppHeader = () => {
  return (
    <header className={styles.header}>
      <div>
        <span className={styles.eyebrow}>Bienvenido/a de nuevo 👋</span>

        <h1 className={styles.title}>QuickNotes</h1>

        <p className={styles.description}>
          Organiza tus ideas, apuntes y recordatorios en un solo lugar de forma
          rápida y sencilla.
        </p>
      </div>
    </header>
  );
};
