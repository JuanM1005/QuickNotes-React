import clsx from 'clsx';

const styles = {
  button: (isCollapsed: boolean, isActive: boolean) =>
    clsx(
      'flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors',
      isCollapsed ? 'justify-center' : 'w-full',
      isActive
        ? 'bg-brand-50 text-brand-600'
        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
    ),

  icon: 'shrink-0',
};

export default styles;
