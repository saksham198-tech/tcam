'use server';

import { z } from 'zod';
import { demoBookingFormSchema } from '@/lib/schema';

type DemoBookingFormInputs = z.infer<typeof demoBookingFormSchema>;

export async function bookDemoSession(data: DemoBookingFormInputs) {
  const result = demoBookingFormSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      message: 'Invalid data provided.',
      errors: result.error.flatten().fieldErrors,
    };
  }

  // Here you would typically save the booking to Firestore and check for availability.
  console.log('New demo session booking:');
  console.log({
    ...result.data,
    preferredDate: result.data.preferredDate.toISOString(),
  });

  // In a real application with Firebase, you would do something like:
  // import { firestore } from '@/lib/firebase';
  // await firestore.collection('demoBookings').add({
  //   ...result.data,
  //   status: 'confirmed',
  //   bookedAt: new Date(),
  // });

  return {
    success: true,
    message: 'Demo session booked successfully!',
  };
}
