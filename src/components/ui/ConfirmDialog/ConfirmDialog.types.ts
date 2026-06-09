export type ConfirmDialogVariant = 'caution' | 'danger' | 'default';

export interface ConfirmDialogProps {
  isOpen: boolean;
  title: string;
  description?: string;
  variant?: ConfirmDialogVariant;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}
