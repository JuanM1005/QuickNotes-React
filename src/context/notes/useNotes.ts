import { useContext } from 'react';
import { NotesContext } from './NotesContext';
import type { NotesContextValue } from './NotesContext.types';

/**
 * Hook para consumir el NotesContext.
 *
 * Lanza un error si se usa fuera de un NotesProvider, evitando
 * accesos silenciosos a un contexto vacío.
 */
export const useNotes = (): NotesContextValue => {
  const context = useContext(NotesContext);

  if (context === undefined) {
    throw new Error('useNotes debe usarse dentro de un NotesProvider');
  }
  
  return context;
};
