import type { ReactNode } from "react";
import { Label } from "@/components/ui/label";

interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
  hint?: string;
}

/**
 * Thin Label + control + error-message wrapper. This shadcn install has no
 * `form` registry component (it ships `@base-ui/react` primitives instead of
 * the Radix-based `Form`), so we compose Label/Input/Textarea directly with
 * React Hook Form's `register()` rather than a generated Form/FormField pair.
 */
export function FormField({ id, label, error, children, hint }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {hint && !error ? (
        <p className="text-xs text-muted-foreground">{hint}</p>
      ) : null}
      {error ? (
        <p role="alert" className="text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
