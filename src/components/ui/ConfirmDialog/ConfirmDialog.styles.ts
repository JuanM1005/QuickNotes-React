import type { ConfirmDialogVariant } from './ConfirmDialog.types';

export const iconStyles: Record<ConfirmDialogVariant, string> = {
  caution: 'bg-amber-50 text-amber-600',
  danger: 'bg-red-50 text-red-600',
  default: 'bg-brand-50 text-brand-600',
};

const styles = {
  body: 'flex flex-col items-center gap-3 text-center sm:flex-row sm:items-start sm:text-left',
  iconWrapper: 'flex size-12 shrink-0 items-center justify-center rounded-full',
  title: 'text-lg font-semibold text-slate-900',
  description: 'mt-1 text-sm leading-6 text-slate-500',
  actions: 'mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end',
};

export default styles;
