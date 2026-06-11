import clsx from 'clsx';

const actionStyles = {
  favoriteBtn: (selected: boolean) =>
    clsx(
      'cursor-pointer rounded-lg p-1 transition-colors',
      selected
        ? 'text-amber-400 hover:text-amber-500'
        : 'text-slate-300 hover:text-amber-400',
    ),

  btnContainer: 'flex flex-col items-end gap-2',

  paperBtn:
    'cursor-pointer text-orange-500 transition-all duration-200 ease-in-out hover:scale-110 hover:text-orange-600',

  archiveBtn:
    'cursor-pointer text-slate-400 transition-all duration-200 ease-in-out hover:scale-110 hover:text-blue-500',

  restoreBtn:
    'cursor-pointer inline-flex min-w-28 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-blue-600 shadow-sm transition-all duration-200 ease-in-out hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 active:scale-95',

  deleteBtn:
    'cursor-pointer inline-flex min-w-28 items-center justify-center gap-2 rounded-lg border border-red-200 bg-red-600 px-3 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-200 ease-in-out hover:border-red-700 hover:bg-red-700 active:scale-95',
};

export default actionStyles;
