import type { Metadata } from "next";
import { ProjectsContent } from "./projects-content";

// The index is interactive (tag filtering), so the UI lives in a client
// component and the route stays a server component. Previously the route
// itself was "use client", which makes `export const metadata` impossible —
// /projects was shipping the home page's title and description.
export const metadata: Metadata = {
  title: "Projects & Casework",
  description:
    "Selected work by Akshat Patel: StitchLine — a confidential cloud-native fashion ops platform — and an AI-powered workout generator with GPT-4o and OpenCV.",
  openGraph: {
    title: "Projects & Casework — Akshat Patel",
    description:
      "StitchLine cloud-native multi-portal platform, AI workout generator (GPT-4o + OpenCV), and more.",
    images: ["/opengraph-image"],
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
