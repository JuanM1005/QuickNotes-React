import clsx from 'clsx';

const styles = {
  wrapper: (isCollapsed: boolean) =>
    clsx(
      'flex h-full w-full flex-col gap-6 py-5',
      isCollapsed ? 'px-3' : 'px-6',
    ),

  divider:
    'h-px w-full border-0 bg-linear-to-r from-transparent via-slate-600/20 to-transparent',
};

export default styles;
