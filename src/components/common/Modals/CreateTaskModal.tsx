import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useModal } from '@/hooks/useModal';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { TCreateTaskForm, createTaskSchema } from '@/schema/CreateTaskSchema';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { IMAGE_ASPECT_RATIO, TASK_GEN_TYPE, TASK_TEMPLATE_ID } from '@/constants/task-constants';
import { useTasks } from '@/store';
import { generateId } from '@/helpers';

export const CreateTaskModal = () => {
  const { toggleModal, isOpen, closeModal } = useModal('create-task');

  const { addTasks } = useTasks((state) => state);
  const form = useForm<TCreateTaskForm>({
    mode: 'onChange',
    resolver: zodResolver(createTaskSchema),
    defaultValues: {
      taskName: '',
      dimension: '1x1',
      template_id: '0xdoscyowl50c',
      amount: 1,
      gen_type: 'cyclic_generation',
    },
  });

  const handleFormSubmit = (formData: TCreateTaskForm) => {
    console.log(formData);
    addTasks({ ...formData, isGenerated: false, images: [], texts: [], id: generateId() });
    closeModal();
  };

  return (
    <Dialog open={isOpen} onOpenChange={toggleModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create task</DialogTitle>
          <DialogDescription>Use this form to create a new advertising task</DialogDescription>
          <Separator />
        </DialogHeader>
        <Form {...form}>
          <form className="flex flex-col gap-4">
            <FormField
              name="taskName"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Task name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      placeholder="Write task name"
                      isError={!!form.formState.errors.taskName}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
            />
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
            />

            <FormField
              name="amount"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ads amount</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      placeholder="How many ads"
                      onChange={(event) => field.onChange(Number(event.target.value))}
                      isError={!!form.formState.errors.amount}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
            />
          </form>
        </Form>
        <Separator />
        <DialogFooter>
          <Button
            className="w-min"
            type="submit"
            disabled={!form.formState.isValid}
            onClick={form.handleSubmit(handleFormSubmit)}
          >
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
