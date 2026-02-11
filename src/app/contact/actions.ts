'use server';

import { z } from 'zod';
import { contactFormSchema } from '@/lib/schema';

type ContactFormInputs = z.infer<typeof contactFormSchema>;

export async function sendContactMessage(data: ContactFormInputs) {
  const result = contactFormSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      message: 'Invalid data provided.',
      errors: result.error.flatten().fieldErrors,
    };
  }

  // Here you would typically send an email or save to a database.
  // For this example, we'll just log it and simulate a success response.
  console.log('New contact message received:');
  console.log(result.data);

  // In a real application with Firebase, you would do something like:
  // import { firestore } from '@/lib/firebase';
  // await firestore.collection('contactMessages').add({
  //   ...result.data,
  //   createdAt: new Date(),
  // });

  return {
    success: true,
    message: 'Message sent successfully!',
  };
}
