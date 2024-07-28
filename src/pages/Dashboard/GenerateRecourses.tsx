import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { APP_ROUTS } from '@/constants/routes';
import { GenerateImagesForm } from '@/modules/GenerateRecourses/components/GenerateImagesForm';
import { useSelectedTask } from '@/store';
import { Link } from 'react-router-dom';

export const GenerateRecourses = () => {
  const selectedTask = useSelectedTask((state) => state.selectedTask);

  return (
    <div className="flex justify-center">
      <Card className="max-w-[800px] w-full">
        <CardHeader className="space-y-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={APP_ROUTS.App.Dashboard.Root.path}>DashBoard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{selectedTask?.taskName}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <CardTitle className="text-3xl font-bold">{selectedTask?.taskName}</CardTitle>
        </CardHeader>
        <CardContent>
          <GenerateImagesForm formName="Image1" />
          <GenerateImagesForm formName="Image2" />
          <GenerateImagesForm formName="Image3" />
          <GenerateImagesForm formName="Image4" />
        </CardContent>
      </Card>
    </div>
  );
};
