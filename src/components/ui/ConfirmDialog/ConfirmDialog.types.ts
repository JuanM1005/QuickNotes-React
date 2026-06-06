export type ConfirmDialogVariant = 'danger' | 'default';

export interface ConfirmDialogProps {
  isOpen: boolean;
  title: string;
  description?: string;
  variant?: ConfirmDialogVariant;
  onConfirm: () => void;
  onCancel: () => void;
}
