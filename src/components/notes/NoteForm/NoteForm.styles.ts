import clsx from 'clsx';
import type { NoteColor } from '@/types/note.types';

export const colorOptionStyles: Record<NoteColor, string> = {
  blue: 'bg-blue-200 hover:bg-blue-300 ring-blue-400',
  green: 'bg-green-200 hover:bg-green-300 ring-green-400',
  yellow: 'bg-yellow-200 hover:bg-yellow-300 ring-yellow-400',
  pink: 'bg-pink-200 hover:bg-pink-300 ring-pink-400',
  purple: 'bg-purple-200 hover:bg-purple-300 ring-purple-400',
  red: 'bg-red-200 hover:bg-red-300 ring-red-400',
};

const styles = {
  form: 'flex flex-col gap-5',
  colorList: 'flex flex-wrap items-center gap-2',
  colorButton:
    'size-8 rounded-full border-2 border-transparent transition hover:scale-110 cursor-pointer',
  colorButtonSelected: 'border-slate-900 scale-110 ring-2',
  noColorButton:
    'rounded-full border border-dashed border-slate-300 px-3 py-1 text-xs text-slate-500 hover:bg-slate-50 cursor-pointer transition',
  noColorButtonSelected: 'border-slate-900 bg-slate-100 text-slate-900',
  categoryList: 'flex flex-wrap items-center gap-2',
  categoryBtn: (active: boolean) =>
    clsx(
      'rounded-full px-3 py-1 text-xs font-medium transition-colors cursor-pointer',
      active
        ? 'bg-slate-900 text-white'
        : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50',
    ),
  noCategoryBtn: (active: boolean) =>
    clsx(
      'rounded-full border border-dashed px-3 py-1 text-xs transition-colors cursor-pointer',
      active
        ? 'border-slate-900 bg-slate-100 text-slate-900'
        : 'border-slate-300 text-slate-500 hover:bg-slate-50',
    ),
  actions: 'mt-2 flex justify-end gap-3',
};

export default styles;
