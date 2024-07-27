import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useModal } from '@/hooks/useModal';
import { CreateTaskForm } from '../CreateTaskForm/CreateTaskForm';

export const CreateTaskModal = () => {
  const { toggleModal, closeModal, isOpen } = useModal('create-task');
  return (
    <Dialog open={isOpen} onOpenChange={toggleModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create task</DialogTitle>
          <DialogDescription>Use this form to create a new advertising task</DialogDescription>
        </DialogHeader>
        <CreateTaskForm />
      </DialogContent>
    </Dialog>
  );
};
