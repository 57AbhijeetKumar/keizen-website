import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  /** Pre-filled message opened in WhatsApp — improves lead quality vs. a blank chat. */
  message?: string;
}

function toWhatsAppHref(phoneNumber: string, message?: string) {
  const digits = phoneNumber.replace(/[^\d]/g, "");
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${digits}${text}`;
}

/** Site-wide floating CTA. Server component — no client JS needed for a plain link. */
export function WhatsAppButton({
  phoneNumber,
  message = "Hi, I'd like to enquire about your laser marking systems.",
}: WhatsAppButtonProps) {
  return (
    <a
      href={toWhatsAppHref(phoneNumber, message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-primary-foreground shadow-glow-accent transition-premium hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
