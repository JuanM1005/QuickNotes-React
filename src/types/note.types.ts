export type NoteColor =
  | 'blue'
  | 'green'
  | 'yellow'
  | 'pink'
  | 'purple'
  | 'red'
  | 'orange';
export type NoteCategory =
  | 'work'
  | 'personal'
  | 'ideas'
  | 'study'
  | 'tasks'
  | 'reminders';
export type NoteFilter = 'all' | NoteCategory;
export type NoteIcon =
  | 'book'
  | 'lightbulb'
  | 'briefcase'
  | 'code'
  | 'heart'
  | 'star'
  | 'flag'
  | 'music'
  | 'home'
  | 'shopping';

export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  color?: NoteColor;
  category?: NoteCategory;
  icon?: NoteIcon;
}

export type NoteInput = Omit<Note, 'id' | 'createdAt' | 'updatedAt'>;
