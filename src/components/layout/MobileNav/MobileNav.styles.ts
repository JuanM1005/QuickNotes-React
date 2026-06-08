import clsx from 'clsx';

const styles = {
  nav: 'fixed bottom-0 inset-x-0 z-50 flex h-16 items-center justify-around border-t border-slate-200 bg-white px-4 sm:hidden',

  item: (active: boolean) =>
    clsx(
      'flex flex-1 cursor-pointer items-center justify-center rounded-xl py-2 transition-colors',
      active ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600',
    ),

  addBtn:
    '-mt-5 flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-200/60 transition hover:bg-blue-700 active:scale-95',
};

export default styles;
