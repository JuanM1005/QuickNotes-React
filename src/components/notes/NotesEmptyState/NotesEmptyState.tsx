import type { NotesEmptyStateProps } from './NotesEmptyState.types';

export const NotesEmptyState = ({
  imageSrc,
  imageAlt,
  title,
  description,
  tipIcon: Icon,
  tipText,
}: NotesEmptyStateProps) => {
  return (
    <section className="mx-auto flex flex-1 w-full max-w-2xl flex-col items-center justify-center gap-6 md:gap-7 px-4 md:px-8 py-12 md:py-16 text-center">
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-linear-to-br from-blue-100/60 to-slate-100/60 blur-xl" />
        <div className="relative flex items-center justify-center rounded-full bg-linear-to-br from-white to-slate-50 p-6 md:p-7 ring-1 ring-slate-200/70 shadow-sm">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="size-24 md:size-28 object-contain opacity-90 select-none"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 max-w-sm md:max-w-md">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-800">
          {title}
        </h2>
        <p className="text-sm md:text-base leading-relaxed text-slate-500">
          {description}
        </p>
      </div>

      {tipText && (
        <div className="flex items-center gap-2.5 rounded-xl border border-blue-200 bg-blue-50 p-4 max-w-sm md:max-w-md text-start">
          {Icon && <Icon className="shrink-0 text-blue-500" size={18} />}

          <p className="text-xs md:text-sm leading-relaxed text-slate-500">
            <strong className="font-medium text-blue-600">Tip: </strong>
            {tipText}
          </p>
        </div>
      )}
    </section>
  );
};
