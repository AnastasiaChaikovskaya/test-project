import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { TCreateTaskForm, createTaskSchema } from '@/schema/CreateTaskSchema';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { IMAGE_ASPECT_RATIO, TASK_GEN_TYPE, TASK_TEMPLATE_ID } from '@/constants/task-constants';
import { Button } from '@/components/ui/button';
import { useTasks } from '@/store';
import { generateId } from '@/helpers';
import { useModal } from '@/hooks/useModal';

export const CreateTaskForm = () => {
  const { closeModal } = useModal('create-task');
  const { addTasks } = useTasks((state) => state);
  const form = useForm<TCreateTaskForm>({
    resolver: zodResolver(createTaskSchema),
    defaultValues: {
      taskName: '',
      dimension: '1x1',
      template_id: '0xdoscyowl50c',
      amount: 1,
      gen_type: 'cyclic_generation',
    },
  });

  const hasErrorsForm = Object.keys(form.formState.errors).length !== 0;

  const handleSubmit = (formData: TCreateTaskForm) => {
    addTasks({ ...formData, isGenerated: false, images: [], texts: [], id: generateId() });
    closeModal();
  };

  return (
    <Form {...form}>
      <form className="flex flex-col gap-3" onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          name="taskName"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Task name</FormLabel>
              <FormControl>
                <Input type="text" {...field} placeholder="Write task name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          name="dimension"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dimension</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={`${field.value}`}></SelectValue>
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.values(IMAGE_ASPECT_RATIO).map((aspect) => (
                    <SelectItem value={aspect} key={aspect}>
                      {aspect}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          name="template_id"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Template ID</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={`${field.value}`}></SelectValue>
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.values(TASK_TEMPLATE_ID).map((id) => (
                    <SelectItem value={id} key={id}>
                      {id}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>

        <FormField
          name="amount"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Task name</FormLabel>
              <FormControl>
                <Input type="number" {...field} placeholder="how many ads" min={1} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>

        <FormField
          name="gen_type"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Generate type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={`${field.value}`}></SelectValue>
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.values(TASK_GEN_TYPE).map((type) => (
                    <SelectItem value={type} key={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <Button disabled={hasErrorsForm} className="w-min">
          Create
        </Button>
      </form>
    </Form>
  );
};
