'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { registrationFormSchema } from '@/lib/schema';
import { registerStudent } from './actions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { courses } from '@/lib/content';
import emailjs from '@emailjs/browser';

type RegistrationFormValues = z.infer<typeof registrationFormSchema>;

export default function EnrollPage() {
  const { toast } = useToast();

  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      course: '',
      batchTime: '',
    },
  });

  async function onSubmit(data: RegistrationFormValues) {
    const result = await registerStudent(data);
    
    if (!result.success) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: result.message,
      });
      return;
    }

    try {
      const emailResult = await emailjs.send(
        'service_757bimb',
        'template_56q2mds',
        {
          fullName: data.fullName,
          name: data.fullName,
          from_name: data.fullName,
          email: data.email,
          phone: data.phone,
          course: data.course,
          batchTime: data.batchTime,
          batch_time: data.batchTime,
          preferred_batch: data.batchTime,
          to_email: 'thechromatica@gmail.com',
        },
        '8qvpeVNd3ZNTqn3Kl'
      );

      if (emailResult.status === 200) {
        toast({
          title: 'Registration Successful!',
          description: "Welcome to TCAM! We've received your details and an email notification has been sent.",
        });
        form.reset();
      } else {
        throw new Error('Email delivery failed');
      }
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      toast({
        variant: 'destructive',
        title: 'Email Notification Delayed',
        description: 'Your registration was recorded, but we had trouble sending the confirmation email. We will contact you soon!',
      });
      form.reset();
    }
  }

  return (
    <div className="py-16 sm:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
              Enroll Now
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Begin your musical journey with us. Fill out the form below to register for a course at TCAM.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Registration Form</CardTitle>
              <CardDescription>
                Once submitted, our team will review your application and contact you with fee details and next steps.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="fullName"
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
                          <Input placeholder="john.doe@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
                    name="course"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Instrument / Course</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a course" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {courses.map((course) => (
                              <SelectItem key={course.id} value={course.title}>
                                {course.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="batchTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Batch / Time</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a time slot" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Weekdays Morning">Weekdays Morning</SelectItem>
                            <SelectItem value="Weekdays Evening">Weekdays Evening</SelectItem>
                            <SelectItem value="Weekends">Weekends</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? 'Submitting...' : 'Submit Registration'}
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
