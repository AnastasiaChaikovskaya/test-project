import { ITask } from '@/types/task';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface ICurrentTaskStore {
  selectedTask: ITask | null;
  setSelectedTask: (selectedTask: ITask) => void;
}

export const useSelectedTask = create<ICurrentTaskStore>()(
  devtools((set) => ({
    selectedTask: null,
    setSelectedTask: (newSelectedTask) => set(() => ({ selectedTask: newSelectedTask })),
  })),
);
