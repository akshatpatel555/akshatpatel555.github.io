"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Lock } from "lucide-react";
import {
  PROJECTS,
  ALL_TAGS,
  getContentTypeLabel,
  type ProjectTag,
} from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/motion-wrapper";
import { cn } from "@/lib/utils";
import { getTagVariant } from "@/lib/tag-variants";

export function ProjectsContent() {
  const [activeTag, setActiveTag] = useState<ProjectTag | "All">("All");

  const filtered =
    activeTag === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.tags.includes(activeTag));

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Projects"
          title="What I've Built"
          description="End-to-end systems — designed, built, shipped, and maintained."
          as="h1"
        />

        {/* Filter chips */}
        <div
          className="mb-10 flex flex-wrap justify-center gap-2"
          role="group"
          aria-label="Filter by tag"
        >
          <button
            type="button"
            aria-pressed={activeTag === "All"}
            onClick={() => setActiveTag("All")}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium transition-colors cursor-pointer",
              activeTag === "All"
                ? "bg-accent-solid text-accent-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            )}
          >
            All
          </button>
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              type="button"
              aria-pressed={activeTag === tag}
              onClick={() => setActiveTag(tag)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors cursor-pointer",
                activeTag === tag
                  ? "bg-accent-solid text-accent-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <Stagger className="grid gap-6 md:grid-cols-2" key={activeTag}>
          {filtered.map((project) => (
            <StaggerItem key={project.slug}>
              <Card className="flex h-full flex-col">
                <Link
                  href={`/projects/${project.slug}`}
                  className="flex h-full flex-1 flex-col"
                >
                  <div className="relative mb-4 h-48 overflow-hidden rounded-lg bg-muted/50">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className={
                          project.imageFit === "contain"
                            ? "object-contain p-6"
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
                    <h2 className="text-xl font-semibold text-foreground">
                      {project.title}
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {project.tagline}
                    </p>
                    {project.context && (
                      <p className="mt-1.5 font-mono text-xs leading-snug text-muted-foreground">
                        {project.context}
                      </p>
                    )}
                    <p className="mt-3 text-sm text-muted-foreground line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="font-mono text-xs text-muted-foreground">
                      {project.period}
                    </span>
                    <span className="flex items-center gap-1 text-sm font-medium text-accent">
                      Read {getContentTypeLabel(project).toLowerCase()}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
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
      </div>
    </div>
  );
}
