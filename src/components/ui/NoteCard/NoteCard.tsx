import clsx from 'clsx';
import { formatDate } from '@/utils/formatDate';
import type { NoteCardProps } from './NoteCard.types';
import { noteColorStyles } from './NoteCard.styles';
import { FaRegCalendarAlt } from 'react-icons/fa';

export const NoteCard = ({ note }: NoteCardProps) => {
  const colorClassname = note.color
    ? noteColorStyles[note.color]
    : 'border-slate-200 bg-white';

  return (
    <article
      className={clsx(
        'rounded-2xl border p-5 shadow-sm/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md/5',
        colorClassname,
      )}
    >
      <header className="mb-3">
        <h3 className="line-clamp-2 text-lg font-semibold text-slate-900">
          {note.title}
        </h3>

        <p className="mt-2 flex items-center gap-2 text-xs text-slate-400">
          <FaRegCalendarAlt size={15} /> <span>{formatDate(note.createdAt)}</span>
        </p>
      </header>

      <p className="line-clamp-3 text-sm leading-6 text-slate-600">
        {note.content}
      </p>
    </article>
  );
};
