import { ImageResponse } from "next/og";
import {
  PROJECTS,
  getProjectBySlug,
  getContentTypeLabel,
} from "@/data/projects";

/**
 * Per-case-study share card.
 *
 * Case studies define their own `openGraph` block, which replaces the parent's
 * and dropped the inherited site image — every case study shared as a bare
 * text link. A segment-local image also lets each card carry its own title and
 * content type, which is the useful thing to show when a link is pasted into
 * Slack or LinkedIn.
 */
export const dynamic = "force-static";
export const alt = "Akshat Patel — case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default async function CaseStudyOpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  const label = project ? getContentTypeLabel(project) : "Case Study";
  const title = project ? project.title : "Akshat Patel";
  const tagline = project ? project.tagline : "";
  const context = project?.context ?? project?.role ?? "";
  const isSecurity = project?.category === "security";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          padding: "68px 80px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                display: "flex",
                fontSize: 24,
                color: "#0a0a0a",
                background: "#3b82f6",
                padding: "8px 18px",
                borderRadius: 999,
                fontWeight: 600,
              }}
            >
              {label}
            </div>
            {isSecurity && (
              <div
                style={{
                  display: "flex",
                  fontSize: 24,
                  color: "#c4b5fd",
                  border: "2px solid #7c3aed",
                  padding: "6px 18px",
                  borderRadius: 999,
                }}
              >
                Academic
              </div>
            )}
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 36,
              fontSize: title.length > 34 ? 60 : 72,
              fontWeight: 700,
              color: "#ededed",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
            }}
          >
            {title}
          </div>

          {tagline && (
            <div
              style={{
                display: "flex",
                marginTop: 22,
                fontSize: 28,
                color: "#9ca3af",
                lineHeight: 1.35,
              }}
            >
              {tagline.length > 150 ? tagline.slice(0, 147) + "…" : tagline}
            </div>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              width: 110,
              height: 4,
              background: "#3b82f6",
              marginBottom: 24,
            }}
          />
          <div style={{ display: "flex", fontSize: 25, color: "#6b7280" }}>
            {context}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 10,
              fontSize: 25,
              color: "#3b82f6",
            }}
          >
            akshatpatel555.github.io
          </div>
        </div>
      </div>
    ),
    size
  );
}
