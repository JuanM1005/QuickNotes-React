const styles = {
  // group permite al label reaccionar al focus de cualquier descendiente con group-focus-within,
  // ya que CSS no puede seleccionar un elemento previo a su hermano enfocado
  wrapper: 'group flex flex-col gap-2',
  labelRow: 'flex items-center gap-1',
  label:
    'text-sm font-medium text-slate-700 transition-colors group-focus-within:text-blue-500',
  required: 'text-red-500',
  hint: 'text-xs text-slate-400',
  error: 'text-xs font-medium text-red-500',
};

export default styles;
