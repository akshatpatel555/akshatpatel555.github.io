"use client";

import Link from "next/link";
import {
  Download,
  ExternalLink,
  MapPin,
  GraduationCap,
  Briefcase,
  Award,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/motion-wrapper";
import { SITE_CONFIG, STITCHLINE_URL } from "@/lib/constants";

export function ResumeContent() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          label="// resume"
          title="Akshat Patel"
          description="Software Engineer &middot; Cloud-Native Systems &middot; AWS &middot; AI-Enabled Apps"
          as="h1"
        />

        {/* Download + links */}
        <FadeIn>
          <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/documents/Akshat_Patel_Resume.pdf"
              download
              className={buttonVariants({ variant: "accent" })}
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "secondary", size: "sm" })}
            >
              GitHub <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "secondary", size: "sm" })}
            >
              LinkedIn <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </FadeIn>

        {/* Education */}
        <FadeIn>
          <ResumeSection title="Education" icon={GraduationCap}>
            <ResumeEntry
              title="Oregon State University"
              subtitle="B.S. Computer Science + Business Analytics"
              location="Corvallis, Oregon"
              period="Sep 2022 – Jun 2026"
              badges={["GPA: 3.51", "Cum Laude", "Dean's List"]}
            >
              <p className="mt-2 text-sm text-muted-foreground">
                <strong className="text-foreground">Senior Capstone:</strong>{" "}
                AI-Powered Workout Generator — GPT-4o personalized plans, OpenCV
                form feedback, FastAPI + MongoDB, JWT/PyOTP MFA, Docker + CI/CD
                on AWS-compatible infrastructure.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong className="text-foreground">Key Coursework:</strong>{" "}
                Data Structures &amp; Algorithms, Operating Systems, Parallel
                Programming, Database Systems, Computer Networks, Network
                Security, Software Engineering I &amp; II
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong className="text-foreground">Certificates:</strong>{" "}
                Generative AI Mastermind — OutSkill · Theoretical Computer
                Science — OSU CoE
              </p>
            </ResumeEntry>
          </ResumeSection>
        </FadeIn>

        {/* Experience */}
        <FadeIn>
          <ResumeSection title="Experience" icon={Briefcase}>
            <ResumeEntry
              title="Software Engineer"
              subtitle="NovaTech USA"
              location="Hillsboro, OR"
              period="Jan 2025 – Present"
              badges={[
                "Python",
                "C / C++",
                "React / TypeScript",
                "AWS CloudFormation",
                "RAG / LLM",
              ]}
            >
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Improved production efficiency by more than 30% by designing
                  LLM-powered RAG full-stack solutions connecting sales,
                  inventory, and production data for operational planning.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Automated data-integration workflows with C/C++
                  microservices, Python, React/TypeScript, and Git CI/CD —
                  deployed with AWS CloudFormation (IaC).
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Partnered with stakeholders to turn operational challenges
                  into APIs and application capabilities.
                </li>
              </ul>
            </ResumeEntry>

            <ResumeEntry
              title="Software Engineer Intern (Full Stack)"
              subtitle="Extendrum Technologies"
              location="Portland, OR"
              period="Jun 2024 – Dec 2024"
              badges={[
                "OpenAI API",
                "TypeScript",
                "React",
                "Docker",
                "Power BI",
              ]}
            >
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Modernized the PlatShift SaaS product by integrating the
                  OpenAI API and GenAI capabilities with C services and
                  React/TypeScript interfaces.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Delivered AI-powered workflow automation for real business
                  use cases; collaborated with clients and engineers on
                  scalable technical specifications.
                </li>
              </ul>
            </ResumeEntry>

            <ResumeEntry
              title="Database and Analytics"
              subtitle="Prime Natural"
              location="Portland, OR"
              period="Jan 2024 – Jun 2024"
              badges={["SQL", "Data Modeling", "Analytics", "Docker"]}
            >
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Built SQL-backed analytical dashboards and structured data
                  models for product performance, sales trends, and customer
                  engagement.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Maintained relational databases with data-quality practices;
                  partnered with the business owner on inventory and marketing
                  insights.
                </li>
              </ul>
            </ResumeEntry>

            <ResumeEntry
              title="Hardware / Software Support Technician"
              subtitle="Intel — Ronler Acres"
              location="Hillsboro, OR"
              period="Jun 2023 – Jan 2024"
              badges={["QA / Testing", "Automation", "Root-Cause Analysis"]}
            >
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Developed automation scripts and process improvements for
                  hardware/software test systems adopted into Intel&apos;s
                  standard lab-testing workflow.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Diagnosed hardware/software integration failures with senior
                  engineers and documented repeatable resolution practices.
                </li>
              </ul>
            </ResumeEntry>
          </ResumeSection>
        </FadeIn>

        {/* Selected projects */}
        <FadeIn>
          <ResumeSection title="Selected Projects" icon={Award}>
            <ResumeEntry
              title="StitchLine"
              subtitle="Cloud-native ops platform · Sole engineer"
              location="Production · Confidential"
              period="2025 – Present"
              badges={[
                "AWS Lambda",
                "S3",
                "CloudFront",
                "IAM",
                "ROSA / OpenShift",
                "Flutter",
                "React",
              ]}
              link={{ label: "StitchLine", href: STITCHLINE_URL }}
            >
              <p className="mt-2 text-sm text-muted-foreground">
                Multi-portal IAM for fashion design businesses — customer and
                vendor portals on AWS, serverless APIs, CloudFront hosting, and
                USD commercial workflows.{" "}
                <Link href="/projects/stitchline" className="text-accent underline-offset-2 hover:underline">
                  Case study
                </Link>
              </p>
            </ResumeEntry>

            <ResumeEntry
              title="AI-Powered Workout Generator"
              subtitle="Senior Capstone · Backend / full-stack lead"
              location="Oregon State University"
              period="CS46x"
              badges={[
                "GPT-4o",
                "OpenCV",
                "FastAPI",
                "MongoDB",
                "Docker",
                "JWT / PyOTP",
              ]}
              link={{
                label: "case study",
                href: "/projects/ai-workout-generator",
              }}
            >
              <p className="mt-2 text-sm text-muted-foreground">
                End-to-end fitness platform with LLM workout generation,
                computer-vision form coaching, and cloud-ready backend
                services.
              </p>
            </ResumeEntry>
          </ResumeSection>
        </FadeIn>
      </div>
    </div>
  );
}

function ResumeSection({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-foreground">
        <Icon className="h-6 w-6 text-accent" />
        {title}
      </h2>
      <div className="space-y-8">{children}</div>
    </section>
  );
}

function ResumeEntry({
  title,
  subtitle,
  location,
  period,
  badges,
  link,
  children,
}: {
  title: string;
  subtitle: string;
  location: string;
  period: string;
  badges?: string[];
  link?: { label: string; href: string };
  children?: React.ReactNode;
}) {
  return (
    <div className="relative border-l-2 border-border pl-6">
      <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-accent" />
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <span className="font-mono text-xs text-muted-foreground">
          {period}
        </span>
      </div>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
      <p className="flex items-center gap-1 text-xs text-muted-foreground">
        <MapPin className="h-3 w-3" />
        {location}
      </p>
      {link && (
        <a
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={
            link.href.startsWith("http") ? "noopener noreferrer" : undefined
          }
          className="group mt-2 inline-flex items-center gap-2 rounded-full bg-accent-solid px-3.5 py-1.5 text-xs font-semibold text-accent-foreground shadow-sm shadow-accent/30 transition-all duration-200 hover:shadow-md hover:shadow-accent/40 hover:brightness-110 active:scale-[0.98]"
        >
          Visit {link.label}
          <ExternalLink className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
      )}
      {badges && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {badges.map((b) => (
            <Badge key={b} variant="default">
              {b}
            </Badge>
          ))}
        </div>
      )}
      {children}
    </div>
  );
}
