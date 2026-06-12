import clsx from 'clsx';

const styles = {
  wrapper: (isCollapsed: boolean) =>
    clsx('flex items-center gap-3', isCollapsed && 'justify-center'),

  iconWrapper:
    'flex shrink-0 size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600',

  textWrapper: 'flex min-w-0 flex-col',

  title: 'text-xl font-bold tracking-tight text-slate-950',
};

export default styles;
