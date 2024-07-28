import { IMAGE_ASPECT_RATIO, TASK_GEN_TYPE, TASK_TEMPLATE_ID } from './task-constants';

const IMAGE_ASPECT_RATIO_COLORS = {
  [IMAGE_ASPECT_RATIO['1x1']]: 'bg-blue-400',
  [IMAGE_ASPECT_RATIO['9x16']]: 'bg-pink-300',
  [IMAGE_ASPECT_RATIO['16x9']]: 'bg-green-300',
} as const;

const TASK_GEN_TYPE_COLORS = {
  [TASK_GEN_TYPE.cyclic_generation]: 'bg-red-300',
  [TASK_GEN_TYPE.random_generation]: 'bg-cyan-200',
} as const;

const TASK_TEMPLATE_ID_COLORS = {
  [TASK_TEMPLATE_ID['0xdoscyowl50c']]: 'bg-purple-400',
  [TASK_TEMPLATE_ID['mwpswxcudtwxb']]: 'bg-blue-300',
} as const;

export const BADGE_COLORS = {
  ...IMAGE_ASPECT_RATIO_COLORS,
  ...TASK_GEN_TYPE_COLORS,
  ...TASK_TEMPLATE_ID_COLORS,
} as const;
