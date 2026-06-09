import type { NoteCategory, NoteColor } from '@/types/note.types';

export const cardColorStyles: Record<NoteColor, string> = {
  blue: 'bg-blue-50/70 before:bg-blue-500 before:shadow-[0_0_14px_rgba(59,130,246,0.65)] hover:shadow-blue-200',
  green:
    'bg-emerald-50/70 before:bg-emerald-500 before:shadow-[0_0_14px_rgba(16,185,129,0.65)] hover:shadow-emerald-200',
  yellow:
    'bg-yellow-50/70 before:bg-yellow-400 before:shadow-[0_0_14px_rgba(250,204,21,0.65)] hover:shadow-yellow-200',
  pink: 'bg-pink-50/70 before:bg-pink-400 before:shadow-[0_0_14px_rgba(244,114,182,0.65)] hover:shadow-pink-200',
  purple:
    'bg-purple-50/70 before:bg-purple-500 before:shadow-[0_0_14px_rgba(168,85,247,0.65)] hover:shadow-purple-200',
  red: 'bg-red-50/70 before:bg-red-500 before:shadow-[0_0_14px_rgba(239,68,68,0.65)] hover:shadow-red-200',
  orange:
    'bg-orange-50/70 before:bg-orange-500 before:shadow-[0_0_14px_rgba(249,115,22,0.65)] hover:shadow-orange-200',
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
  study: 'bg-indigo-100 text-indigo-600',
  tasks: 'bg-orange-100 text-orange-600',
  reminders: 'bg-pink-100 text-pink-600',
};

const styles = {
  card: 'group relative flex min-h-36 items-center gap-4 overflow-hidden rounded-2xl px-4 py-4 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md before:absolute before:left-0 before:top-0 before:h-1 before:w-28 before:rounded-br-full before:content-[""]',

  cardDefault:
    'bg-white before:bg-slate-300 before:shadow-[0_0_12px_rgba(148,163,184,0.45)]',

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
