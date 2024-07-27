import { IMAGE_ASPECT_RATIO, TASK_GEN_TYPE, TASK_TEMPLATE_ID } from '@/constants/task-constants';
import { ValueOf } from '@/lib/utils';

export type TImageAspectRatio = ValueOf<typeof IMAGE_ASPECT_RATIO>;
export type TTaskTemplateId = ValueOf<typeof TASK_TEMPLATE_ID>;
export type TTaskGenType = ValueOf<typeof TASK_GEN_TYPE>;

export type TTaskImageItem = {
  label: string;
  imageSrc: string;
};

export interface ITask {
  id: string;
  taskName: string;
  dimension: TImageAspectRatio;
  template_id: TTaskTemplateId;
  texts: string[];
  images: TTaskImageItem[];
  amount: number;
  gen_type: TTaskGenType;
  isGenerated: boolean;
}
