import type { Note, NoteInput } from '@/types/note.types';

export const createNote = (input: NoteInput): Note => {
  const now = new Date().toISOString();

  return {
    id: crypto.randomUUID(),
    title: input.title,
    content: input.content,
    color: input.color,
    category: input.category,
    createdAt: now,
    updatedAt: now,
  };
};
