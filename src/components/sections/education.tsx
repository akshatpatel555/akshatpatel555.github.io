import { GraduationCap, Award, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/motion-wrapper";

const keyCoursework = [
  "Data Structures & Algorithms",
  "Analysis of Algorithms",
  "Operating Systems",
  "Parallel Programming",
  "Software Engineering I & II",
  "Database Systems",
  "Computer Networks",
  "Network Security",
];

const certificates = [
  "Generative AI Mastermind — OutSkill",
  "Theoretical Computer Science — OSU CoE",
];

export function Education() {
  return (
    <section
      id="education"
      className="py-14 md:py-20 bg-muted/30"
      aria-label="Education"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Education"
          title="Academic Background"
          align="left"
        />

        <div className="space-y-10">
          {/* Oregon State */}
          <FadeIn>
            <div className="rounded-xl border border-border bg-card p-7 md:p-9">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-6 w-6 text-accent" />
                    <h3 className="text-2xl font-bold text-foreground">
                      Oregon State University
                    </h3>
                  </div>
                  <p className="mt-1 text-base font-medium text-foreground">
                    B.S. Computer Science + Minor in Business Analytics
                  </p>
                  <p className="mt-0.5 flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    Corvallis, Oregon
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-sm text-muted-foreground">
                    Sep 2022 – Jun 2026
                  </span>
                  <div className="mt-1 flex flex-wrap justify-end gap-2">
                    <Badge variant="accent">3.51 GPA</Badge>
                    <Badge variant="success">
                      <Award className="mr-1 h-3 w-3" />
                      Cum Laude
                    </Badge>
                    <Badge variant="success">
                      <Award className="mr-1 h-3 w-3" />
                      Dean&apos;s List
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Capstone */}
              <div className="mt-6 rounded-lg border border-accent/20 bg-accent/5 p-4">
                <h4 className="text-base font-semibold text-foreground">
                  Senior Capstone: AI-Powered Workout Generator
                </h4>
                <p className="mt-1 text-base text-muted-foreground leading-relaxed">
                  End-to-end fitness platform with GPT-4o personalized workout
                  generation, OpenCV form analysis, FastAPI backend, and
                  AWS-compatible cloud infrastructure.
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {[
                    "Python",
                    "GPT-4o",
                    "OpenCV",
                    "FastAPI",
                    "AWS",
                    "Docker",
                  ].map((t) => (
                    <Badge key={t} variant="default">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Coursework */}
              <div className="mt-6">
                <h4 className="mb-2 text-base font-semibold text-foreground">
                  Key Coursework
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {keyCoursework.map((c) => (
                    <Badge key={c} variant="outline">
                      {c}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Certificates */}
              <div className="mt-6">
                <h4 className="mb-2 text-base font-semibold text-foreground">
                  Certificates
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {certificates.map((c) => (
                    <Badge key={c} variant="outline">
                      {c}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
