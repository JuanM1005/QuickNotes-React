export type NoteColor = 'blue' | 'green' | 'yellow' | 'pink' | 'purple';

export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  color?: NoteColor;
}

// Se utiliza la utility Omit para quitar los 3 campos que se rellenaran automaticamnete, el usuario solo rellenara los campos de: titulo de la nota, el contenido y el color
export type NoteInput = Omit<Note, 'id' | 'createdAt' | 'updatedAt'>;
