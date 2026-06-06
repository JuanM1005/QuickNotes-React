const styles = {
  modalOverlayStyles:
    'fixed inset-0 z-[1000] flex items-center justify-center bg-slate-950/50 px-4 py-6 backdrop-blur-sm',
  modalContainerStyles:
    'w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl ring-1 ring-slate-900/5',
  modalHeaderStyles:
    'flex items-center justify-between gap-4 border-b border-slate-200 px-6 py-4',
  modalTitleStyles: 'text-lg font-semibold tracking-tight text-slate-900',
  modalCloseButtonStyles:
    'inline-flex size-8 items-center justify-center rounded-lg text-slate-500 cursor-pointer transition hover:bg-slate-100 hover:text-slate-900 active:scale-95',
  modalBodyStyles: 'px-6 py-5 text-sm leading-6 text-slate-600',
};

export default styles;
