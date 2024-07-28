import { FC } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { GenerateImagesSchema, TGenerateImageForm } from '@/schema/GenerateImagesSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { IMAGE_ASPECT_RATIO } from '@/constants/task-constants';
import { Input } from '@/components/ui/input';
import { IMAGE_FLOW, IMAGE_STYLES } from '@/constants/image-constans';
import { Button } from '@/components/ui/button';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/components/ui/use-toast';
import { useTasks } from '@/store';
import { TASK_QUERY_KEY } from '@/constants/query-key';
import { generateImages } from '@/servises';
import { ITaskGenerateImagesRequest } from '@/types/task';
import { useParams } from 'react-router-dom';
import { Loader } from 'lucide-react';

interface IGenerateImagesFormProps {
  formName: string;
}

export const GenerateImagesForm: FC<IGenerateImagesFormProps> = ({ formName }) => {
  const { toast } = useToast();
  const { tasks, setTasks } = useTasks((state) => state);
  const { taskId } = useParams();

  const form = useForm<TGenerateImageForm>({
    mode: 'onChange',
    resolver: zodResolver(GenerateImagesSchema),
    defaultValues: {
      dimension: '1x1',
      flow: 'mj_model',
      image_ref_1: '',
      manual_prompts: '',
      gen_per_ref: 1,
      styles: 'Anime style',
    },
  });

  const { isPending, mutate } = useMutation({
    mutationKey: [TASK_QUERY_KEY.GENERATE_IMAGES],
    mutationFn: generateImages,
    onSuccess: () => {
      const newTasks = tasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            images: [...task.images, { label: formName, imageSrc: form.getValues('image_ref_1') }],
          };
        }

        return task;
      });

      setTasks(newTasks);
      toast({
        title: 'Your image ref has been generated',
      });
    },
    onError: () => {
      toast({
        variant: 'destructive',
        title: 'Something went wrong',
      });
    },
  });

  const handleSubmitFrom = (formData: TGenerateImageForm) => {
    const { dimension, flow, image_ref_1, manual_prompts, styles, gen_per_ref } = formData;
    const requestObject: ITaskGenerateImagesRequest = {
      dimension,
      flow,
      gen_per_ref,
      images: [image_ref_1],
      manual_prompts: manual_prompts,
      style: styles,
    };

    mutate(requestObject);
  };

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-xl">{formName}</AccordionTrigger>
        <AccordionContent className="px-1">
          <Form {...form}>
            <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(handleSubmitFrom)}>
              <FormField
                name="dimension"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Dimension</FormLabel>
                    <Select>
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
                  </FormItem>
                )}
              />

              <FormField
                name="flow"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Flow</FormLabel>
                    <Select>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={field.value}></SelectValue>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.values(IMAGE_FLOW).map((flow) => (
                          <SelectItem value={flow} key={flow}>
                            {flow}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                name="image_ref_1"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Image 1 ref</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="image link"
                        isError={!!form.formState.errors.image_ref_1}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="manual_prompts"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Manual prompts</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" placeholder="input text here" />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                name="gen_per_ref"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Generation per ref</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        placeholder="input text here"
                        onChange={(event) => field.onChange(Number(event.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="styles"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Styles</FormLabel>
                    <Select>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={field.value}></SelectValue>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.values(IMAGE_STYLES).map((style) => (
                          <SelectItem value={style} key={style}>
                            {style}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <Button className="w-fit text-base mt-2 gap-1" disabled={!form.formState.isValid || isPending}>
                {isPending && <Loader className="h-3 w-3 text-stone-400 animate-spin" />}
                Generate
              </Button>
            </form>
          </Form>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
