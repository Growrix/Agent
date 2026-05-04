type ContentShellProps = {
  title: string;
  intro: string;
  children?: React.ReactNode;
};

export function ContentShell({ title, intro, children }: ContentShellProps) {
  return (
    <main className="container-shell py-16">
      <h1 className="text-4xl font-bold tracking-tight text-primary">{title}</h1>
      <p className="mt-4 max-w-3xl text-lg text-muted">{intro}</p>
      <div className="mt-8">{children}</div>
    </main>
  );
}
