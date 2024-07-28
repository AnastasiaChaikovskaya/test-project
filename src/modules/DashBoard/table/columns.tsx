import { BadgeComponent } from '@/components/common/BadgeComponent';
import { AppTableHeader } from '@/components/common/DataTable';
import { APP_ROUTS } from '@/constants/routes';
import { ITask } from '@/types/task';
import { ColumnDef } from '@tanstack/react-table';
import {
  CircleChevronDown,
  Hash,
  Image,
  Images,
  List,
  MousePointer,
  NotebookTabs,
  PencilRuler,
  Tag,
  Type,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

export const taskColumns: ColumnDef<ITask>[] = [
  {
    accessorKey: 'id',
    header: () => <AppTableHeader icon={<Hash className="w-4 h-4 shrink-0 text-stone-700" />} />,
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: 'taskName',
    header: () => <AppTableHeader title="Task Name" icon={<Tag className="w-4 h-4 shrink-0 text-stone-700" />} />,
    cell: ({ row }) => (
      <NavLink
        className="hover:underline underline-offset-4 hover:text-blue-800 transition-colors"
        to={APP_ROUTS.App.Dashboard.GenerateRecourses.makePath(row.original.id)}
      >
        {row.original.taskName}
      </NavLink>
    ),
  },
  {
    accessorKey: 'dimension',
    header: () => (
      <AppTableHeader title="Dimension" icon={<PencilRuler className="w-4 h-4 shrink-0 text-stone-700" />} />
    ),
    cell: ({ row }) => <BadgeComponent badgeLabel={row.original.dimension} />,
  },
  {
    accessorKey: 'template_id',
    header: () => <AppTableHeader title="Template ID" icon={<List className="w-4 h-4 shrink-0 text-stone-700" />} />,
    cell: ({ row }) => <BadgeComponent badgeLabel={row.original.template_id} />,
  },
  {
    accessorKey: 'images',
    header: () => <AppTableHeader title="Images" icon={<Image className="w-4 h-4 shrink-0 text-stone-700" />} />,
  },
  {
    accessorKey: 'texts',
    header: () => <AppTableHeader title="Text" icon={<Type className="w-4 h-4 shrink-0 text-stone-700" />} />,
  },
  {
    accessorKey: 'amount',
    header: () => <AppTableHeader title="Amount" icon={<NotebookTabs className="w-4 h-4 shrink-0 text-stone-700" />} />,
  },
  {
    accessorKey: 'gen_type',
    header: () => (
      <AppTableHeader title="Gen Type" icon={<CircleChevronDown className="w-4 h-4 shrink-0 text-stone-700" />} />
    ),
    cell: ({ row }) => <BadgeComponent badgeLabel={row.original.gen_type} />,
  },
  {
    accessorKey: 'generate_task',
    header: () => (
      <AppTableHeader title="Gen task" icon={<MousePointer className="w-4 h-4 shrink-0 text-stone-700" />} />
    ),
    cell: () => <p>generate</p>,
  },
  {
    accessorKey: 'result_ads',
    header: () => <AppTableHeader title="Result ads" icon={<Images className="w-4 h-4 shrink-0 text-stone-700" />} />,
    cell: () => <p>result</p>,
  },
];
