import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  AlertTriangle,
  BookOpen,
  Download,
  Wrench,
  ExternalLink,
  ArrowRight,
  MapPin,
  Plus,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/motion-wrapper";
import { buttonVariants } from "@/components/ui/button";
import { getSecurityCaseStudies, getContentTypeLabel } from "@/data/projects";
import {
  SECURITY_POSITIONING,
  SECURITY_TOOLING,
  SECURITY_COURSEWORK,
  ADDITIONAL_SECURITY_WORK,
  EXTERNAL_VERIFICATION,
} from "@/data/security";
import { getTagVariant } from "@/lib/tag-variants";

/**
 * Threat models from systems that were actually built — IAM and data-pipeline
 * reasoning applied to shipped cloud work, not lab exercises.
 */
const threatModels = [
  {
    title: "StitchLine Multi-Portal IAM",
    project: "StitchLine",
    slug: "stitchline",
    threats: [
      "Customer credentials used against vendor/admin APIs",
      "Over-broad IAM roles → cross-tenant or cross-portal data access",
      "Unauthorized order / payment-status mutation",
      "Shared staff logins → no audit trail for who changed what",
    ],
    mitigations: [
      "Distinct customer vs vendor portals with separate IAM roles",
      "Least-privilege policies on Lambda, S3, and portal APIs",
      "Role claims enforced at the API boundary (not UI-only)",
      "USD payment-state changes limited to authorized vendor flows",
      "No shared credentials between clients and shop-floor staff",
    ],
  },
  {
    title: "NovaTech RAG & Data Pipeline Integrity",
    project: "NovaTech",
    slug: null as string | null,
    threats: [
      "Poisoned or stale docs in the retrieval corpus → bad operational answers",
      "Prompt injection via indexed content influencing LLM outputs",
      "Service roles reading beyond sales / inventory / production scopes",
      "Unvalidated LLM output driving downstream automation",
    ],
    mitigations: [
      "Scoped retrieval corpora with least-privilege IAM per data domain",
      "CloudFormation IaC for reproducible, reviewable deployments",
      "Structured outputs + validation before operational side effects",
      "Ingestion checks for data freshness and source integrity",
      "Secrets and service credentials via environment / IAM — not in code",
    ],
  },
];

export function SecurityContent() {
  const caseStudies = getSecurityCaseStudies();

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* 1 — Positioning header */}
        <FadeIn>
          <header className="mb-16 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Akshat Patel
            </h1>
            <p className="mt-3 text-xl text-accent md:text-2xl">
              {SECURITY_POSITIONING.headline}
            </p>
            <p className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-base text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 shrink-0" />
                Atlanta, GA · Open to relocate
              </span>
              <span>
                B.S. Computer Science + Business Analytics, Oregon State
                University, 2026
              </span>
            </p>
            <p className="mt-2 text-base text-muted-foreground">
              {SECURITY_POSITIONING.certification}
            </p>
          </header>
        </FadeIn>

        {/* 2 — Case studies */}
        <FadeIn>
          <SectionTitle>Casework</SectionTitle>
          <p className="mb-8 max-w-2xl text-muted-foreground">
            Cloud and infrastructure write-ups: architecture, IAM boundaries,
            and delivery tradeoffs from systems I shipped.
          </p>
        </FadeIn>

        {/* Two-up at tablet width; three-up only once there is room for the
            content-type badge to sit on one line. */}
        <Stagger className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((project) => (
            <StaggerItem key={project.slug}>
              <Link href={`/projects/${project.slug}`} className="block h-full">
                <Card className="flex h-full flex-col">
                  {project.image && (
                    <div className="relative mb-4 h-40 overflow-hidden rounded-lg bg-muted/50">
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover object-top"
                      />
                    </div>
                  )}

                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap gap-1.5">
                      <Badge size="sm" variant="outline">
                        {getContentTypeLabel(project)}
                      </Badge>
                      {project.tags
                        .filter((t) => t === "Academic")
                        .map((tag) => (
                          <Badge key={tag} size="sm" variant={getTagVariant(tag)}>
                            {tag}
                          </Badge>
                        ))}
                    </div>
                    <h3 className="text-lg font-semibold leading-snug text-foreground">
                      {project.title}
                    </h3>
                    {project.context && (
                      <p className="mt-1.5 font-mono text-xs leading-snug text-muted-foreground">
                        {project.context}
                      </p>
                    )}
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center gap-1 text-sm font-medium text-accent">
                    Read the write-up
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        {/* 3 — Tooling, grouped by function */}
        <FadeIn>
          <SectionTitle icon={Wrench}>Tooling</SectionTitle>
          <p className="mb-8 max-w-2xl text-muted-foreground">
            Grouped by function.
          </p>
        </FadeIn>

        <div className="mb-20 space-y-8">
          {SECURITY_TOOLING.map((group) => (
            <FadeIn key={group.name}>
              <div className="grid gap-x-8 gap-y-3 border-t border-border pt-5 md:grid-cols-[minmax(0,15rem)_1fr]">
                <h3 className="text-base font-semibold text-foreground">
                  {group.name}
                </h3>
                <ul className="flex flex-wrap gap-x-2 gap-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md bg-muted px-2.5 py-1 text-sm text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* 4 — Cloud & infrastructure coursework */}
        <FadeIn>
          <SectionTitle icon={BookOpen}>
            Cloud &amp; infrastructure coursework
          </SectionTitle>
          <p className="mb-8 max-w-2xl text-muted-foreground">
            Oregon State University.
          </p>
          <ul className="mb-12 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {SECURITY_COURSEWORK.map((course) => (
              <li
                key={course}
                className="flex gap-3 border-b border-border pb-3"
              >
                <span className="text-foreground">{course}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        {/* Additional cloud work — short entries, not full case studies */}
        <FadeIn>
          <SectionTitle icon={Plus}>Additional cloud work</SectionTitle>
          <div className="mb-20 space-y-6">
            {ADDITIONAL_SECURITY_WORK.map((work) => (
              <div
                key={work.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="text-base font-semibold text-foreground">
                  {work.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {work.detail}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Applied cloud security in shipped systems */}
        <FadeIn>
          <SectionTitle icon={AlertTriangle}>
            Applied security in systems I built
          </SectionTitle>
          <p className="mb-8 max-w-2xl text-muted-foreground">
            Attack surface and mitigations for cloud systems I built — IAM
            boundaries and pipeline integrity, not lab environments.
          </p>
        </FadeIn>

        <div className="mb-20 grid gap-6 lg:grid-cols-2">
          {threatModels.map((model) => (
            <FadeIn key={model.title}>
              <div className="h-full rounded-xl border border-border bg-card p-6">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {model.title}
                  </h3>
                  <Badge variant="accent">{model.project}</Badge>
                </div>

                <div className="mb-4">
                  <h4 className="mb-2 text-sm font-semibold text-red-600 dark:text-red-400">
                    Threats
                  </h4>
                  <ul className="space-y-1.5">
                    {model.threats.map((t) => (
                      <li
                        key={t}
                        className="flex gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                    Mitigations
                  </h4>
                  <ul className="space-y-1.5">
                    {model.mitigations.map((m) => (
                      <li
                        key={m}
                        className="flex gap-2 text-sm text-muted-foreground"
                      >
                        <Shield className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>

                {model.slug && (
                  <div className="mt-4">
                    <Link
                      href={`/projects/${model.slug}`}
                      className="text-sm font-medium text-accent hover:underline"
                    >
                      View full case study &rarr;
                    </Link>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        {/* 5 — Résumé download */}
        <FadeIn>
          <div className="mb-16 rounded-2xl border border-border bg-card p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground">
              Cloud &amp; infrastructure resume
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-muted-foreground">
              AWS, IAM, and delivery experience in one page.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="/documents/Akshat_Patel_Resume.pdf"
                download
                className={buttonVariants({ variant: "accent", size: "md" })}
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <Link
                href="/contact"
                className={buttonVariants({ variant: "secondary", size: "md" })}
              >
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* 6 — External verification */}
        {EXTERNAL_VERIFICATION.length > 0 && (
          <FadeIn>
            <div className="rounded-xl border border-border bg-muted/30 p-6 text-center">
              <h2 className="text-base font-semibold text-foreground">
                External verification
              </h2>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-4">
                {EXTERNAL_VERIFICATION.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                  >
                    {link.label}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </div>
  );
}

function SectionTitle({
  icon: Icon,
  children,
}: {
  icon?: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <h2 className="mb-3 flex items-center gap-2.5 text-3xl font-bold tracking-tight text-foreground">
      {Icon && <Icon className="h-6 w-6 shrink-0 text-accent" />}
      {children}
    </h2>
  );
}
