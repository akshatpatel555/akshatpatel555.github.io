import type { ProjectTag } from "@/data/projects";

type BadgeVariant = "default" | "accent" | "outline" | "success" | "warning" | "academic";

/**
 * Every tag maps to an explicit badge variant. The map is exhaustive over
 * ProjectTag, so adding a tag without deciding how it looks is a type error
 * rather than an unstyled fallback.
 *
 * Domain tags share the accent so a card's tag row reads as one group. The
 * exception is "Academic", which is deliberately a different colour: it is a
 * provenance marker, not a skill, and a reader must never mistake coursework
 * for professional or client engagement.
 */
const TAG_VARIANTS: Record<ProjectTag, BadgeVariant> = {
  "Full-Stack": "accent",
  Security: "accent",
  AI: "accent",
  Web: "accent",
  Infra: "accent",
  Mobile: "accent",
  Forensics: "accent",
  Detection: "accent",
  Assessment: "accent",
  "Machine Learning": "accent",
  Academic: "academic",
};

export function getTagVariant(tag: ProjectTag): BadgeVariant {
  return TAG_VARIANTS[tag];
}
