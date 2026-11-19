import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(200),
  organization: z.string().trim().max(120).optional(),
  message: z.string().trim().min(20).max(2000),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
