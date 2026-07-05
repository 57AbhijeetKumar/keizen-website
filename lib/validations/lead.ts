import { z } from "zod";
import { LEAD_SOURCES, type LeadSource } from "@/lib/cms/types";

export const leadSourceSchema = z.enum(LEAD_SOURCES);
export type { LeadSource };

// Fields the visitor actually fills in. Used for client-side (useForm) validation.
export const leadContactFieldsSchema = z.object({
  name: z
    .string()
    .check(
      z.minLength(2, { error: "Please enter your full name" }),
      z.maxLength(80, { error: "Name is too long" }),
      z.regex(/^[a-zA-Z\s'.,-]+$/, { error: "Name should only contain letters" })
    ),

  email: z.email({ error: "Enter a valid email address (e.g. name@company.com)" }),

  phone: z
    .string()
    .check(
      z.minLength(10, { error: "Enter your 10-digit mobile number" }),
      z.maxLength(10, { error: "Mobile number cannot exceed 10 digits" }),
      z.regex(/^[6-9]\d{9}$/, { error: "Must start with 6, 7, 8, or 9 — enter a valid Indian mobile number" })
    ),

  message: z
    .string()
    .check(
      z.minLength(10, { error: "Please write at least 10 characters so we can help you better" }),
      z.maxLength(1000, { error: "Message is too long — please keep it under 1000 characters" })
    ),

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
  email: z.email({ error: "Enter a valid email address (e.g. name@company.com)" }),
});

export type NewsletterFormValues = z.infer<typeof newsletterFormSchema>;
