import styles from './NotesEmptyState.styles';

interface NotesEmptyStateProps {
  title: string;
  description: string;
}

export const NotesEmptyState = ({
  title,
  description,
}: NotesEmptyStateProps) => (
  <div className={styles.container}>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.description}>{description}</p>
  </div>
);
