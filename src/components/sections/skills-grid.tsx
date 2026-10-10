"use client";

import { useState } from "react";
import { SOFTWARE_SKILLS, SECURITY_SKILLS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/motion-wrapper";
import { cn } from "@/lib/utils";

type Tab = "software" | "security";

export function SkillsGrid() {
  const [activeTab, setActiveTab] = useState<Tab>("software");

  const categories = activeTab === "software" ? SOFTWARE_SKILLS : SECURITY_SKILLS;

  return (
    <section
      id="skills"
      className="py-14 md:py-20 bg-muted/30"
      aria-label="Technical skills"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Technical Skills"
          title="Tools & Technologies"
          description="Tools I Use in Production"
        />

        {/* Tab toggle */}
        <div className="mb-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Skill category"
            className="inline-flex rounded-lg border border-border bg-card p-1"
          >
            <button
              role="tab"
              id="skills-tab-software"
              aria-selected={activeTab === "software"}
              aria-controls="skills-panel"
              onClick={() => setActiveTab("software")}
              className={cn(
                "rounded-md px-6 py-2.5 text-base font-medium transition-colors cursor-pointer",
                activeTab === "software"
                  ? "bg-accent-solid text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Software
            </button>
            <button
              role="tab"
              id="skills-tab-security"
              aria-selected={activeTab === "security"}
              aria-controls="skills-panel"
              onClick={() => setActiveTab("security")}
              className={cn(
                "rounded-md px-6 py-2.5 text-base font-medium transition-colors cursor-pointer",
                activeTab === "security"
                  ? "bg-accent-solid text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Cloud
            </button>
          </div>
        </div>

        <div
          id="skills-panel"
          role="tabpanel"
          aria-labelledby={`skills-tab-${activeTab}`}
        >
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" key={activeTab}>
          {categories.map((cat) => (
            <StaggerItem key={cat.name}>
              <div className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/30 h-full">
                <h3 className="mb-3 font-mono text-sm font-semibold uppercase tracking-wider text-accent">
                  {cat.name}
                </h3>
                <ul className="space-y-2">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-base text-muted-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        </div>
      </div>
    </section>
  );
}
