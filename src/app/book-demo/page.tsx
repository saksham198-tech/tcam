'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { demoBookingFormSchema } from '@/lib/schema';
import { bookDemoSession } from './actions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { courses } from '@/lib/content';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import emailjs from '@emailjs/browser';

type DemoBookingFormValues = z.infer<typeof demoBookingFormSchema>;

export default function BookDemoPage() {
  const { toast } = useToast();

  const form = useForm<DemoBookingFormValues>({
    resolver: zodResolver(demoBookingFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      instrument: '',
      preferredDate: undefined,
    },
  });

  const uniqueInstruments = [...new Set(courses.map((course) => course.instrument))];

  async function onSubmit(data: DemoBookingFormValues) {
    const result = await bookDemoSession(data);
    
    if (!result.success) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: result.message,
      });
      return;
    }

    try {
      // Send Email Notification via EmailJS
      const emailResult = await emailjs.send(
        'service_757bimb',
        'template_56q2mds',
        {
          fullName: data.name,
          name: data.name,
          from_name: data.name,
          email: data.email,
          phone: data.phone,
          course: data.instrument, // Maps to the "Course" placeholder in the template
          batchTime: format(data.preferredDate, 'PPP'), // Maps to the "Batch Time" placeholder
          batch_time: format(data.preferredDate, 'PPP'),
          preferred_batch: format(data.preferredDate, 'PPP'),
          to_email: 'thechromatica@gmail.com',
        },
        '8qvpeVNd3ZNTqn3Kl'
      );

      if (emailResult.status === 200) {
        toast({
          title: 'Demo Session Booked!',
          description: "We've scheduled your free demo. A confirmation email has been sent.",
        });
        form.reset();
      } else {
        throw new Error('Email delivery failed');
      }
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      toast({
        variant: 'destructive',
        title: 'Notification Delayed',
        description: 'Your booking was recorded, but we had trouble sending the notification email. We will contact you soon!',
      });
      form.reset();
    }
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
              Book a Free Demo
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Experience the magic of music firsthand. Schedule a complimentary demo session with one of our expert instructors.
            </p>
          </div>

          <Card className="shadow-xl border-primary/10">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Demo Session Scheduler</CardTitle>
              <CardDescription>
                Provide your details and select a date that works best for you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your mobile number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="instrument"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Instrument of Interest</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select instrument" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {uniqueInstruments.map((instrument) => (
                                <SelectItem key={instrument} value={instrument}>
                                  {instrument}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="preferredDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Preferred Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={'outline'}
                                className={cn(
                                  'w-full pl-3 text-left font-normal',
                                  !field.value && 'text-muted-foreground'
                                )}
                              >
                                {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="center" side="bottom">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => date < new Date() || date < new Date('1900-01-01')}
                              initialFocus
                              className="rounded-md border"
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full text-lg h-12" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? 'Booking...' : 'Book Demo Session'}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
