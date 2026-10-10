/**
 * Section heading shared by both case-study templates.
 *
 * The software and security templates otherwise differ on purpose, but this
 * heading has to read identically across them for /projects and /security to
 * feel like one site. It lived as two near-identical local copies that had
 * already started to diverge.
 */
export function CaseSection({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
        {Icon && <Icon className="h-6 w-6 shrink-0 text-accent" />}
        {title}
      </h2>
      {children}
    </section>
  );
}
