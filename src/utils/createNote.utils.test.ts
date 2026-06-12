import { describe, it, expect } from 'vitest';
import { createNote } from './createNote.utils';

describe('createNote', () => {
  it('genera un id y fechas de creación/actualización iguales', () => {
    const note = createNote({ title: 'Título', content: 'Contenido' });

    expect(note.id).toBeTruthy();
    expect(note.title).toBe('Título');
    expect(note.content).toBe('Contenido');
    expect(note.createdAt).toBe(note.updatedAt);
  });

  it('genera ids distintos para notas distintas', () => {
    const a = createNote({ title: 'A', content: 'A' });
    const b = createNote({ title: 'B', content: 'B' });

    expect(a.id).not.toBe(b.id);
  });
});
