import type { Metadata } from "next";
import { ResumeContent } from "./resume-content";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Akshat Patel — software engineer. Cloud-native systems, AI-enabled apps, and AWS delivery. B.S. Computer Science + Business Analytics, Oregon State University, 2026.",
};

export default function ResumePage() {
  return <ResumeContent />;
}
