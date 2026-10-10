"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ExternalLink,
  Lock,
  Shield,
  Scale,
} from "lucide-react";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { FadeIn } from "@/components/ui/motion-wrapper";
import { ScreenshotLightbox } from "@/components/projects/screenshot-lightbox";
import { CaseSection } from "@/components/projects/case-section";
import { getTagVariant } from "@/lib/tag-variants";

export function ProjectCaseStudy({ project }: { project: Project }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <ScrollProgress />

      <article className="pt-24 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          {/* Back link */}
          <FadeIn>
            <Link
              href="/projects"
              className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to projects
            </Link>
          </FadeIn>

          {/* Header */}
          <FadeIn delay={0.05}>
            <header className="mb-12">
              {project.image && project.imageFit === "contain" && (
                <div className="mb-6 flex h-28 w-28 items-center justify-center overflow-hidden rounded-2xl border border-border bg-muted/30 p-3 md:h-32 md:w-32">
                  <Image
                    src={project.image}
                    alt={`${project.title} logo`}
                    width={128}
                    height={128}
                    className="h-full w-full object-contain"
                    priority
                  />
                </div>
              )}

              <div className="mb-4 flex flex-wrap items-center gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant={getTagVariant(tag)}>
                    {tag}
                  </Badge>
                ))}
                {project.confidential && (
                  <Badge variant="warning">
                    <Lock className="mr-1 h-3 w-3" />
                    Confidential
                  </Badge>
                )}
                <Badge variant="outline">{project.status}</Badge>
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                {project.title}
              </h1>
              <p className="mt-3 text-xl text-muted-foreground">
                {project.tagline}
              </p>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span>
                  <strong className="text-foreground">Role:</strong>{" "}
                  {project.role}
                </span>
                <span>
                  <strong className="text-foreground">Period:</strong>{" "}
                  {project.period}
                </span>
              </div>

              {project.links && project.links.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full bg-accent-solid px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-md shadow-accent/30 transition-all duration-200 hover:shadow-lg hover:shadow-accent/40 hover:brightness-110 active:scale-[0.98]"
                    >
                      Visit {link.label}
                      <ExternalLink className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </a>
                  ))}
                </div>
              )}
            </header>
          </FadeIn>

          {/* Confidentiality notice */}
          {project.confidential && (
            <FadeIn delay={0.1}>
              <div className="mb-10 rounded-lg border border-amber-500/30 bg-amber-500/5 p-5">
                <div className="flex items-start gap-3">
                  <Lock className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Confidentiality Note
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Code is private during active development. This case study
                      covers architecture, system invariants, and engineering
                      decisions — not implementation details. Happy to walk
                      through architecture and modules live.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          )}

          {/* Description */}
          <FadeIn delay={0.15}>
            <p className="mb-12 text-lg leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </FadeIn>

          {/* Problem */}
          {project.problem && (
            <FadeIn>
              <CaseSection title="Problem">
                <p className="leading-relaxed text-muted-foreground">
                  {project.problem}
                </p>
              </CaseSection>
            </FadeIn>
          )}

          {/* Solution */}
          {project.solution && (
            <FadeIn>
              <CaseSection title="Solution">
                <p className="leading-relaxed text-muted-foreground">
                  {project.solution}
                </p>
              </CaseSection>
            </FadeIn>
          )}

          {/* Architecture */}
          {project.architecture && project.architecture.length > 0 && (
            <FadeIn>
              <CaseSection title="Architecture">
                <ul className="space-y-3">
                  {project.architecture.map((point, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </CaseSection>
            </FadeIn>
          )}

          {/* Security & Reliability */}
          {project.securityReliability &&
            project.securityReliability.length > 0 && (
              <FadeIn>
                <CaseSection title="Security & Reliability" icon={Shield}>
                  <ul className="space-y-3">
                    {project.securityReliability.map((point, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground">
                        <Shield className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CaseSection>
              </FadeIn>
            )}

          {/* Design Tradeoffs */}
          {project.designTradeoffs && project.designTradeoffs.length > 0 && (
            <FadeIn>
              <CaseSection title="Design Tradeoffs" icon={Scale}>
                <ul className="space-y-3">
                  {project.designTradeoffs.map((point, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <Scale className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </CaseSection>
            </FadeIn>
          )}

          {/* Results */}
          {project.results && project.results.length > 0 && (
            <FadeIn>
              <CaseSection title="Results">
                <ul className="space-y-3">
                  {project.results.map((point, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </CaseSection>
            </FadeIn>
          )}

          {/* Tech Stack */}
          <FadeIn>
            <CaseSection title="Tech Stack">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge key={t} variant="default">
                    {t}
                  </Badge>
                ))}
              </div>
            </CaseSection>
          </FadeIn>

          {/* Screenshots */}
          {project.screenshots && project.screenshots.length > 0 && (
            <FadeIn>
              <CaseSection title="Screenshots">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  {project.screenshots.map((shot, i) => (
                    <figure
                      key={shot.src}
                      className="overflow-hidden rounded-2xl border border-border bg-muted/30"
                    >
                      <button
                        type="button"
                        onClick={() => setLightboxIndex(i)}
                        className="group relative block aspect-[9/19.5] w-full cursor-zoom-in overflow-hidden bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        aria-label={`Enlarge screenshot: ${shot.alt}`}
                      >
                        <Image
                          src={shot.src}
                          alt={shot.alt}
                          fill
                          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                      </button>
                      {shot.caption && (
                        <figcaption className="px-3 py-2.5 text-xs leading-snug text-muted-foreground">
                          {shot.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </CaseSection>
            </FadeIn>
          )}

          {project.screenshots && project.screenshots.length > 0 && (
            <ScreenshotLightbox
              screenshots={project.screenshots}
              index={lightboxIndex}
              onClose={() => setLightboxIndex(null)}
              onIndexChange={setLightboxIndex}
            />
          )}

        </div>
      </article>
    </>
  );
}
