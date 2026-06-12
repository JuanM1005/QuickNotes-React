import clsx from 'clsx';
import { LuFileText } from 'react-icons/lu';
import { Modal } from '@/components/ui/Modal';
import { formatDate } from '@/utils/formatDate.utils';
import { NOTE_ICONS } from '@/data/noteIcons.data';
import noteCardStyles, { iconBoxStyles } from '../NoteCard/NoteCard.styles';
import { NoteCategoryBadge } from '../NoteCard/components/NoteCategoryBadge';
import styles from './NoteViewModal.styles';
import type { NoteViewModalProps } from './NoteViewModal.types';

export const NoteViewModal = ({
  note,
  isOpen,
  onClose,
}: NoteViewModalProps) => {
  const iconBoxClass = note.color
    ? iconBoxStyles[note.color]
    : noteCardStyles.iconBoxDefault;
  const NoteIcon = note.icon ? NOTE_ICONS[note.icon] : LuFileText;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={note.title}>
      <div className={styles.header}>
        <div className={clsx(styles.iconBox, iconBoxClass)}>
          <NoteIcon size={24} />
        </div>

        <div className={styles.meta}>
          <span>{formatDate(note.createdAt)}</span>
          {note.category && <NoteCategoryBadge category={note.category} />}
        </div>
      </div>

      <p className={styles.content}>{note.content}</p>
    </Modal>
  );
};
