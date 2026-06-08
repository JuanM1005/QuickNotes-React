import type { IconType } from 'react-icons';

export type FilterValues =
  | 'all'
  | 'work'
  | 'personal'
  | 'ideas'
  | 'study'
  | 'tasks'
  | 'reminders';

export interface FilterItemsProps {
  icon: IconType;
  label: string;
  value: FilterValues;
}
