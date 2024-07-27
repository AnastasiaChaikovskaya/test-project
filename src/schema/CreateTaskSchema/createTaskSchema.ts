import { IMAGE_ASPECT_RATIO, TASK_GEN_TYPE, TASK_TEMPLATE_ID } from '@/constants/task-constants';
import { z } from 'zod';

export const createTaskSchema = z.object({
  taskName: z.string().min(1, {
    message: 'Task name must be at least 1 characters long',
  }),
  dimension: z.enum(Object.values(IMAGE_ASPECT_RATIO) as [keyof typeof IMAGE_ASPECT_RATIO]),
  template_id: z.enum(Object.values(TASK_TEMPLATE_ID) as [keyof typeof TASK_TEMPLATE_ID]),
  amount: z.number().min(1, {
    message: 'Amount must be greater than or equal to 1',
  }),
  gen_type: z.enum(Object.values(TASK_GEN_TYPE) as [keyof typeof TASK_GEN_TYPE]),
});

export type TCreateTaskForm = z.infer<typeof createTaskSchema>;
