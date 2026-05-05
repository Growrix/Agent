const milestones = [
  "Site assessment and shade analysis",
  "System design and permitting",
  "Installation and safety validation",
  "Activation and post-install support",
];

type CaseStudyTimelineProps = {
  heading: string;
};

export const CaseStudyTimeline = ({ heading }: CaseStudyTimelineProps) => {
  return (
    <section className="page-shell py-8 md:py-10">
      <h2 className="heading-display text-3xl md:text-4xl">{heading}</h2>
      <ol className="mt-6 space-y-3">
        {milestones.map((item, index) => (
          <li className="panel flex items-center gap-3 p-4" key={item}>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-900 text-sm text-white">
              {index + 1}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    </section>
  );
};
