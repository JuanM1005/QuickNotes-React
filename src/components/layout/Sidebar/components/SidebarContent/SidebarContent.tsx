import { useNoteModal } from '@/hooks/useNoteModal';
import { SidebarBrand } from '../SidebarBrand';
import { SidebarNav } from '../SidebarNav';
import { SidebarFooter } from '../SidebarFooter';
import { Modal } from '@/components/ui/Modal';
import { NoteForm } from '@/components/notes/NoteForm';
import { useSidebar } from '../../context/useSidebarContext';
import styles from './SidebarContent.styles';

export const SidebarContent = () => {
  const { open, close, isOpen, handleSubmit } = useNoteModal();
  const { isCollapsed } = useSidebar();

  return (
    <div className={styles.wrapper(isCollapsed)}>
      <SidebarBrand />

      <hr className={styles.divider} />

      <SidebarNav />

      <SidebarFooter onOpenForm={open} />

      <Modal isOpen={isOpen} onClose={close} title="Agregar nueva nota">
        <NoteForm onSubmit={handleSubmit} onCancel={close} />
      </Modal>
    </div>
  );
};
