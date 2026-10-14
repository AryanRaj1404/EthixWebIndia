import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2, "Name is too short").max(80),
  email: z.string().email("Enter a valid email"),
  phone: z
    .string()
    .min(7, "Phone is too short")
    .max(20, "Phone is too long")
    .optional()
    .or(z.literal("")),
  company: z.string().max(120).optional().or(z.literal("")),
  service: z.string().max(120).optional().or(z.literal("")),
  message: z.string().min(10, "Message is too short").max(2000),
  website: z.string().optional(), // honeypot spam trap
});

export type LeadInput = z.infer<typeof leadSchema>;