import { Button } from '@/components/ui/Button';
import { NoteList } from '@/components/ui/NoteList';
import { NOTES } from '@/data/notes.data';
import { FaPlus } from 'react-icons/fa';

const App = () => {
  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-sm font-medium tracking-wide text-blue-600/80 uppercase">
              App notas
            </span>

            <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
              QuickNotes
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Organiza tus ideas, apuntes y recordatorios en un solo lugar de
              forma rápida y sencilla.
            </p>
          </div>

          <Button>
            <FaPlus size={15}/> Agregar nueva nota
          </Button>
        </header>

        <NoteList notes={NOTES} />
      </div>
    </main>
  );
};

export default App;
