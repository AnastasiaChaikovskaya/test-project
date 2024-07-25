import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { APP_ROUTS } from './constants/routes';
import { Dashboard, GenerateRecourses, NotFound } from './pages';
import { MainLayout } from './layouts';

function App() {
  const routs = createBrowserRouter([
    {
      path: APP_ROUTS.App.Dashboard.Root.path,
      element: <MainLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: APP_ROUTS.App.Dashboard.GenerateRecourses.path,
          element: <GenerateRecourses />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routs} />;
}

export default App;
