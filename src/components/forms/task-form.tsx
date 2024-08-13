import { TaskScheme } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { useState } from 'react'
import { Button } from '../ui/button'
import { toast } from 'sonner'
import FillLoading from '../shared/fill-loading'

interface Props {
    title?: string,
    isEdit?: boolean,
    onClose?: () => void,
    handler: (values: z.infer <typeof TaskScheme >) => Promise<void | null>,
}

const TaskForm = ({title = '', handler}: Props) => {
    
    const [isLoading, setIsLoading] = useState(false)


    const form = useForm<z.infer<typeof TaskScheme>>({
        resolver: zodResolver(TaskScheme),
        defaultValues: { title },
      })

    const onSubmit = async (values: z.infer<typeof TaskScheme>) => {
        setIsLoading(true)
        
        const promise = handler(values).finally( () => setIsLoading(false) )

        toast.promise(promise, {
            loading: 'Loading...',
            success:'Success!',
            error:'Something went wrong!'
        })
    }

    return <>
        {isLoading && <FillLoading/>}
        
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                    <FormItem>
                    <FormControl>
                        <Input placeholder="Enter a task" disabled={isLoading} {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <div className='flex justify-end'>
                    <Button type='submit' disabled={isLoading}>Submit</Button>
                </div>
            </form>
        </Form>
    </>
}
export default TaskForm