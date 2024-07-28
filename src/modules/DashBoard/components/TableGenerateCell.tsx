import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { TASK_QUERY_KEY } from '@/constants/query-key';
import { generateFormats } from '@/servises';
import { useTasks } from '@/store';
import { ITask, ITaskGenerateFormatsRequest } from '@/types/task';
import { useMutation } from '@tanstack/react-query';
import { Loader } from 'lucide-react';
import { FC, useMemo } from 'react';

interface ITableGenerateCellProps {
  rowData: ITask;
}

export const TableGenerateCell: FC<ITableGenerateCellProps> = ({ rowData }) => {
  const { amount, dimension, gen_type, images, taskName, template_id, texts } = rowData;
  const { tasks, setTasks } = useTasks((state) => state);

  const { toast } = useToast();
  const { mutate, isPending } = useMutation({
    mutationKey: [TASK_QUERY_KEY.GENERATE_FORMATS],
    mutationFn: generateFormats,
    onSuccess: () => {
      const newTasks = tasks.map((task) => {
        if (task.id === rowData.id) {
          return { ...task, isGenerated: true };
        }

        return task;
      });

      setTasks(newTasks);

      toast({
        title: 'Formats has been generated',
      });
    },
    onError: () => {
      toast({
        variant: 'destructive',
        title: 'Something went wrong',
      });
    },
  });

  const handleSubmit = () => {
    const requestObject: ITaskGenerateFormatsRequest = {
      task_name: taskName,
      amount,
      dimension,
      gen_type,
      image_layers: images.map((image) => image.imageSrc),
      template_id,
      text_layers: texts,
    };

    mutate(requestObject);
  };

  const isSubmitButtonDisabled = useMemo(() => isPending || rowData.images.length === 0, [isPending, rowData]);

  return (
    <div className="flex justify-center">
      <Button
        variant={'default'}
        className="p-1 gap-1 bg-yellow-200 rounded-md text-stone-950 font-semibold disabled:bg-stone-200 hover:bg-yellow-200/70 h-min"
        disabled={isSubmitButtonDisabled}
        onClick={handleSubmit}
      >
        {isPending && <Loader className="h-3 w-3 text-stone-950 animate-spin" />}
        Generate
      </Button>
    </div>
  );
};
