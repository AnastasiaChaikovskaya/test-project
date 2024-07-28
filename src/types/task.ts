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

export interface ITaskGenerateFormatsRequest {
  task_name: string;
  dimension: string;
  template_id: string;
  amount: number;
  gen_type: string;
  image_layers: string[];
  text_layers: string[];
}

export interface ITaskGenerateImagesRequest {
  images: string[];
  dimension: string;
  style: string;
  manual_prompts: string;
  gen_per_ref: number;
  flow: string;
}
