import type { NoteColor } from '@/types/note.types';

export const noteColorStyles: Record<NoteColor, string> = {
  blue: 'border-l-blue-500 hover:border-blue-200',
  green: 'border-l-emerald-500 hover:border-emerald-200',
  yellow: 'border-l-amber-500 hover:border-amber-200',
  pink: 'border-l-pink-500 hover:border-pink-200',
  purple: 'border-l-purple-500 hover:border-purple-200',
};

const styles = {
  card: 'rounded-xl border border-slate-200 border-l-4 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-lg',
  defaultColor: 'border-l-slate-400 hover:border-slate-300',
  header: 'mb-3 flex items-start justify-between gap-4',
  title:
    'min-w-0 line-clamp-2 text-lg font-semibold leading-snug text-slate-900',
  deleteButton:
    'shrink-0 text-sm font-medium text-slate-700 transition hover:text-red-600',
  body: 'space-y-3',
  date: 'flex items-center gap-2 text-xs text-slate-500',
  content: 'line-clamp-3 text-sm leading-relaxed text-slate-700',
};

export default styles;
