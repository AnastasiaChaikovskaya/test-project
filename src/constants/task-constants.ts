import { ValueOf } from '@/lib/utils';

export const IMAGE_ASPECT_RATIO = {
  '1x1': '1x1',
  '9x16': '9x16',
  '16x9': '16x9',
} as const;

export const TASK_TEMPLATE_ID = {
  mwpswxcudtwxb: 'mwpswxcudtwxb',
  '0xdoscyowl50c': '0xdoscyowl50c',
} as const;

export const TASK_GEN_TYPE = {
  cyclic_generation: 'cyclic_generation',
  random_generation: 'random_generation',
} as const;

export type TTaskGenType = ValueOf<typeof TASK_GEN_TYPE>;
export type TImageAspectRatio = ValueOf<typeof IMAGE_ASPECT_RATIO>;
export type TTaskTemplateId = ValueOf<typeof TASK_TEMPLATE_ID>;
