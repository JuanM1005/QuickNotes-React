const styles = {
  modalOverlayStyles:
    'fixed inset-0 z-[1000] flex items-end justify-center bg-slate-950/50 backdrop-blur-sm animate-overlay-show sm:items-center sm:px-4 sm:py-6',
  modalContainerStyles:
    'flex w-full max-h-[92vh] flex-col overflow-hidden rounded-t-3xl border border-slate-200 bg-white shadow-2xl ring-1 ring-slate-900/5 pb-[env(safe-area-inset-bottom)] animate-sheet-up sm:max-w-lg sm:max-h-[85vh] sm:rounded-2xl sm:pb-0 sm:animate-dialog-in',
  modalGrabHandleStyles:
    'mx-auto mt-3 h-1.5 w-10 shrink-0 rounded-full bg-slate-300 sm:hidden',
  modalHeaderStyles:
    'flex shrink-0 items-center justify-between gap-4 border-b border-slate-200 px-5 py-4 sm:px-6',
  modalTitleStyles: 'text-lg font-semibold tracking-tight text-slate-900',
  modalCloseButtonStyles:
    'inline-flex size-8 items-center justify-center rounded-lg text-slate-500 cursor-pointer transition hover:bg-slate-100 hover:text-slate-900 active:scale-95',
  modalBodyStyles:
    'flex-1 overflow-y-auto px-5 py-5 text-sm leading-6 text-slate-600 sm:px-6',
};

export default styles;
