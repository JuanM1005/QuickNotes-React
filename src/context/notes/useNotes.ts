import { useContext } from 'react';
import { NotesContext } from './NotesContext';
import type { NotesContextValue } from './NotesContext.types';

export const useNotes = (): NotesContextValue => {
  const context = useContext(NotesContext);
  if (context === undefined) {
    throw new Error('useNotes debe usarse dentro de un NotesProvider');
  }
  return context;
};
