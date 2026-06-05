import type { ModalHeaderProps } from './Modal.types';
import styles from './Modal.styles';
import { IoIosClose } from 'react-icons/io';

export const ModalHeader = ({ title, onClose }: ModalHeaderProps) => {
  return (
    <header className={styles.modalHeaderStyles}>
      <h2 className={styles.modalTitleStyles}>{title}</h2>
      <button className={styles.modalCloseButtonStyles} onClick={onClose}>
        <IoIosClose size={30} />
      </button>
    </header>
  );
};
