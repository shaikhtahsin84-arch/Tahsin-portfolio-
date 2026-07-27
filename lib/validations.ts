import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Valid email is required'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
  company: z.string().max(0).optional(), // honeypot — must stay empty
});

export type ContactFormData = z.infer<typeof contactSchema>;
