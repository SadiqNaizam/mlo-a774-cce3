import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z.string().min(1, { message: "Password is required." }),
});

type LoginFormValues = z.infer<typeof formSchema>;

const LoginForm = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: LoginFormValues) => {
    console.log('Form submitted:', values);
    setIsLoading(true);
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
      // In a real app, you would handle success/error states,
      // maybe show a toast notification.
    }, 2000);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-normal text-muted-foreground">Email Address</FormLabel>
              <FormControl>
                <Input 
                  type="email"
                  className="border-0 border-b rounded-none p-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary"
                  disabled={isLoading}
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-normal text-muted-foreground">Password</FormLabel>
                <FormControl>
                  <Input 
                    type="password" 
                    className="border-0 border-b rounded-none p-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary"
                    disabled={isLoading}
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end mt-2">
            <Button variant="link" type="button" className="p-0 h-auto text-sm font-normal text-muted-foreground hover:text-primary focus:text-primary">
              Forgot Password
            </Button>
          </div>
        </div>

        <Button type="submit" disabled={isLoading} className="w-full h-11 rounded-lg text-base font-medium">
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Login
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
