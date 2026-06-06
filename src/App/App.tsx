import { AppContent } from './AppContent';
import { NotesProvider } from '@/context/notes';
import styles from './App.styles';

const App = () => {
  return (
    <NotesProvider>
      <main className={styles.main}>
        <AppContent />
      </main>
    </NotesProvider>
  );
};

export default App;
