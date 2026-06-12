import { describe, it, expect, beforeEach } from 'vitest';
import { getStoredNotes, saveNotes } from './notes.storage';
import type { Note } from '@/types/note.types';

const sampleNote: Note = {
  id: '1',
  title: 'Test',
  content: 'Contenido',
  createdAt: '2026-06-01T00:00:00.000Z',
  updatedAt: '2026-06-01T00:00:00.000Z',
};

describe('notes.storage', () => {
  beforeEach(() => localStorage.clear());

  it('retorna un arreglo vacío si no hay nada guardado', () => {
    expect(getStoredNotes()).toEqual([]);
  });

  it('guarda y recupera notas correctamente', () => {
    saveNotes([sampleNote]);
    expect(getStoredNotes()).toEqual([sampleNote]);
  });

  it('retorna un arreglo vacío si el JSON guardado está corrupto', () => {
    localStorage.setItem('quicknotes-notes', '{esto no es json válido');
    expect(getStoredNotes()).toEqual([]);
  });

  it('retorna un arreglo vacío si el JSON guardado no es un array', () => {
    localStorage.setItem('quicknotes-notes', JSON.stringify({ no: 'array' }));
    expect(getStoredNotes()).toEqual([]);
  });
});
