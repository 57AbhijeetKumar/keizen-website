import { z } from "zod";
import { LEAD_SOURCES, type LeadSource } from "@/lib/cms/types";

export const leadSourceSchema = z.enum(LEAD_SOURCES);
export type { LeadSource };

// Fields the visitor actually fills in. Used for client-side (useForm) validation.
export const leadContactFieldsSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.email("Enter a valid email address"),
  phone: z
    .string()
    .min(7, "Enter a valid phone number")
    .max(20, "Enter a valid phone number"),
  message: z.string().min(10, "Tell us a little more (at least 10 characters)"),
  // Honeypot field: real users never fill this in (it's visually hidden); bots that
  // auto-fill every input will. Deliberately no `.max(0)` here — a client-side
  // validation error would block submission and tip the bot off (or worse, block
  // a real user if a password manager ever autofills it). The check instead lives
  // server-side in submitLeadAction, which silently reports success either way.
  company: z.string().optional(),
});

export type LeadContactFields = z.infer<typeof leadContactFieldsSchema>;

// Full payload the Server Action receives: visitor fields + caller-supplied context.
export const leadFormSchema = leadContactFieldsSchema.extend({
  source: leadSourceSchema,
  productSlug: z.string().optional(),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;

export const newsletterFormSchema = z.object({
  email: z.email("Enter a valid email address"),
});

export type NewsletterFormValues = z.infer<typeof newsletterFormSchema>;
