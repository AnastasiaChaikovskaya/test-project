import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface IModalStore {
  isCreateModalOpen: boolean;
  setCreateModalOpen: (isModalOpen: boolean) => void;
}

const initModalState = {
  isCreateModalOpen: false,
};

export const useModalStore = create<IModalStore>()(
  devtools((set) => ({
    ...initModalState,
    setCreateModalOpen: (isModalOpen) => set((state) => ({ ...state, isCreateModalOpen: isModalOpen })),
  })),
);
