import { LeadForm } from "@/components/forms/lead-form";

/** Used on the Contact page and the site-wide "Contact Now" dialog. */
export function ContactForm() {
  return (
    <LeadForm
      source="contact-page"
      submitLabel="Send message"
      successTitle="Message sent"
      successDescription="Thanks for reaching out — our team will get back to you within one business day."
    />
  );
}
