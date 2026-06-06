import { createContext } from 'react';
import type { NotesContextValue } from './NotesContext.types';

/**
 * Contexto encargado de compartir el estado y las acciones de las notas.
 *
 * Se inicializa como undefined para poder validar después, desde un custom hook,
 * si el contexto se está usando fuera de su Provider.
 */
export const NotesContext = createContext<NotesContextValue | undefined>(
  undefined,
);
