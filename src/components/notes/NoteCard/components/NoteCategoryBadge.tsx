import clsx from 'clsx';
import type { NoteCategory } from '@/types/note.types';
import styles, { categoryBadgeStyles } from '../NoteCard.styles';
import { CATEGORY_ICONS, CATEGORY_LABELS } from '../NoteCard.data';

interface NoteCategoryBadgeProps {
  category: NoteCategory;
}

export const NoteCategoryBadge = ({ category }: NoteCategoryBadgeProps) => {
  const CategoryIcon = CATEGORY_ICONS[category];
  return (
    <>
      <span className={styles.separator}>•</span>
      <span className={clsx(styles.badge, categoryBadgeStyles[category])}>
        <CategoryIcon size={10} />
        {CATEGORY_LABELS[category]}
      </span>
    </>
  );
};
