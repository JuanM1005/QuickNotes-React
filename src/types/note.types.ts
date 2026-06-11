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

export type NoteFilter = 'all' | 'favorites' | NoteCategory;

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

export type NoteStatus = 'active' | 'favorites' | 'archived' | 'deleted';

export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  color?: NoteColor;
  category?: NoteCategory;
  icon?: NoteIcon;
  isFavorite?: boolean;
  isArchived?: boolean;
  isDeleted?: boolean;
}

export type NoteInput = Omit<
  Note,
  'id' | 'createdAt' | 'updatedAt' | 'isFavorite' | 'isArchived' | 'isDeleted'
>;
