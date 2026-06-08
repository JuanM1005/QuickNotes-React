import type { NoteCategory, NoteColor, NoteInput } from '@/types/note.types';

export interface NoteFormProps {
  onSubmit: (input: NoteInput) => void;
  onCancel: () => void;
}

export const AVAILABLE_COLORS: NoteColor[] = [
  'blue',
  'green',
  'yellow',
  'pink',
  'purple',
  'red',
];

export const AVAILABLE_CATEGORIES: { label: string; value: NoteCategory }[] = [
  { label: 'Trabajo', value: 'work' },
  { label: 'Personal', value: 'personal' },
  { label: 'Ideas', value: 'ideas' },
  { label: 'Estudio', value: 'study' },
  { label: 'Tareas', value: 'tasks' },
  { label: 'Recordatorios', value: 'reminders' },
];