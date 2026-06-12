import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useNotesFilter } from './useNotesFilter';
import { NotesProvider } from '@/context/notes';
import { saveNotes } from '@/storage/notes.storage';
import type { Note } from '@/types/note.types';

const baseNote = (overrides: Partial<Note>): Note => ({
  id: crypto.randomUUID(),
  title: 'Nota',
  content: 'Contenido',
  createdAt: '2026-06-01T00:00:00.000Z',
  updatedAt: '2026-06-01T00:00:00.000Z',
  ...overrides,
});

describe('useNotesFilter', () => {
  beforeEach(() => localStorage.clear());

  it('excluye notas eliminadas del filtro "favorites"', () => {
    const favoriteAndDeleted = baseNote({ isFavorite: true, isDeleted: true });
    const favoriteOnly = baseNote({ isFavorite: true });
    saveNotes([favoriteAndDeleted, favoriteOnly]);

    const { result } = renderHook(() => useNotesFilter('favorites'), {
      wrapper: NotesProvider,
    });

    expect(result.current.map((n) => n.id)).toEqual([favoriteOnly.id]);
  });

  it('excluye notas eliminadas del filtro "archived"', () => {
    const archivedAndDeleted = baseNote({ isArchived: true, isDeleted: true });
    const archivedOnly = baseNote({ isArchived: true });
    saveNotes([archivedAndDeleted, archivedOnly]);

    const { result } = renderHook(() => useNotesFilter('archived'), {
      wrapper: NotesProvider,
    });

    expect(result.current.map((n) => n.id)).toEqual([archivedOnly.id]);
  });

  it('"active" excluye notas archivadas y eliminadas', () => {
    const active = baseNote({});
    const archived = baseNote({ isArchived: true });
    const deleted = baseNote({ isDeleted: true });
    saveNotes([active, archived, deleted]);

    const { result } = renderHook(() => useNotesFilter('active'), {
      wrapper: NotesProvider,
    });

    expect(result.current.map((n) => n.id)).toEqual([active.id]);
  });
});
