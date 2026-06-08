export type NoteColor =
  | 'blue'
  | 'green'
  | 'yellow'
  | 'pink'
  | 'purple'
  | 'red'
  | 'orange';
export type NoteCategory = 'work' | 'personal' | 'ideas';
export type NoteFilter = 'all' | NoteCategory;

export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  color?: NoteColor;
  category?: NoteCategory;
}

export type NoteInput = Omit<Note, 'id' | 'createdAt' | 'updatedAt'>;
