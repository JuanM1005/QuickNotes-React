import { useState } from 'react';
import { LuPlus } from 'react-icons/lu';
import { Modal } from '@/components/ui/Modal';
import { NoteForm } from '@/components/notes/NoteForm';
import { useNoteModal } from '@/App/hooks/useNoteModal';
import { SIDEBAR_ITEMS } from '@/components/layout/Sidebar/data';
import type { SidebarItemId } from '@/components/layout/Sidebar/data/Sidebar.data.types';
import { Button } from '@/components/ui/Button';
import styles from './MobileNav.styles';
import toast from 'react-hot-toast';

export const MobileNav = () => {
  const [activeId, setActiveId] = useState<SidebarItemId>('notes');
  const { open, close, isOpen, handleSubmit } = useNoteModal();

  const leftItems = SIDEBAR_ITEMS.slice(0, 2);
  const rightItems = SIDEBAR_ITEMS.slice(2);

  // const handleNavClick = (id: SidebarItemId, label: string): void => {
  //   if (id === 'notes') {
  //     setActiveId(id);
  //   } else {
  //     alert(`Sección "${label}" próximamente.`);
  //   }
  // };

  // Solo para probar el estado del botón (cambia de color)
  const handleClick = (id: SidebarItemId, label: string): void => {
    setActiveId(id);
    toast(`Disponible próximamente la sección: "${label}"`);
  };

  return (
    <>
      <nav className={styles.nav}>
        {leftItems.map(({ id, icon: Icon, label }) => (
          <Button
            key={id}
            variant="unstyled"
            className={styles.item(activeId === id)}
            onClick={() => handleClick(id, label)}
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
            className={styles.item(activeId === id)}
            onClick={() => handleClick(id, label)}
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
