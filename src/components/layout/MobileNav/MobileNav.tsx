import { useState } from 'react';
import { LuPlus } from 'react-icons/lu';
import { Modal } from '@/components/ui/Modal';
import { NoteForm } from '@/components/notes/NoteForm';
import { useNoteModal } from '@/App/hooks/useNoteModal';
import { SIDEBAR_ITEMS } from '@/components/layout/Sidebar/data';
import type { SidebarItemId } from '@/components/layout/Sidebar/data/Sidebar.data.types';
import styles from './MobileNav.styles';

export const MobileNav = () => {
  const [activeId, setActiveId] = useState<SidebarItemId>('notes');
  const { open, close, isOpen, handleSubmit } = useNoteModal();

  const leftItems = SIDEBAR_ITEMS.slice(0, 2);
  const rightItems = SIDEBAR_ITEMS.slice(2);

  return (
    <>
      <nav className={styles.nav}>
        {leftItems.map(({ id, icon: Icon }) => (
          <button
            key={id}
            className={styles.item(activeId === id)}
            onClick={() => setActiveId(id)}
          >
            <Icon size={20} />
          </button>
        ))}

        <button
          className={styles.addBtn}
          onClick={open}
          aria-label="Nueva nota"
        >
          <LuPlus size={22} />
        </button>

        {rightItems.map(({ id, icon: Icon }) => (
          <button
            key={id}
            className={styles.item(activeId === id)}
            onClick={() => setActiveId(id)}
          >
            <Icon size={20} />
          </button>
        ))}
      </nav>

      <Modal isOpen={isOpen} onClose={close} title="Agregar nueva nota">
        <NoteForm onSubmit={handleSubmit} onCancel={close} />
      </Modal>
    </>
  );
};
