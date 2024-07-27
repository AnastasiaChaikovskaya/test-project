import { ModalNames, TModalNames } from '@/constants/modals';
import { useModalStore } from '@/store/modals';
import { useCallback, useMemo } from 'react';

type TUseModal = (modalName: TModalNames) => {
  /**
   * Visibility state for desired modal.
   */
  isOpen: boolean;
  /**
   * Handler function that will close desired modal.
   */
  closeModal: () => void;
  /**
   * Handler function that will open desired modal.
   */
  openModal: () => void;
  /**
   * Handler function that will toggle desired modal.
   */
  toggleModal: (open: boolean) => void;
};

export const useModal: TUseModal = (modalName) => {
  const { isCreateModalOpen, setCreateModalOpen } = useModalStore((state) => state);

  const isOpen = useMemo(() => {
    switch (modalName) {
      case ModalNames.CREATE_TASK:
        return isCreateModalOpen;
      default: {
        throw new Error('Unknown modal name');
      }
    }
  }, [modalName, isCreateModalOpen]);

  const openModal = useCallback(() => {
    switch (modalName) {
      case ModalNames.CREATE_TASK:
        setCreateModalOpen(true);
        break;
      default: {
        throw new Error('Unknown modal name');
      }
    }
  }, [setCreateModalOpen, modalName]);

  const closeModal = useCallback(() => {
    switch (modalName) {
      case ModalNames.CREATE_TASK:
        setCreateModalOpen(false);
        break;
      default: {
        throw new Error('Unknown modal name');
      }
    }
  }, [setCreateModalOpen, modalName]);

  const toggleModal = useCallback(
    (open: boolean) => {
      switch (modalName) {
        case ModalNames.CREATE_TASK:
          setCreateModalOpen(open);
          break;
        default: {
          throw new Error('Unknown modal name');
        }
      }
    },
    [setCreateModalOpen, modalName],
  );

  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal,
  };
};
