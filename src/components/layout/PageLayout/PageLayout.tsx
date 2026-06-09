import type { ReactNode } from 'react';
import styles from './PageLayout.styles';

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => (
  <div className={styles.container}>{children}</div>
);
