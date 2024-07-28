import { DataTable } from '@/components/common/DataTable';
import { CreateTaskModal } from '@/components/common/Modals/CreateTaskModal';
import { Button } from '@/components/ui/button';
import { APP_ROUTS } from '@/constants/routes';
import { useModal } from '@/hooks/useModal';
import { TableTaskEmpty } from '@/modules/DashBoard/components';
import { taskColumns } from '@/modules/DashBoard/table/columns';
import { useTasks } from '@/store';
import { Plus } from 'lucide-react';

export const Dashboard = () => {
  const { isOpen, openModal } = useModal('create-task');
  const tasks = useTasks((state) => state.tasks);
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-5xl font-bold text-stone-950">{APP_ROUTS.App.Dashboard.Root.name}</h1>
      <div className="flex flex-col gap-4">
        {tasks.length > 0 && (
          <Button onClick={openModal} className="w-min gap-2">
            <Plus className="h-5 w-5" />
            Create new task
          </Button>
        )}
        <DataTable data={tasks} columns={taskColumns} tableEmptyComponent={<TableTaskEmpty />} />
      </div>
      {isOpen && <CreateTaskModal />}
    </div>
  );
};
