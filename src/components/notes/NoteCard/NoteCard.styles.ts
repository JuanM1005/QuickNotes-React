import type { NoteColor } from '@/types/note.types';

export const noteColorStyles: Record<NoteColor, string> = {
  blue: 'border-blue-200 bg-blue-50 hover:border-blue-300',
  green: 'border-green-200 bg-green-50 hover:border-green-300',
  yellow: 'border-yellow-200 bg-yellow-50 hover:border-yellow-300',
  pink: 'border-pink-200 bg-pink-50 hover:border-pink-300',
  purple: 'border-purple-200 bg-purple-50 hover:border-purple-300',
};

const styles = {
  card: 'rounded-2xl border p-5 shadow-sm/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md/5',
  defaultColor: 'border-slate-200 bg-white',
  header: 'mb-3',
  title: 'line-clamp-2 text-lg font-semibold text-slate-900',
  date: 'mt-2 flex items-center gap-2 text-xs text-slate-400',
  content: 'line-clamp-3 text-sm leading-6 text-slate-600',
};

export default styles;
