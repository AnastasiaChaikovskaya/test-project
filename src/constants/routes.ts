import { TAppRoutes } from '@/types';

export const APP_ROUTS: TAppRoutes = {
  App: {
    Dashboard: {
      Root: {
        key: 'dashboard',
        path: '/',
        name: 'Dashboard',
        makePath: () => `/`,
      },
      GenerateRecourses: {
        key: 'generate-recourses',
        path: ':taskId',
        name: 'Generate Recourses',
        makePath: (taskId) => `/${taskId}`,
      },
    },
  },
};
