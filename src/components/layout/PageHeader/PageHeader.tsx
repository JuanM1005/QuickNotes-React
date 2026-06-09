import type { PageHeaderProps } from './PageHeader.types';
import styles from './PageHeader.styles';

export const PageHeader = ({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: PageHeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}

          <h1 className={styles.title}>{title}</h1>

          <p className={styles.description}>{description}</p>
        </div>

        <img src={image} alt={imageAlt} className={styles.image} />
      </div>
    </header>
  );
};
