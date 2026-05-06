import { cn } from '@/lib/utils'

interface Step {
  number: number
  title: string
  body: string
}

interface CaseStudyTimelineProps {
  steps: Step[]
  className?: string
}

export default function CaseStudyTimeline({ steps, className }: CaseStudyTimelineProps) {
  return (
    <ol className={cn('flex flex-col gap-0', className)} aria-label="Project timeline">
      {steps.map((step, idx) => (
        <li key={step.number} className="flex gap-6">
          {/* Line + dot */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-pill bg-brand-primary text-text-inverse flex items-center justify-center font-display font-bold text-sm shrink-0">
              {step.number}
            </div>
            {idx < steps.length - 1 && (
              <div className="w-px flex-1 my-1" style={{ backgroundColor: 'var(--color-border-subtle)' }} />
            )}
          </div>
          {/* Content */}
          <div className="pb-10 pt-1">
            <h3 className="font-display font-semibold text-text-strong mb-1">{step.title}</h3>
            <p className="text-sm text-text-muted leading-relaxed">{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
