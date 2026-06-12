import type { NoteCategory, NoteColor } from '@/types/note.types';

export const cardColorStyles: Record<NoteColor, string> = {
  blue: 'bg-blue-50/60 before:bg-blue-400',
  green: 'bg-emerald-50/60 before:bg-emerald-400',
  yellow: 'bg-yellow-50/60 before:bg-yellow-400',
  pink: 'bg-pink-50/60 before:bg-pink-400',
  purple: 'bg-purple-50/60 before:bg-purple-400',
  red: 'bg-red-50/60 before:bg-red-400',
  orange: 'bg-orange-50/60 before:bg-orange-400',
};

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
  study: 'bg-cyan-100 text-cyan-600',
  tasks: 'bg-orange-100 text-orange-600',
  reminders: 'bg-pink-100 text-pink-600',
};

const styles = {
  card: 'group relative flex min-h-36 cursor-pointer items-center gap-4 overflow-hidden rounded-2xl px-4 py-4 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-200 before:absolute before:left-0 before:top-0 before:h-1 before:w-28 before:rounded-br-full before:content-[""]',

  cardDefault: 'bg-white before:bg-slate-300',

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
};

export default styles;
