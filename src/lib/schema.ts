import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

export const registrationFormSchema = z.object({
  fullName: z.string().min(2, {
    message: 'Full name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phone: z.string().min(10, {
    message: 'Please enter a valid phone number.',
  }),
  course: z.string({
    required_error: 'Please select a course.',
  }),
  batchTime: z.string({
    required_error: 'Please select a preferred batch time.',
  }),
});

export const demoBookingFormSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    phone: z.string().min(10, {
      message: 'Please enter a valid phone number.',
    }),
    instrument: z.string({ required_error: 'Please select an instrument.' }),
    preferredDate: z.date({
      required_error: 'A date is required.',
    }),
});
