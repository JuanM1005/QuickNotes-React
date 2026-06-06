import type { NoteColor } from '@/types/note.types';

export const colorOptionStyles: Record<NoteColor, string> = {
  blue: 'bg-blue-200 hover:bg-blue-300',
  green: 'bg-green-200 hover:bg-green-300',
  yellow: 'bg-yellow-200 hover:bg-yellow-300',
  pink: 'bg-pink-200 hover:bg-pink-300',
  purple: 'bg-purple-200 hover:bg-purple-300',
};

export const colorSelectedStyles: Record<NoteColor, string> = {
  blue: 'ring-blue-400',
  green: 'ring-green-400',
  yellow: 'ring-yellow-400',
  pink: 'ring-pink-400',
  purple: 'ring-purple-400',
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
  actions: 'mt-2 flex justify-end gap-3',
};

export default styles;
