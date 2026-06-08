import clsx from 'clsx';

const styles = {
  nav: 'fixed inset-x-0 bottom-3 z-50 mx-5 flex min-h-18 items-center justify-around gap-4 rounded-4xl border border-white/70 bg-white/80 px-6 shadow-xl shadow-slate-500/10 backdrop-blur-md sm:hidden',

  item: (active: boolean) =>
    clsx(
      'flex flex-1 flex-col items-center justify-center gap-1 py-2 text-[10px] font-medium leading-tight transition-colors cursor-pointer',
      active ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600',
    ),

  addBtnWrapper:
    'relative -mt-2.5 flex size-16 shrink-0 items-center justify-center rounded-full bg-slate-50 shadow-md shadow-slate-800/10 outline outline-1 outline-slate-100',

  addBtnContent:
    'absolute flex size-14 cursor-pointer items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-200/60 transition hover:bg-blue-700 active:scale-95',
};

export default styles;
