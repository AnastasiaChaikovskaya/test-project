import { ValueOf } from '@/lib/utils';

export const ModalNames = {
  CREATE_TASK: 'create-task',
} as const;

export type TModalNames = ValueOf<typeof ModalNames>;
