import { NotesPage } from '../pages/NotesPage/NotesPage';
import { NotesProvider } from '@/context/notes';
import styles from './App.styles';
import { Sidebar, SidebarProvider } from '@/components/layout/Sidebar';
import { MobileNav } from '@/components/layout/MobileNav';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <NotesProvider>
      <SidebarProvider>
        <main className={styles.main}>
          <Sidebar />
          <NotesPage />
          <MobileNav />
        </main>

        <Toaster />
      </SidebarProvider>
    </NotesProvider>
  );
};

export default App;
