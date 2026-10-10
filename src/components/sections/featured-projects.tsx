import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Cloud, Activity, ExternalLink, Lock, Users } from "lucide-react";
import { PROJECTS, getContentTypeLabel } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/motion-wrapper";
import { getTagVariant } from "@/lib/tag-variants";

const FEATURED_SLUGS = [
  "stitchline",
  "ai-workout-generator",
];
const featured = FEATURED_SLUGS.map((slug) =>
  PROJECTS.find((p) => p.slug === slug)
).filter((p): p is (typeof PROJECTS)[number] => Boolean(p));

const proofTiles = [
  {
    icon: Lock,
    title: "Multi-Portal IAM",
    detail: "Customer and vendor portals with least-privilege roles and USD-denominated ops flows",
    project: "StitchLine",
  },
  {
    icon: Activity,
    title: "GPT-4o + OpenCV",
    detail: "Personalized workout generation with computer-vision form feedback",
    project: "AI Workout Generator",
  },
  {
    icon: Cloud,
    title: "AWS Cloud-Native",
    detail: "Lambda, S3, CloudFront, IAM, and ROSA/OpenShift for production workloads",
    project: "StitchLine",
  },
  {
    icon: Users,
    title: "Stakeholder Delivery",
    detail: "Ambiguous requirements turned into shipped APIs and end-to-end product surfaces",
    project: "Across roles",
  },
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-14 md:py-20 bg-muted/30" aria-label="Featured projects">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Projects"
          title="Selected Work"
          description="Systems I designed, built, and shipped."
        />

        {/* Proof tiles */}
        <Stagger className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proofTiles.map((tile) => (
            <StaggerItem key={tile.title}>
              <div className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/30 h-full">
                <tile.icon className="mb-3 h-5 w-5 text-accent" />
                <h3 className="text-base font-semibold text-foreground">
                  {tile.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {tile.detail}
                </p>
                <span className="mt-2 inline-block font-mono text-xs text-accent">
                  {tile.project}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Project cards */}
        <Stagger className="grid gap-6 sm:grid-cols-2">
          {featured.map((project) => (
            <StaggerItem key={project.slug}>
              <Card className="flex h-full flex-col justify-between">
                <Link
                  href={`/projects/${project.slug}`}
                  className="flex h-full flex-1 flex-col"
                >
                  <div className="relative mb-4 h-40 overflow-hidden rounded-lg bg-muted/50">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className={
                          project.imageFit === "contain"
                            ? "object-contain p-5"
                            : "object-cover object-top"
                        }
                      />
                    ) : (
                      <span className="flex h-full items-center justify-center font-mono text-xs text-muted-foreground">
                        {project.confidential ? (
                          <span className="flex items-center gap-1.5">
                            <Lock className="h-3.5 w-3.5" /> confidential
                          </span>
                        ) : (
                          "[screenshot]"
                        )}
                      </span>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Badge key={tag} size="sm" variant={getTagVariant(tag)}>
                          {tag}
                        </Badge>
                      ))}
                      {project.confidential && (
                        <Badge size="sm" variant="warning">
                          Confidential
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold leading-snug text-foreground">
                      {project.title}
                    </h3>
                    {project.context && (
                      <p className="mt-1.5 font-mono text-xs leading-snug text-muted-foreground">
                        {project.context}
                      </p>
                    )}
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-accent">
                    Read {getContentTypeLabel(project).toLowerCase()}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
                {project.links
                  ?.filter((link) => link.href.startsWith("http"))
                  .map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-accent-solid px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm shadow-accent/30 transition-all duration-200 hover:shadow-md hover:shadow-accent/40 hover:brightness-110 active:scale-[0.98]"
                    >
                      Visit {link.label}
                      <ExternalLink className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </a>
                  ))}
              </Card>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className={buttonVariants({ variant: "secondary" })}
          >
            View All Projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
