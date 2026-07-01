"use server";

import {
  leadFormSchema,
  newsletterFormSchema,
  type LeadFormValues,
  type NewsletterFormValues,
} from "@/lib/validations/lead";

export interface SubmitLeadResult {
  success: boolean;
  fieldErrors?: Partial<Record<keyof LeadFormValues, string>>;
  formError?: string;
}

/**
 * Server Action backing every lead form (contact, get-quote, brochure-gate).
 *
 * Delivers each lead to a Google Sheet via an Apps Script Web App webhook
 * (see docs/google-sheet-leads-setup.md) — no Sheets API credentials needed,
 * just a POST to the deployed script URL. Falls back to a server log only if
 * the webhook URL isn't configured yet, so local dev doesn't hard-fail.
 */
export async function submitLeadAction(
  values: LeadFormValues
): Promise<SubmitLeadResult> {
  const parsed = leadFormSchema.safeParse(values);

  if (!parsed.success) {
    const fieldErrors: Partial<Record<keyof LeadFormValues, string>> = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as keyof LeadFormValues | undefined;
      if (field && !fieldErrors[field]) fieldErrors[field] = issue.message;
    }
    return { success: false, fieldErrors };
  }

  if (parsed.data.company) {
    // Honeypot tripped — report success to the bot, do nothing else.
    return { success: true };
  }

  const { name, email, phone, message, source, productSlug } = parsed.data;
  const lead = { name, email, phone, message, source, productSlug };

  const webhookUrl = process.env.LEADS_SHEET_WEBHOOK_URL;

  if (!webhookUrl) {
    console.info("[lead:submitted] (LEADS_SHEET_WEBHOOK_URL not set)", lead);
    return { success: true };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });

    if (!response.ok) {
      throw new Error(`Sheet webhook responded with ${response.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error("[lead:submit-failed]", error);
    return {
      success: false,
      formError: "Something went wrong sending your message. Please try WhatsApp or call us directly.",
    };
  }
}

export interface SubmitNewsletterResult {
  success: boolean;
  fieldError?: string;
}

/** Same stub-and-TODO pattern as submitLeadAction — see note above. */
export async function submitNewsletterAction(
  values: NewsletterFormValues
): Promise<SubmitNewsletterResult> {
  const parsed = newsletterFormSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, fieldError: parsed.error.issues[0]?.message };
  }

  try {
    console.info("[newsletter:subscribed]", parsed.data);
    return { success: true };
  } catch (error) {
    console.error("[newsletter:subscribe-failed]", error);
    return { success: false, fieldError: "Something went wrong. Please try again." };
  }
}
