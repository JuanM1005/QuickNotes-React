import { FaExclamationTriangle } from 'react-icons/fa';

import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import type { ConfirmDialogProps } from './ConfirmDialog.types';
import styles, { iconStyles } from './ConfirmDialog.styles';
import clsx from 'clsx';

export const ConfirmDialog = ({
  isOpen,
  title,
  description,
  variant = 'default',
  onConfirm,
  onCancel,
}: ConfirmDialogProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onCancel}
      ariaLabel={title}
      closeOnOverlay={false}
    >
      <div className={styles.body}>
        <div className={clsx(styles.iconWrapper, iconStyles[variant])}>
          <FaExclamationTriangle size={20} />
        </div>

        <div>
          <h2 className={styles.title}>{title}</h2>
          {description && <p className={styles.description}>{description}</p>}
        </div>
      </div>

      <div className={styles.actions}>
        <Button variant="secondary" onClick={onCancel}>
          Cancelar
        </Button>
        <Button
          variant={variant === 'danger' ? 'danger' : 'primary'}
          onClick={onConfirm}
        >
          Eliminar
        </Button>
      </div>
    </Modal>
  );
};
