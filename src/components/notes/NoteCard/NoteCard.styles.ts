import clsx from 'clsx';
import type { NoteCategory, NoteColor } from '@/types/note.types';

export const iconBoxStyles: Record<NoteColor, string> = {
  blue: 'bg-blue-100 text-blue-500',
  green: 'bg-emerald-100 text-emerald-500',
  yellow: 'bg-yellow-100 text-yellow-500',
  pink: 'bg-pink-100 text-pink-500',
  purple: 'bg-purple-100 text-purple-500',
  red: 'bg-red-100 text-red-500',
  orange: 'bg-orange-100 text-orange-500',
};

export const categoryBadgeStyles: Record<NoteCategory, string> = {
  work: 'bg-blue-100 text-blue-600',
  personal: 'bg-emerald-100 text-emerald-600',
  ideas: 'bg-yellow-100 text-yellow-600',
  study: 'bg-indigo-100 text-indigo-600',
  tasks: 'bg-orange-100 text-orange-600',
  reminders: 'bg-pink-100 text-pink-600',
};

const styles = {
  card: 'flex items-center gap-4 rounded-2xl bg-white px-4 py-4 shadow-sm transition-shadow hover:shadow-md',

  iconBox: 'flex size-16 shrink-0 items-center justify-center rounded-2xl',
  iconBoxDefault: 'bg-slate-100 text-slate-500',

  body: 'flex min-w-0 flex-1 flex-col gap-1',
  title: 'line-clamp-1 text-base font-semibold text-slate-900',
  content: 'line-clamp-2 text-sm leading-relaxed text-slate-500',

  footer: 'mt-0.5 flex flex-wrap items-center gap-2',
  date: 'text-xs text-slate-400',
  separator: 'text-slate-300',
  badge:
    'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium',

  actions:
    'flex shrink-0 flex-col items-center justify-between self-stretch py-0.5',
  favoriteBtn: (selected: boolean) =>
    clsx(
      'cursor-pointer rounded-lg p-1 transition-colors',
      selected
        ? 'text-amber-400 hover:text-amber-500'
        : 'text-slate-300 hover:text-amber-400',
    ),
  deleteBtn:
    'cursor-pointer text-red-500 transition-all duration-200 ease-in-out hover:scale-110',
};

export default styles;
