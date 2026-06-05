import type { NoteColor } from '@/types/note.types';

export const noteColorStyles: Record<NoteColor, string> = {
  blue: 'border-blue-200 bg-blue-50 hover:border-blue-300',
  green: 'border-green-200 bg-green-50 hover:border-green-300',
  yellow: 'border-yellow-200 bg-yellow-50 hover:border-yellow-300',
  pink: 'border-pink-200 bg-pink-50 hover:border-pink-300',
  purple: 'border-purple-200 bg-purple-50 hover:border-purple-300',
};
