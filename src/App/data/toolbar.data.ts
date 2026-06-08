import { FaBorderAll, FaBriefcase, FaUser, FaLightbulb } from 'react-icons/fa';
import type { FilterItemsProps } from './toolbar.types';

export const FILTERS_ITEMS: FilterItemsProps[] = [
  { icon: FaBorderAll, label: 'Todas', value: 'all' },
  { icon: FaBriefcase, label: 'Trabajo', value: 'work' },
  { icon: FaUser, label: 'Personal', value: 'personal' },
  { icon: FaLightbulb, label: 'Ideas', value: 'ideas' },
];
