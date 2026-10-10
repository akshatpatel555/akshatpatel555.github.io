import type { MetadataRoute } from "next";
import { PROJECTS } from "@/data/projects";
import { SITE_CONFIG } from "@/lib/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Derived from PROJECTS, so new case studies are listed automatically
  // rather than needing a second edit here. Security casework carries the
  // same priority as software work — it is not secondary content.
  const projectRoutes = PROJECTS.map((project) => ({
    url: `${SITE_CONFIG.url}/projects/${project.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: SITE_CONFIG.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_CONFIG.url}/projects`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      // Linked from the contact line of the cybersecurity resume, so this is
      // a landing page rather than a secondary route.
      url: `${SITE_CONFIG.url}/security`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...projectRoutes,
    {
      url: `${SITE_CONFIG.url}/resume`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_CONFIG.url}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
