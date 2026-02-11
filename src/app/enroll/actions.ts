'use server';

import { z } from 'zod';
import { registrationFormSchema } from '@/lib/schema';

type RegistrationFormInputs = z.infer<typeof registrationFormSchema>;

export async function registerStudent(data: RegistrationFormInputs) {
  const result = registrationFormSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      message: 'Invalid data provided.',
      errors: result.error.flatten().fieldErrors,
    };
  }

  // Here you would typically save the student registration to Firestore.
  console.log('New student registration:');
  console.log(result.data);

  // In a real application with Firebase, you would do something like:
  // import { firestore } from '@/lib/firebase';
  // await firestore.collection('registrations').add({
  //   ...result.data,
  //   status: 'pending',
  //   registeredAt: new Date(),
  // });

  return {
    success: true,
    message: 'Registration submitted successfully!',
  };
}
