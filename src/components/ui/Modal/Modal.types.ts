import type { ReactNode } from 'react';

export interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  closeOnOverlay?: boolean;
  ariaLabel?: string;
  className?: string;
}

export interface ModalHeaderProps {
  title: string;
  onClose: () => void;
}
