'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { contactFormSchema } from '@/lib/schema';
import { sendContactMessage } from './actions';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const mapImage = PlaceHolderImages.find(img => img.id === 'contact-map');

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(data: ContactFormValues) {
    const result = await sendContactMessage(data);
    if (result.success) {
      toast({
        title: 'Message Sent!',
        description: "Thank you for contacting us. We'll get back to you shortly.",
      });
      form.reset();
    } else {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: result.message,
      });
    }
  }

  return (
    <div className="">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
            Get In Touch
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We&apos;re here to answer your questions. Reach out to us and we&apos;ll respond as soon as we can.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 mt-1 text-primary" />
                  <div>
                    <span className="font-semibold text-foreground">Address</span>
                    <p>123 Music Lane, Harmony City, 12345</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 mt-1 text-primary" />
                  <div>
                    <span className="font-semibold text-foreground">Phone</span>
                    <p>(123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 mt-1 text-primary" />
                  <div>
                    <span className="font-semibold text-foreground">Email</span>
                    <p>contact@tcam.music</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Find Us Here</CardTitle>
              </CardHeader>
              <CardContent>
                {mapImage && (
                  <div className="aspect-[16/9] w-full overflow-hidden rounded-lg">
                    <Image
                      src={mapImage.imageUrl}
                      alt={mapImage.description}
                      width={1200}
                      height={400}
                      className="w-full h-full object-cover"
                      data-ai-hint={mapImage.imageHint}
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <Card className="p-6 sm:p-8">
            <h2 className="text-2xl font-bold font-headline mb-6">Send us a Message</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                        <Input placeholder="john.doe@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us how we can help..." className="min-h-[150px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
}
