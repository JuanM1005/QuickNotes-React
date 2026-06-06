import { createPortal } from 'react-dom';
import type { MouseEvent } from 'react';
import clsx from 'clsx';

import type { ModalProps } from './Modal.types';
import { useEscapeKey } from './hooks/useEscapeKey';
import { useLockScroll } from './hooks/useLockScroll';
import { useFocusTrap } from './hooks/useFocusTrap';
import { ModalHeader } from './ModalHeader';
import styles from './Modal.styles';

export const Modal = ({
  children,
  isOpen,
  onClose,
  title,
  closeOnOverlay = true,
  ariaLabel,
  className,
}: ModalProps) => {
  useEscapeKey(onClose, isOpen);
  useLockScroll(isOpen);
  useFocusTrap(isOpen);

  if (!isOpen) return null;

  const handleOverlayClick = () => {
    if (closeOnOverlay) {
      onClose();
    }
  };

  const handleModalClick = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };

  // createPortal renderiza el modal fuera del árbol de componentes para evitar
  // problemas de z-index y overflow: hidden heredados de componentes padre
  return createPortal(
    <div
      className={styles.modalOverlayStyles}
      onClick={handleOverlayClick}
      role="presentation"
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-label={!title ? ariaLabel : undefined}
        aria-labelledby={title ? 'modal-title' : undefined}
        className={clsx(styles.modalContainerStyles, className)}
        onClick={handleModalClick}
      >
        {title && (
          <div id="modal-title">
            <ModalHeader title={title} onClose={onClose} />
          </div>
        )}

        <div className={styles.modalBodyStyles}>{children}</div>
      </section>
    </div>,
    document.body,
  );
};
