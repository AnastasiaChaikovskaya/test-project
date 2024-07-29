import { APP_ROUTS } from '@/constants/routes';
import { useSelectedTask } from '@/store';
import { ITask } from '@/types/task';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface ITableTaskNameCellProps {
  cellData: ITask;
}

export const TableTaskNameCell: FC<ITableTaskNameCellProps> = ({ cellData }) => {
  const setSelectedTask = useSelectedTask((state) => state.setSelectedTask);

  const handleTaskNameLink = () => {
    setSelectedTask(cellData);
  };

  return (
    <Link
      className="hover:underline underline-offset-4 hover:text-blue-800 transition-colors"
      to={APP_ROUTS.App.Dashboard.GenerateRecourses.makePath(cellData.id)}
      onClick={handleTaskNameLink}
    >
      {cellData.taskName}
    </Link>
  );
};
