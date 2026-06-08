import clsx from 'clsx';

const styles = {
  wrapper: 'mt-auto flex flex-col gap-3',

  divider:
    'h-px w-full border-0 bg-linear-to-r from-transparent via-slate-600/20 to-transparent',

  logoutBtn: (isCollapsed: boolean) =>
    clsx(
      'flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-red-50 hover:text-red-500',
      isCollapsed ? 'justify-center' : 'w-full',
    ),
};

export default styles;
