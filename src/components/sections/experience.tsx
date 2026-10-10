import { MapPin, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/motion-wrapper";
import { STITCHLINE_URL } from "@/lib/constants";

interface Role {
  title: string;
  company: string;
  location: string;
  period: string;
  tech: string[];
  bullets: string[];
  link?: { label: string; href: string };
}

const roles: Role[] = [
  {
    title: "Founder & Software Engineer",
    company: "StitchLine",
    location: "Independent",
    period: "2025 – Present",
    tech: ["Flutter", "React", "TypeScript", "AWS", "SQLite"],
    link: { label: "StitchLine", href: STITCHLINE_URL },
    bullets: [
      "Built the studio app and public site for ateliers and alteration shops: customers, garments, measurements, photos, pen notes, and USD balances in one place.",
      "Replaced paper order books with a searchable tablet workflow — due dates, status, and what is still owed on each job.",
    ],
  },
  {
    title: "Software Engineer",
    company: "NovaTech USA",
    location: "Hillsboro, OR",
    period: "Jan 2025 – Present",
    tech: [
      "Python",
      "C/C++",
      "React / TypeScript",
      "AWS CloudFormation",
      "RAG / LLM",
    ],
    bullets: [
      "Improved production efficiency by more than 30% by designing LLM-powered RAG full-stack solutions that connected sales, inventory, and production data for operational planning.",
      "Automated data-integration workflows with C/C++ microservices, Python, React/TypeScript, and Git CI/CD — deployed with AWS CloudFormation (IaC).",
      "Partnered with stakeholders to turn operational challenges into APIs and application capabilities.",
    ],
  },
  {
    title: "Software Engineer Intern (Full Stack)",
    company: "Extendrum Technologies",
    location: "Portland, OR",
    period: "Jun 2024 – Dec 2024",
    tech: ["OpenAI API", "TypeScript", "React", "Docker", "Power BI"],
    bullets: [
      "Modernized the PlatShift SaaS product by integrating the OpenAI API and GenAI capabilities with C services and React/TypeScript interfaces, delivering AI-powered workflow automation for real business use cases.",
      "Collaborated with clients and engineers to translate requirements into scalable technical specifications.",
    ],
  },
  {
    title: "Database and Analytics",
    company: "Prime Natural",
    location: "Portland, OR",
    period: "Jan 2024 – Jun 2024",
    tech: ["SQL", "Data Modeling", "Analytics", "Docker"],
    bullets: [
      "Built SQL-backed analytical dashboards and structured data models for product performance, sales trends, and customer engagement.",
      "Maintained relational databases with data-quality practices and partnered with the business owner on inventory and marketing insights.",
    ],
  },
  {
    title: "Hardware / Software Support Technician",
    company: "Intel — Ronler Acres",
    location: "Hillsboro, OR",
    period: "Jun 2023 – Jan 2024",
    tech: ["QA / Testing", "Automation", "Root-Cause Analysis"],
    bullets: [
      "Developed automation scripts and process improvements for hardware/software test systems adopted into Intel's standard lab-testing workflow.",
      "Diagnosed hardware/software integration failures with senior engineers and documented repeatable resolution practices.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-14 md:py-20" aria-label="Work experience">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Experience"
          title="Where I've Worked"
          align="left"
        />

        <div className="space-y-10">
          {roles.map((role, i) => (
            <FadeIn key={role.company} delay={i * 0.05}>
              <div className="relative border-l-2 border-border pl-8">
                <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 border-accent bg-background" />

                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-xl font-semibold text-foreground">
                    {role.title}
                  </h3>
                  <span className="font-mono text-sm text-muted-foreground">
                    {role.period}
                  </span>
                </div>

                <p className="text-base font-medium text-accent">
                  {role.company}
                </p>
                <p className="mt-0.5 flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  {role.location}
                </p>

                {role.link && (
                  <a
                    href={role.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-3 inline-flex items-center gap-2 rounded-full bg-accent-solid px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm shadow-accent/30 transition-all duration-200 hover:shadow-md hover:shadow-accent/40 hover:brightness-110 active:scale-[0.98]"
                  >
                    Visit {role.link.label}
                    <ExternalLink className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </a>
                )}

                {role.tech.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {role.tech.map((t) => (
                      <Badge key={t} variant="default">
                        {t}
                      </Badge>
                    ))}
                  </div>
                )}

                <ul className="mt-4 space-y-2">
                  {role.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-base text-muted-foreground leading-relaxed"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
