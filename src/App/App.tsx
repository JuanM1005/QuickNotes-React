import { NotesProvider } from '@/context/notes';
import { NoteDeleteDialog } from '@/components/notes/NoteDeleteDialog';
import { Sidebar, SidebarProvider } from '@/components/layout/Sidebar';
import { useSidebar } from '@/components/layout/Sidebar/context/useSidebarContext';
import { MobileNav } from '@/components/layout/MobileNav';
import { NotesPage } from '@/pages/NotesPage/NotesPage';
import { FavoritesPage } from '@/pages/FavoritesPage/FavoritesPage';
import { TrashPage } from '@/pages/TrashPage';
import { Toaster } from 'react-hot-toast';
import styles from './App.styles';
import { ArchivedPage } from '@/pages/ArchivedPage/ArchivedPage';

const App = () => {
  return (
    <NotesProvider>
      <SidebarProvider>
        <AppContent />
        <NoteDeleteDialog />
        <Toaster />
      </SidebarProvider>
    </NotesProvider>
  );
};

const AppContent = () => {
  const { activePage } = useSidebar();

  return (
    <main className={styles.main}>
      <Sidebar />

      {activePage === 'notes' && <NotesPage />}
      {activePage === 'favorites' && <FavoritesPage />}
      {activePage === 'archived' && <ArchivedPage />}
      {activePage === 'trash' && <TrashPage />}

      <MobileNav />
    </main>
  );
};

export default App;
