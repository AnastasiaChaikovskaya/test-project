import { Text } from '@/components/typography';
import { ITask } from '@/types/task';
import { FC } from 'react';

interface ITableImagesCellProps {
  cellData: ITask;
}

export const TableImagesCell: FC<ITableImagesCellProps> = ({ cellData }) => {
  if (cellData.images.length > 0) {
    return (
      <div className="flex items-center flex-wrap gap-1">
        {cellData.images.map((image, index) => (
          <div className="bg-slate-300 rounded-md w-max p-1" key={image.label + index}>
            {image.label}
          </div>
        ))}
      </div>
    );
  }

  return (
    <Text variant={'size-14'} type={'body-500'} className="text-stone-500">
      No image reference
    </Text>
  );
};
