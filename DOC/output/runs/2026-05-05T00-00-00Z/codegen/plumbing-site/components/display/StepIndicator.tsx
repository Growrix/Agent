import { cn } from "@/lib/utils";

interface Step {
  title: string;
  body: string;
}

interface StepIndicatorProps {
  steps: Step[];
  className?: string;
}

export default function StepIndicator({ steps, className }: StepIndicatorProps) {
  return (
    <ol className={cn("flex flex-col gap-8", className)}>
      {steps.map((step, index) => (
        <li key={index} className="flex items-start gap-4">
          <span
            aria-hidden="true"
            className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[--color-primary] text-[--color-primary-foreground] text-sm font-bold"
          >
            {index + 1}
          </span>
          <div>
            <p className="font-semibold text-[--color-text]">{step.title}</p>
            <p className="text-sm text-[--color-text-muted] mt-0.5">{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
