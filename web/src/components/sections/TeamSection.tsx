const team = [
  { name: "Alex Rivera", role: "Lead Inspector" },
  { name: "Mina Patel", role: "Project Coordinator" },
  { name: "Jordan Lee", role: "Installation Supervisor" }
];

export function TeamSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-semibold text-foreground">Meet The Team</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {team.map((member) => (
          <article key={member.name} className="rounded-2xl border border-theme bg-surface-raised p-5">
            <div className="h-40 rounded-xl bg-[url('https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg')] bg-cover bg-center" aria-hidden="true" />
            <h3 className="mt-4 text-xl font-semibold text-foreground">{member.name}</h3>
            <p className="text-sm text-theme-secondary">{member.role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
