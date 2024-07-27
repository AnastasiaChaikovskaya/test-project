import { DataTable } from '@/components/common/DataTable';
import { CreateTaskModal } from '@/components/common/Modals/CreateTaskModal';
import { Button } from '@/components/ui/button';
import { APP_ROUTS } from '@/constants/routes';
import { IMAGE_ASPECT_RATIO, TASK_GEN_TYPE, TASK_TEMPLATE_ID } from '@/constants/task-constants';
import { useModal } from '@/hooks/useModal';
import { TableTaskEmpty } from '@/modules/DashBoard/components';
import { taskColumns } from '@/modules/DashBoard/table/columns';
import { useTasks } from '@/store';
import { ITask } from '@/types/task';

const testData: ITask[] = [
  {
    id: '1',
    taskName: 'Image Processing Task',
    dimension: IMAGE_ASPECT_RATIO['1x1'],
    template_id: TASK_TEMPLATE_ID.mwpswxcudtwxb,
    texts: ['Process this image for feature extraction.', 'Ensure edge detection is applied.'],
    images: [
      { label: 'Sample Image 1', imageSrc: 'https://example.com/sample-image1.jpg' },
      { label: 'Sample Image 2', imageSrc: 'https://example.com/sample-image2.jpg' },
    ],
    amount: 2,
    gen_type: TASK_GEN_TYPE.cyclic_generation,
    isGenerated: false,
  },
  {
    id: '2',
    taskName: 'Video Frame Analysis',
    dimension: IMAGE_ASPECT_RATIO['16x9'],
    template_id: TASK_TEMPLATE_ID['0xdoscyowl50c'],
    texts: ['Analyze these video frames for object detection.', 'Generate a report of detected objects.'],
    images: [
      { label: 'Frame 1', imageSrc: 'https://example.com/frame1.jpg' },
      { label: 'Frame 2', imageSrc: 'https://example.com/frame2.jpg' },
    ],
    amount: 2,
    gen_type: TASK_GEN_TYPE.random_generation,
    isGenerated: true,
  },
];

export const Dashboard = () => {
  const { isOpen, openModal } = useModal('create-task');
  const tasks = useTasks((state) => state.tasks);
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-5xl font-bold text-stone-950">{APP_ROUTS.App.Dashboard.Root.name}</h1>
      <div className="flex flex-col gap-4">
        {tasks.length !== 0 && (
          <Button onClick={openModal} className="w-min">
            Create task
          </Button>
        )}
        <DataTable data={tasks} columns={taskColumns} tableEmptyComponent={<TableTaskEmpty />} />
      </div>
      {isOpen && <CreateTaskModal />}
    </div>
  );
};
