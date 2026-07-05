"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormField } from "@/components/forms/form-field";
import { submitLeadAction } from "@/lib/leads/submit-lead";
import {
  leadContactFieldsSchema,
  type LeadContactFields,
  type LeadSource,
} from "@/lib/validations/lead";

interface LeadFormProps {
  source: LeadSource;
  productSlug?: string;
  submitLabel?: string;
  successTitle?: string;
  successDescription?: string;
}

const defaultValues: LeadContactFields = {
  name: "",
  email: "",
  phone: "",
  message: "",
  company: "",
};

/**
 * Shared implementation behind EnquiryForm / ContactForm — one validated,
 * accessible form component instead of duplicating markup per page, per the
 * SRS finding that the old site had two inconsistent contact forms.
 */
export function LeadForm({
  source,
  productSlug,
  submitLabel = "Send message",
  successTitle = "Message sent",
  successDescription = "Thanks — our team will get back to you within one business day.",
}: LeadFormProps) {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadContactFields>({
    resolver: zodResolver(leadContactFieldsSchema),
    defaultValues,
  });

  async function onSubmit(values: LeadContactFields) {
    const result = await submitLeadAction({ ...values, source, productSlug });

    if (result.success) {
      setSuccess(true);
      reset(defaultValues);
      return;
    }

    if (result.fieldErrors) {
      for (const [field, message] of Object.entries(result.fieldErrors)) {
        if (message && field in defaultValues) {
          setError(field as keyof LeadContactFields, { message });
        }
      }
    }
    if (result.formError) {
      setError("root", { message: result.formError });
    }
  }

  if (success) {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-2xl border border-accent/30 bg-accent/5 p-8 text-center"
      >
        <CheckCircle2 className="h-8 w-8 text-accent" aria-hidden="true" />
        <p className="font-heading text-lg font-semibold">{successTitle}</p>
        <p className="text-sm text-muted-foreground">{successDescription}</p>
        <Button variant="outline" onClick={() => setSuccess(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
      <FormField id="name" label="Your name" error={errors.name?.message}>
        <Input
          id="name"
          autoComplete="name"
          placeholder="Rahul Sharma"
          maxLength={80}
          aria-invalid={Boolean(errors.name)}
          {...register("name")}
        />
      </FormField>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField id="email" label="Email address" error={errors.email?.message}>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="name@company.com"
            aria-invalid={Boolean(errors.email)}
            {...register("email")}
          />
        </FormField>
        <FormField
          id="phone"
          label="Phone number"
          error={errors.phone?.message}
          hint="10-digit mobile number"
        >
          <Input
            id="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            placeholder="9876543210"
            maxLength={10}
            aria-invalid={Boolean(errors.phone)}
            onInput={(e) => {
              // Strip every non-digit and cap at 10 characters as the user types
              e.currentTarget.value = e.currentTarget.value
                .replace(/\D/g, "")
                .slice(0, 10);
            }}
            {...register("phone")}
          />
        </FormField>
      </div>

      <FormField id="message" label="Message" error={errors.message?.message}>
        <Textarea
          id="message"
          rows={5}
          placeholder="Tell us about your application — material, part size, production volume, and any specific requirements."
          maxLength={1000}
          aria-invalid={Boolean(errors.message)}
          {...register("message")}
        />
      </FormField>

      {/* Honeypot — visually hidden, not display:none (bots that respect that are rare,
          but this stays out of the visible tab order without tipping off simpler scrapers). */}
      <div className="absolute h-0 w-0 overflow-hidden opacity-0" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" tabIndex={-1} autoComplete="off" {...register("company")} />
      </div>

      {errors.root?.message ? (
        <p role="alert" className="text-sm text-destructive">
          {errors.root.message}
        </p>
      ) : null}

      <Button type="submit" size="lg" disabled={isSubmitting} className="mt-2">
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          submitLabel
        )}
      </Button>
    </form>
  );
}
