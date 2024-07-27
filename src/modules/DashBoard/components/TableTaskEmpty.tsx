import { Text } from '@/components/typography';
import { Button } from '@/components/ui/button';
import { useModal } from '@/hooks/useModal';
import { Logs, Plus } from 'lucide-react';

export const TableTaskEmpty = () => {
  const { openModal } = useModal('create-task');
  return (
    <div className="flex flex-col gap-4 items-center py-12">
      <Logs className="h-14 w-14 text-stone-400" />
      <div className="flex flex-col items-center gap-2">
        <Text variant={'size-16'} type={'body-500'} className="text-stone-400">
          You don't have any tasks at the moment. Click <span className="font-semibold">"Add New Task"</span> below to
          add one.
        </Text>
        <Button variant={'ghost'} className="gap-2 text-stone-400 p-0 text-base" onClick={openModal}>
          <Plus className="w-5 h-5 shrink-0" /> Add New Task
        </Button>
      </div>
    </div>
  );
};
