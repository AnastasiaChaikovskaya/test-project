import { ITask } from '@/types/task';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface ITaskState {
  tasks: ITask[];
  setTasks: (tasks: ITask[]) => void;
  addTasks: (task: ITask) => void;
  removeTask: (id: string) => void;
}

export const useTasks = create<ITaskState>()(
  devtools((set) => ({
    tasks: [],
    setTasks: (newTasks) => set((state) => ({ ...state, tasks: newTasks })),
    addTasks: (newTask) => set((state) => ({ ...state, tasks: [...state.tasks, newTask] })),
    removeTask: (id) => set(({ tasks }) => ({ tasks: tasks.filter((task) => task.id !== id) })),
  })),
);
