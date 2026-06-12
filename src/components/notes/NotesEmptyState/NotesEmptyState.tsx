import type { NotesEmptyStateProps } from './NotesEmptyState.types';
import styles from './NotesEmptyState.styles';

export const NotesEmptyState = ({
  imageSrc,
  imageAlt,
  title,
  description,
  tipIcon: Icon,
  tipText,
}: NotesEmptyStateProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        <div className={styles.imageGlow} />
        <div className={styles.imageFrame}>
          <img src={imageSrc} alt={imageAlt} className={styles.image} />
        </div>
      </div>

      <div className={styles.textWrapper}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>

      {tipText && (
        <div className={styles.tip}>
          {Icon && <Icon className={styles.tipIcon} size={18} />}

          <p className={styles.tipText}>
            <strong className={styles.tipStrong}>Tip: </strong>
            {tipText}
          </p>
        </div>
      )}
    </section>
  );
};
