import { AppContent } from './components/AppContent/AppContent';
import { NotesProvider } from '@/context/notes';
import styles from './App.styles';
import { Sidebar, SidebarProvider } from '@/components/layout/Sidebar';

const App = () => {
  return (
    <NotesProvider>
      <SidebarProvider>
        <main className={styles.main}>
          <Sidebar />
          <AppContent />
        </main>{' '}
      </SidebarProvider>
    </NotesProvider>
  );
};

export default App;
