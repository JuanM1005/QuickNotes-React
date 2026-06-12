// import { NOTES } from '@/data/notes.data';
import type { Note } from '@/types/note.types';

// Clave para identificar y persistir las notas en el almacenamiento local
const NOTES_STORAGE_KEY = 'quicknotes-notes';

export const getStoredNotes = (): Note[] => {
  try {
    const storedNotes = localStorage.getItem(NOTES_STORAGE_KEY);

    if (!storedNotes) return [];

    const parsedNotes: unknown = JSON.parse(storedNotes);

    // Si los datos parseados son un array, se retornan casteados; si no,
    return Array.isArray(parsedNotes) ? (parsedNotes as Note[]) : [];
  } catch (error) {
    console.log(`No se pudieron recuperar las notas: ${error}`);
    return [];
  }
};

export const saveNotes = (notes: Note[]): void => {
  try {
    localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
  } catch (error) {
    // Si localStorage falla (cuota llena, modo privado, etc.),
    // se ignora para no romper la app; los datos quedan solo en memoria.
    console.error(`Error al guardar en localStorage: ${error}`);
  }
};
