const styles = {
  container:
    'relative flex flex-1 flex-col items-center rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-brand-50/40 px-8 py-6 text-center shadow-sm',

  decorations:
    'pointer-events-none absolute inset-0 overflow-hidden rounded-3xl',

  decorationOne:
    'absolute -top-24 -right-24 size-72 rounded-full bg-brand-100/50 blur-3xl will-change-transform',

  decorationTwo:
    'absolute -bottom-24 -left-24 size-72 rounded-full bg-slate-100/60 blur-3xl will-change-transform',

  content:
    'relative z-10 flex w-full flex-1 flex-col items-center justify-center gap-0',

  badge:
    'mb-6 inline-flex items-center rounded-full border border-brand-100 bg-white/80 px-4 py-1.5 text-xs font-semibold text-brand-600 shadow-sm backdrop-blur',

  animation:
    'my-2 size-40 drop-shadow-sm will-change-transform sm:size-48 lg:size-56',

  title:
    'max-w-xl text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl',

  description: 'mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base',
};

export default styles;
