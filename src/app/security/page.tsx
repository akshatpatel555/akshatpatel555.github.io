import type { Metadata } from "next";
import { SecurityContent } from "./security-content";
import { SITE_CONFIG } from "@/lib/constants";
import { SECURITY_POSITIONING } from "@/data/security";

export const metadata: Metadata = {
  title: "Cloud & Infrastructure — AWS, IAM, Multi-Portal Systems",
  description:
    "Cloud-native systems work by Akshat Patel: multi-portal IAM on AWS, RAG data pipelines, and infrastructure delivery — case studies and tooling.",
  openGraph: {
    title: "Akshat Patel — Cloud & Infrastructure",
    description:
      "AWS, multi-portal IAM, and cloud-native delivery — architecture write-ups and applied threat models from shipped systems.",
  },
};

export default function SecurityPage() {
  return (
    <>
      {/* Shares the @id of the site-wide Person in the root layout, so this
          specialises that node rather than declaring a second person. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": `${SITE_CONFIG.url}#person`,
            name: "Akshat Patel",
            // No `url` here: this node shares an @id with the site-wide Person
            // in the root layout, and two different `url` values on one @id is
            // a conflict rather than a specialisation.
            jobTitle: SECURITY_POSITIONING.headline,
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "Oregon State University",
            },
            sameAs: [SITE_CONFIG.linkedin, SITE_CONFIG.github],
            knowsAbout: [
              "AWS",
              "CloudFormation",
              "IAM",
              "Multi-Portal RBAC",
              "AWS Lambda",
              "S3",
              "CloudFront",
              "Docker",
              "Kubernetes",
              "RAG",
              "Data Pipelines",
            ],
          }),
        }}
      />
      <SecurityContent />
    </>
  );
}
