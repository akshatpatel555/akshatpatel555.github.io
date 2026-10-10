"use client";

import {
  Code2,
  Cloud,
  GraduationCap,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";
import { Stagger, StaggerItem } from "@/components/ui/motion-wrapper";


const signals = [
  {
    icon: GraduationCap,
    label: "B.S. CS + Business Analytics",
    detail: "Oregon State University — 3.51 GPA, Cum Laude, Dean's List",
  },
  {
    icon: Code2,
    label: "Software Engineer",
    detail: "Python · C/C++ · TypeScript · React · SQL · AWS · Docker",
  },
  {
    icon: Cloud,
    label: "Cloud-Native",
    detail: "IAM, Lambda, S3, CloudFront, ROSA/OpenShift",
  },
  {
    icon: Trophy,
    label: "Product Delivery",
    detail: "Agile, stakeholder collaboration, apps shipped end-to-end",
  },
];

export function RecruiterTLDR() {
  return (
    <section className="py-12 md:py-16" aria-label="About me">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading + intro paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 max-w-3xl"
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            About Me
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground/80 md:text-xl">
            I&rsquo;m a Software Engineer and Computer Science graduate from
            Oregon State University (Cum Laude, Business Analytics minor) with
            experience building production software, AI-enabled applications,
            REST APIs, and automation using Python, C/C++, TypeScript, SQL, and
            AWS. I&rsquo;ve designed LLM-powered RAG solutions, integrated GenAI
            into SaaS products, and shipped cloud-native full-stack systems —
            including StitchLine and an AI-powered workout generator capstone.
            I&rsquo;m currently seeking software engineering roles.
          </p>
        </motion.div>

        {/* Signal cards */}
        <Stagger className="grid gap-3 sm:grid-cols-2">
          {signals.map((item) => (
            <StaggerItem key={item.label}>
              <div className="flex gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/30">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.label}
                  </h3>
                  <p className="mt-0.5 text-base leading-snug text-foreground/60">
                    {item.detail}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
