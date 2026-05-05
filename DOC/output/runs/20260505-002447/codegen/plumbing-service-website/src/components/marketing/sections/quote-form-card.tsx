"use client";

import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/marketing/shared/button";
import { InputField } from "@/components/marketing/shared/input-field";
import { copy } from "@/lib/content";
import { serviceOptions } from "@/config/site";
import { createLeadSchema } from "@/server/validation/lead";

type QuoteFormCardProps = {
  variant: "quote" | "contact";
};

type SubmitResponse = {
  ok: boolean;
  error?: string;
};

export function QuoteFormCard({ variant }: QuoteFormCardProps) {
  const [serverError, setServerError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();
  const schema = createLeadSchema(variant);

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      service: variant === "quote" ? "" : "General enquiry",
      postcode: "",
      message: "",
      source: variant,
      turnstileToken: "",
    },
  });

  const submitLabel = variant === "quote" ? copy("quote.form.submit") : copy("component.button.submit_quote");

  const onSubmit = form.handleSubmit((values) => {
    setServerError(null);

    startTransition(async () => {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          source: variant,
          service: variant === "contact" ? "General enquiry" : values.service,
        }),
      });

      const payload = (await response.json()) as SubmitResponse;

      if (!response.ok || !payload.ok) {
        setServerError(copy("errors.form.submit"));
        return;
      }

      setSubmitted(true);
      form.reset();
    });
  });

  if (submitted) {
    return (
      <div className="surface-panel rounded-3xl p-6 sm:p-8">
        <p className="font-display text-2xl font-semibold text-success">{copy("quote.form.success_title")}</p>
        <p className="mt-3 text-sm leading-7 text-slate-600">{copy("quote.form.success_body")}</p>
      </div>
    );
  }

  return (
    <form className="surface-panel rounded-3xl p-6 sm:p-8" onSubmit={onSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <InputField error={form.formState.errors.name?.message} label={copy("quote.form.name_label")} name="name">
          <input
            className="focus-ring min-h-12 w-full rounded-2xl border border-line bg-white px-4 text-sm text-foreground"
            id="name"
            {...form.register("name")}
          />
        </InputField>

        <InputField error={form.formState.errors.phone?.message} label={copy("quote.form.phone_label")} name="phone">
          <input
            className="focus-ring min-h-12 w-full rounded-2xl border border-line bg-white px-4 text-sm text-foreground"
            id="phone"
            inputMode="tel"
            {...form.register("phone")}
          />
        </InputField>

        {variant === "quote" ? (
          <InputField error={form.formState.errors.service?.message} label={copy("quote.form.service_label")} name="service">
            <select
              className="focus-ring min-h-12 w-full rounded-2xl border border-line bg-white px-4 text-sm text-foreground"
              id="service"
              {...form.register("service")}
            >
              <option value="">Select a service</option>
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </InputField>
        ) : null}

        {variant === "quote" ? (
          <InputField error={form.formState.errors.postcode?.message} label={copy("quote.form.postcode_label")} name="postcode">
            <input
              className="focus-ring min-h-12 w-full rounded-2xl border border-line bg-white px-4 text-sm text-foreground"
              id="postcode"
              inputMode="numeric"
              {...form.register("postcode")}
            />
          </InputField>
        ) : null}

        <div className="md:col-span-2">
          <InputField error={form.formState.errors.message?.message} label={copy("quote.form.message_label")} name="message">
            <textarea
              className="focus-ring min-h-36 w-full rounded-3xl border border-line bg-white px-4 py-3 text-sm text-foreground"
              id="message"
              {...form.register("message")}
            />
          </InputField>
        </div>
      </div>

      <p className="mt-4 text-sm leading-7 text-slate-500">{copy("trust.privacy")}</p>

      {serverError ? <p className="mt-4 text-sm font-medium text-danger">{serverError}</p> : null}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button disabled={isPending} fullWidth type="submit">
          {isPending ? "Sending..." : submitLabel}
        </Button>
        <Button href="/contact" variant="ghost">
          {copy("component.sticky.contact")}
        </Button>
      </div>
    </form>
  );
}