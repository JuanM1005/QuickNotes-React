import clsx from 'clsx';

const styles = {
  button: (isCollapsed: boolean) =>
    clsx(
      'flex size-7 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-blue-500 shadow-sm transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 focus-visible:outline-none',
      isCollapsed
        ? 'fixed left-3 top-6 z-50 sm:absolute sm:left-auto sm:-right-3.5 sm:top-6 sm:z-10'
        : 'absolute -right-3.5 top-6 z-50',
    ),
};

export default styles;
