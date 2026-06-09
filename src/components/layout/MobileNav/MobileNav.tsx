import { LuPlus } from 'react-icons/lu';
import { Modal } from '@/components/ui/Modal';
import { NoteForm } from '@/components/notes/NoteForm';
import { useNoteModal } from '@/hooks/useNoteModal';
import { SIDEBAR_ITEMS } from '@/components/layout/Sidebar/data';
import { useSidebar } from '@/components/layout/Sidebar/context/useSidebarContext';
import { Button } from '@/components/ui/Button';
import styles from './MobileNav.styles';

export const MobileNav = () => {
  const { activePage, setActivePage } = useSidebar();
  const { open, close, isOpen, handleSubmit } = useNoteModal();

  const leftItems = SIDEBAR_ITEMS.slice(0, 2);
  const rightItems = SIDEBAR_ITEMS.slice(2);

  return (
    <>
      <nav className={styles.nav}>
        {leftItems.map(({ id, icon: Icon, label }) => (
          <Button
            key={id}
            variant="unstyled"
            className={styles.item(activePage === id)}
            onClick={() => setActivePage(id)}
          >
            <Icon size={20} />
            {label}
          </Button>
        ))}

        <div className={styles.addBtnWrapper}>
          <Button
            variant="unstyled"
            className={styles.addBtnContent}
            onClick={open}
            aria-label="Nueva nota"
          >
            <LuPlus size={24} />
          </Button>
        </div>

        {rightItems.map(({ id, icon: Icon, label }) => (
          <Button
            key={id}
            variant="unstyled"
            className={styles.item(activePage === id)}
            onClick={() => setActivePage(id)}
          >
            <Icon size={20} />
            {label}
          </Button>
        ))}
      </nav>

      <Modal isOpen={isOpen} onClose={close} title="Agregar nueva nota">
        <NoteForm onSubmit={handleSubmit} onCancel={close} />
      </Modal>
    </>
  );
};
