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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

// Firebase imports
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError, type SecurityRuleContext } from '@/firebase/errors';

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const db = useFirestore();
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
    if (!db) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Database not initialized.',
      });
      return;
    }

    const docData = {
      ...data,
      recipientEmail: 'thechromatica@gmail.com',
      createdAt: serverTimestamp(),
    };

    const collectionRef = collection(db, 'contactMessages');

    // 1. Save to Firestore (Mutation)
    addDoc(collectionRef, docData)
      .catch(async (error) => {
        const permissionError = new FirestorePermissionError({
          path: collectionRef.path,
          operation: 'create',
          requestResourceData: docData,
        } satisfies SecurityRuleContext);
        errorEmitter.emit('permission-error', permissionError);
      });

    // 2. Send via EmailJS
    try {
      await emailjs.send(
        'service_757bimb', // Service ID
        'service_757bimb', // Template ID (As provided)
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_email: 'thechromatica@gmail.com',
        },
        '8qvpeVNd3ZNTqn3Kl' // Public Key
      );

      toast({
        title: 'Message Sent!',
        description: "Thank you for contacting us. Your message has been sent and saved.",
      });
      form.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        variant: 'destructive',
        title: 'Email Notification Failed',
        description: 'Your message was saved to our database, but the email notification failed. We will still review your inquiry!',
      });
      form.reset();
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
                    <p>562/114 ramgarh colony, kanpur road, lucknow 226012</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 mt-1 text-primary" />
                  <div>
                    <span className="font-semibold text-foreground">Phone</span>
                    <p>+91 89601 32690</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 mt-1 text-primary" />
                  <div>
                    <span className="font-semibold text-foreground">Email</span>
                    <p>thechromatica@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle className="font-headline">Find Us Here</CardTitle>
                <Button variant="ghost" size="sm" asChild className="gap-2">
                  <Link href="https://maps.app.goo.gl/x2cQu7QG6sAb4iPt9" target="_blank" rel="noopener noreferrer">
                    Open in Maps <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                {mapImage && (
                  <Link href="https://maps.app.goo.gl/x2cQu7QG6sAb4iPt9" target="_blank" rel="noopener noreferrer" className="block group relative">
                    <div className="aspect-[16/9] w-full overflow-hidden rounded-lg">
                      <Image
                        src={mapImage.imageUrl}
                        alt={mapImage.description}
                        width={1200}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={mapImage.imageHint}
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                         <span className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium shadow-lg flex items-center gap-2">
                           View on Google Maps <ExternalLink className="h-4 w-4" />
                         </span>
                      </div>
                    </div>
                  </Link>
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
                        <Input placeholder="thechromatica@gmail.com" {...field} />
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
