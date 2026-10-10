import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  PROJECTS,
  getProjectBySlug,
  getContentTypeLabel,
} from "@/data/projects";
import { ProjectCaseStudy } from "./project-case-study";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  // Suppressed where the title already carries the noun, so titles do not
  // repeat it.
  const label = getContentTypeLabel(project);
  const labelNoun = label.split(" ").pop()!.toLowerCase();
  const title = project.title.toLowerCase().includes(labelNoun)
    ? project.title
    : `${project.title} — ${label}`;

  // Several taglines are short enough to be useless as a search snippet, so
  // fall back to the (longer) description and trim to a sensible length rather
  // than shipping a 40-character meta description.
  const description =
    project.tagline.length >= 110
      ? project.tagline
      : truncate(
          `${project.tagline}. ${project.description}`.replace(/\.\.\s/, ". "),
          158
        );

  return {
    title,
    description,
    openGraph: {
      title: `${project.title} — Akshat Patel`,
      description,
    },
  };
}

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : max).replace(/[,;:.]$/, "")}…`;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return <ProjectCaseStudy project={project} />;
}
