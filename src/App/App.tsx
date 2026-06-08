import { AppContent } from './components/AppContent/AppContent';
import { NotesProvider } from '@/context/notes'
import styles from './App.styles';
import { Sidebar, SidebarProvider } from '@/components/layout/Sidebar';
import { MobileNav } from '@/components/layout/MobileNav';

const App = () => {
  return (
    <NotesProvider>
      <SidebarProvider>
        <main className={styles.main}>
          <Sidebar />
          <AppContent />
          <MobileNav />
        </main>
      </SidebarProvider>
    </NotesProvider>
  );
};

export default App;
