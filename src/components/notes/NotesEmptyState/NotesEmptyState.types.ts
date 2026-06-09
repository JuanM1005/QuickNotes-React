import type { IconType } from 'react-icons';

export interface NotesEmptyStateProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  tipIcon?: IconType;
  tipText?: string;
}
