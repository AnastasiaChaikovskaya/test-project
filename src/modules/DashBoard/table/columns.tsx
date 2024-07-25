import { AppTableHeader } from '@/components/common/DataTable';
import { Text } from '@/components/typography';
import { ITask } from '@/types/task';
import { ColumnDef } from '@tanstack/react-table';
import { Hash, Tag } from 'lucide-react';

export const taskColumns: ColumnDef<ITask>[] = [
  {
    accessorKey: 'id',
    header: () => <AppTableHeader icon={<Hash className="w-4 h-4 shrink-0 text-stone-700" />} />,
  },
  {
    accessorKey: 'taskName',
    header: () => <AppTableHeader title="Task Name" icon={<Tag className="w-4 h-4 shrink-0 text-stone-700" />} />,
    cell: ({ row }) => <Text>{row.original.taskName}</Text>,
  },
];
