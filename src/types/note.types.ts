export type NoteColor = 'blue' | 'green' | 'yellow' | 'pink' | 'purple';

export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  color?: NoteColor;
}
