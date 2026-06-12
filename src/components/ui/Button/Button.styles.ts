const styles = {
  buttonBase:
    'inline-flex items-center justify-center gap-2 rounded-lg border font-medium leading-tight shadow-sm transition-all duration-300 ease-out active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60',
  buttonVariants: {
    primary: 'border-brand-200 bg-brand-600 text-white hover:bg-brand-700',
    secondary: 'border-slate-200 bg-white text-slate-900 hover:bg-slate-100',
    selected:
      'border-slate-900 bg-slate-900 text-white hover:border-slate-800 hover:bg-slate-800 active:bg-slate-950',
    caution: 'border-slate-200 bg-amber-600 text-white hover:bg-amber-700',
    danger: 'border-slate-200 bg-red-600 text-white hover:bg-red-700',
    unstyled: '',
  },
  buttonSizes: {
    sm: 'px-2 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-2.5 text-base',
  },
};

export default styles;
