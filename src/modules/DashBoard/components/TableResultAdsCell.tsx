import { Text } from '@/components/typography';
import { Button } from '@/components/ui/button';
import { ITask } from '@/types/task';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface ITableResultAdsCellProps {
  rowData: ITask;
}

export const TableResultAdsCell: FC<ITableResultAdsCellProps> = ({ rowData }) => {
  console.log(rowData);

  if (rowData.isGenerated) {
    return (
      <div className="flex justify-center">
        <Button
          asChild
          className="p-1 gap-1 bg-green-200 rounded-md text-stone-950 font-semibold disabled:bg-stone-200 hover:bg-green-200/70 h-min"
        >
          <Link
            to={`https://testapi-jvqis72guq-lm.a.run.app/test_vidro/${rowData.taskName}_${rowData.dimension}/format_validation`}
            target="_blank"
          >
            Folder
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <Text variant={'size-14'} className="text-center text-stone-500">
      No results
    </Text>
  );
};
