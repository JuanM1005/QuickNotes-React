const styles = {
  section:
    'mx-auto flex flex-1 w-full max-w-2xl flex-col items-center justify-center gap-6 md:gap-7 px-4 md:px-8 py-12 md:py-16 text-center',

  imageWrapper: 'relative flex items-center justify-center',

  imageGlow:
    'absolute inset-0 rounded-full bg-linear-to-br from-brand-100/50 to-slate-100/60 blur-xl',

  imageFrame:
    'relative flex items-center justify-center rounded-full bg-linear-to-br from-white to-slate-50 p-6 md:p-7 ring-1 ring-slate-200/70 shadow-sm',

  image: 'size-24 md:size-28 object-contain opacity-90 select-none',

  textWrapper: 'flex flex-col gap-2 max-w-sm md:max-w-md',

  title: 'text-xl md:text-2xl font-semibold tracking-tight text-slate-800',

  description: 'text-sm md:text-base leading-relaxed text-slate-500',

  tip: 'flex items-center gap-2.5 rounded-xl border border-brand-200 bg-brand-50 p-4 max-w-sm md:max-w-md text-start',

  tipIcon: 'shrink-0 text-brand-500',

  tipText: 'text-xs md:text-sm leading-relaxed text-slate-500',

  tipStrong: 'font-medium text-brand-600',
};

export default styles;
