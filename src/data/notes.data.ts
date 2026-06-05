import type { Note } from '@/types/note.types';

export const NOTES: Note[] = [
  {
    id: '1',
    title: 'Aprender React',
    content: 'Repasar componentes, props, estado y eventos.',
    createdAt: '2026-06-04T10:30:00.000Z',
    updatedAt: '2026-06-04T10:30:00.000Z',
    color: 'blue',
  },
  {
    id: '2',
    title: 'Practicar TypeScript',
    content: 'Crear interfaces, tipar props y usar arrays tipados.',
    createdAt: '2026-06-04T11:15:00.000Z',
    updatedAt: '2026-06-04T11:15:00.000Z',
    color: 'yellow',
  },
  {
    id: '3',
    title: 'Proyecto QuickNotes',
    content: 'Construir una app sencilla de notas usando React y localStorage.',
    createdAt: '2026-06-04T12:00:00.000Z',
    updatedAt: '2026-06-04T12:00:00.000Z',
    color: 'pink',
  },
];
