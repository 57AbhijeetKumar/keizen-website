"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { submitNewsletterAction } from "@/lib/leads/submit-lead";
import {
  newsletterFormSchema,
  type NewsletterFormValues,
} from "@/lib/validations/lead";

/** Inline email-capture, e.g. in the footer or alongside the brochure download CTA. */
export function NewsletterForm() {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: { email: "" },
  });

  async function onSubmit(values: NewsletterFormValues) {
    const result = await submitNewsletterAction(values);
    if (result.success) {
      setSuccess(true);
      reset();
      return;
    }
    setError("email", { message: result.fieldError ?? "Something went wrong." });
  }

  if (success) {
    return (
      <p className="flex items-center gap-2 text-sm text-accent">
        <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
        Subscribed — thanks for following along.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-2 sm:flex-row sm:items-start"
    >
      <div className="flex-1">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <Input
          id="newsletter-email"
          type="email"
          placeholder="name@company.com"
          autoComplete="email"
          maxLength={254}
          aria-invalid={Boolean(errors.email)}
          {...register("email")}
        />
        {errors.email ? (
          <p role="alert" className="mt-1 text-xs text-destructive">
            {errors.email.message}
          </p>
        ) : null}
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          "Subscribe"
        )}
      </Button>
    </form>
  );
}
