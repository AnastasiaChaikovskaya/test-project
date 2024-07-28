import { axiosInstance } from '@/api/api';
import { TASK_ENDPOINTS } from '@/constants/endpoints';
import { ITaskGenerateFormatsRequest, ITaskGenerateImagesRequest } from '@/types/task';

export const generateImages = async (task: ITaskGenerateImagesRequest) => {
  const response = await axiosInstance.post(TASK_ENDPOINTS.GENERATE_IMAGES, task);

  return response.data;
};

export const generateFormats = async (task: ITaskGenerateFormatsRequest) => {
  const response = await axiosInstance.post(TASK_ENDPOINTS.GENERATE_FORMATS, task);

  return response.data;
};
