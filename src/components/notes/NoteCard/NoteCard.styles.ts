import type { NoteColor } from '@/types/note.types';

export const noteColorStyles: Record<NoteColor, string> = {
  blue: 'border-l-blue-500 hover:border-blue-200',
  green: 'border-l-emerald-500 hover:border-emerald-200',
  yellow: 'border-l-yellow-500 hover:border-yellow-200',
  pink: 'border-l-pink-500 hover:border-pink-200',
  purple: 'border-l-purple-500 hover:border-purple-200',
  red: 'border-l-red-500 hover:border-red-200',
  orange: 'border-l-orange-500 hover:border-orange-200',
};

export const badgeColorStyles: Record<NoteColor, string> = {
  blue: 'bg-blue-100 text-blue-700',
  green: 'bg-emerald-100 text-emerald-700',
  yellow: 'bg-yellow-100 text-yellow-700',
  pink: 'bg-pink-100 text-pink-700',
  purple: 'bg-purple-100 text-purple-700',
  red: 'bg-red-100 text-red-700',
  orange: 'bg-orange-100 text-orange-700',
};

const styles = {
  card: 'rounded-xl border border-slate-200 border-l-4 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-lg',
  defaultColor: 'border-l-slate-400 hover:border-slate-300',
  header: 'mb-3 flex items-start justify-between gap-4',
  title:
    'min-w-0 line-clamp-2 text-lg font-semibold leading-snug text-slate-900',
  footer: 'mt-4 flex items-center justify-between',
  actionBtn:
    'cursor-pointer transition-all duration-200 ease-in-out hover:scale-110',
  favoriteBtn: 'text-slate-400 hover:text-amber-500',
  deleteBtn: 'text-red-500',
  body: 'space-y-3',
  date: 'flex items-center gap-2 text-xs text-slate-500',
  content: 'line-clamp-3 text-sm leading-relaxed text-slate-700',
  badge: 'mb-2 inline-flex w-fit rounded-full px-2 py-0.5 text-xs font-medium',
  defaultBadge: 'bg-slate-100 text-slate-600',
};

export default styles;
