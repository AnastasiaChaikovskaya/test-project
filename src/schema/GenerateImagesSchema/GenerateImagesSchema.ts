import { IMAGE_FLOW, IMAGE_STYLES } from '@/constants/image-constans';
import { IMAGE_ASPECT_RATIO } from '@/constants/task-constants';
import { z } from 'zod';

export const GenerateImagesSchema = z.object({
  dimension: z.nativeEnum(IMAGE_ASPECT_RATIO),
  flow: z.nativeEnum(IMAGE_FLOW),
  image_ref_1: z.string().min(1, {
    message: 'Image ref is required',
  }),
  manual_prompts: z.string(),
  gen_per_ref: z.number().positive({
    message: 'Must be less then 0',
  }),
  styles: z.nativeEnum(IMAGE_STYLES),
});

export type TGenerateImageForm = z.infer<typeof GenerateImagesSchema>;
