import { ITask } from '@/types/task';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface ITaskState {
  tasks: ITask[];
  setTask: (task: ITask) => void;
  removeTask: (id: string) => void;
}

export const useTasks = create<ITaskState>()(
  devtools((set) => ({
    tasks: [],
    setTask: (newTask) => set(({ tasks }) => ({ tasks: [...tasks, newTask] })),
    removeTask: (id) => set(({ tasks }) => ({ tasks: tasks.filter((task) => task.id !== id) })),
  })),
);
