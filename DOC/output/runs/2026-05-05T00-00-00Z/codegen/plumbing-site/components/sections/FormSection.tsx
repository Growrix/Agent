"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";
import { c } from "@/lib/content";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Select from "@/components/ui/Select";
import FormRow from "@/components/sections/FormRow";
import AlertMessage from "@/components/ui/AlertMessage";
import Spinner from "@/components/ui/Spinner";

interface FormSectionProps {
  heading: string;
  ctaLabel?: string;
  variant?: "contact" | "quote";
  className?: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormErrors {
  fullName?: string;
  phone?: string;
  zip?: string;
  details?: string;
}

const SERVICE_OPTIONS = [
  { value: "drain-cleaning", label: "Drain Cleaning" },
  { value: "leak-repair", label: "Leak Repair" },
  { value: "water-heater", label: "Water Heater" },
  { value: "toilet-repair", label: "Toilet Repair" },
  { value: "faucet-fixture", label: "Faucet & Fixture" },
  { value: "sewer-line", label: "Sewer Line" },
  { value: "other", label: "Other / Not sure" },
];

export default function FormSection({
  heading,
  ctaLabel,
  variant = "quote",
  className,
}: FormSectionProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [values, setValues] = useState({
    fullName: "",
    phone: "",
    zip: "",
    service: "",
    details: "",
  });

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!values.fullName.trim()) errs.fullName = c("validation.full_name.required");
    if (!values.phone.trim()) {
      errs.phone = c("validation.phone.required");
    } else if (!/^[\d\s\-().+]{7,}$/.test(values.phone)) {
      errs.phone = c("validation.phone.format");
    }
    if (!values.zip.trim()) errs.zip = c("validation.zip.required");
    if (!values.details.trim()) errs.details = c("validation.details.required");
    return errs;
  }

  function handleChange(field: keyof typeof values, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus("submitting");
    // Simulate async submission — replace with real API call
    await new Promise((resolve) => setTimeout(resolve, 800));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <section className={cn("py-[--space-section-y-mobile]", className)} aria-label={heading}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <AlertMessage
            variant="success"
            message="Thanks! We received your request and will follow up during business hours."
          />
        </div>
      </section>
    );
  }

  return (
    <section className={cn("py-[--space-section-y-mobile] md:py-[--space-section-y-tablet]", className)} aria-label={heading}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-[--color-text] font-[--font-display] mb-6">{heading}</h2>
        <form
          noValidate
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 p-6 bg-[--color-surface] rounded-[--radius-card] border border-[--color-border] shadow-[--shadow-2]"
        >
          <FormRow columns={2}>
            <Input
              label="Full name"
              type="text"
              autoComplete="name"
              required
              value={values.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              error={errors.fullName}
            />
            <Input
              label="Phone number"
              type="tel"
              autoComplete="tel"
              required
              value={values.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              error={errors.phone}
            />
          </FormRow>
          <FormRow columns={2}>
            <Input
              label="ZIP code"
              type="text"
              autoComplete="postal-code"
              required
              value={values.zip}
              onChange={(e) => handleChange("zip", e.target.value)}
              error={errors.zip}
            />
            {variant === "quote" && (
              <Select
                label="Service needed"
                options={SERVICE_OPTIONS}
                placeholder="Select a service"
                value={values.service}
                onChange={(e) => handleChange("service", e.target.value)}
              />
            )}
          </FormRow>
          <Textarea
            label="Describe the issue"
            required
            rows={4}
            placeholder="A short description helps us plan the right visit."
            value={values.details}
            onChange={(e) => handleChange("details", e.target.value)}
            error={errors.details}
          />
          <p className="text-xs text-[--color-text-muted]">{c("trust.privacy")}</p>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[--color-primary] text-[--color-primary-foreground] rounded-[--radius-button] font-semibold hover:bg-[--color-primary-hover] motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-focus-ring] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? (
              <>
                <Spinner size="sm" label="Sending…" />
                Sending…
              </>
            ) : (
              ctaLabel ?? "Send request"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
