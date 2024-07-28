import { IMAGE_ASPECT_RATIO, TASK_GEN_TYPE, TASK_TEMPLATE_ID } from '@/constants/task-constants';
import { z } from 'zod';

export const createTaskSchema = z.object({
  taskName: z.string().min(1, {
    message: 'Task name is required',
  }),
  dimension: z.nativeEnum(IMAGE_ASPECT_RATIO),
  template_id: z.nativeEnum(TASK_TEMPLATE_ID),
  amount: z.number().positive({
    message: 'Amount must be greater than 0',
  }),
  gen_type: z.nativeEnum(TASK_GEN_TYPE),
});

export type TCreateTaskForm = z.infer<typeof createTaskSchema>;
