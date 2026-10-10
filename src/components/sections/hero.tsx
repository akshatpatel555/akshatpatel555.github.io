"use client";

import Image from "next/image";
import { ArrowDown, Download, Linkedin } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { GlitchText } from "@/components/ui/glitch-text";
import { SITE_CONFIG } from "@/lib/constants";

export function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (!el) return;
    // A JS-specified "smooth" overrides the CSS scroll-behavior override, so
    // the reduced-motion preference has to be checked here too.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-grid"
      aria-label="Introduction"
    >
      {/* Gradient background orb — smaller blur on mobile for GPU perf */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[300px] w-[300px] rounded-full bg-accent/5 blur-[60px] md:h-[500px] md:w-[500px] md:blur-[120px]" />
      </div>

      {/*
        The hero deliberately has no entrance animation. framer-motion
        serialises `initial` into the prerendered HTML as opacity:0, which
        meant the LCP element could not paint until the JS bundle downloaded
        and hydrated — and if JS failed, the resume download CTAs never
        appeared at all. Everything above the fold now paints with the
        document. GlitchText still animates the second heading line.
      */}
      <div className="relative mx-auto max-w-6xl px-6 py-28">
        {/* Two-column layout: text left, photo right */}
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-center md:gap-14">
          {/* Text column */}
          <div className="flex-1 text-center md:text-left">
            <div>
              <span className="mb-8 inline-block rounded-full border border-border bg-card px-5 py-2 font-mono text-sm text-muted-foreground">
                B.S. Computer Science + Business Analytics Minor @ Oregon State University &middot; 2026
              </span>
            </div>

            <h1 className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-[4.25rem]">
              Software engineer.
              <br />
              <GlitchText
                text="Ship production systems."
                className="font-bold font-sans gradient-text"
                delay={800}
                speed={35}
              />
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              I build production software, AI-enabled apps, REST APIs, and
              cloud-native systems on AWS &mdash; turning ambiguous
              requirements into reliable, shippable solutions.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap md:items-start"
            >
              <Button variant="primary" size="lg" onClick={scrollToProjects}>
                View Projects
                <ArrowDown className="h-5 w-5" />
              </Button>
              <a
                href="/documents/Akshat_Patel_Resume.pdf"
                download
                className={buttonVariants({ variant: "secondary", size: "lg" })}
              >
                <Download className="h-5 w-5" />
                Resume
              </a>
              <div className="flex gap-2">
                <a
                  href={SITE_CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className={buttonVariants({ variant: "ghost", size: "icon" })}
                >
                  <Linkedin className="h-[22px] w-[22px]" />
                </a>
              </div>
            </div>
          </div>

          {/* Photo column */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/20 to-purple-500/20 blur-sm" />
              <Image
                src="/images/akshat.png"
                alt="Akshat Patel"
                width={340}
                height={420}
                sizes="(max-width: 768px) 260px, 340px"
                className="relative h-[340px] w-[260px] rounded-2xl border-2 border-border object-cover shadow-2xl md:h-[420px] md:w-[340px]"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
