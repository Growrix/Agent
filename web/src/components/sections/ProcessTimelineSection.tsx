const steps = [
  { title: "Inspect", description: "On-site inspection with photo documentation and roof condition notes." },
  { title: "Scope", description: "Clear scope options with material and timeline tradeoffs." },
  { title: "Build", description: "Coordinated install or repair with daily progress communication." },
  { title: "Protect", description: "Warranty handoff, maintenance guidance, and support follow-up." }
];

export function ProcessTimelineSection() {
  return (
    <section className="bg-surface-raised py-16">
      <div className="mx-auto w-full max-w-6xl px-4">
        <h2 className="text-3xl font-semibold text-foreground">How The Process Works</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-theme bg-background p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary-600">Step {index + 1}</p>
              <h3 className="mt-2 text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-theme-secondary">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
