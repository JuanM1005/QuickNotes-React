import {
  LuBriefcase,
  LuUser,
  LuLightbulb,
  LuBookOpen,
  LuClipboardList,
  LuBell,
} from 'react-icons/lu';
import type { IconType } from 'react-icons';
import type { NoteCategory } from '@/types/note.types';

export const CATEGORY_LABELS: Record<NoteCategory, string> = {
  work: 'Trabajo',
  personal: 'Personal',
  ideas: 'Ideas',
  study: 'Estudio',
  tasks: 'Tareas',
  reminders: 'Recordatorios',
};

export const CATEGORY_ICONS: Record<NoteCategory, IconType> = {
  work: LuBriefcase,
  personal: LuUser,
  ideas: LuLightbulb,
  study: LuBookOpen,
  tasks: LuClipboardList,
  reminders: LuBell,
};
