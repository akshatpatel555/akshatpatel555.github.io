"use client";

import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { CopyButton } from "@/components/ui/copy-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/motion-wrapper";
import { SITE_CONFIG } from "@/lib/constants";

export function ContactHome() {
  return (
    <section id="contact" className="py-14 md:py-20" aria-label="Contact">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          label="Contact"
          title="Let's Build Something Together"
          description="Looking for a software engineer who ships production systems end to end?"
          className="[&_h2]:text-3xl [&_h2]:sm:text-4xl [&_h2]:md:text-5xl [&_h2]:leading-[1.1]"
        />

        <FadeIn>
          <div className="relative rounded-2xl border border-border bg-card">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 via-transparent to-purple-500/5" />

            {/* Desktop: 3-column grid  |  Mobile: centered stack */}
            <div className="relative flex flex-col items-center gap-5 px-4 py-6 text-center sm:px-6 sm:py-7 md:grid md:grid-cols-[auto_1fr_auto] md:items-center md:gap-6 md:px-8 md:py-7 md:text-left">
              {/* Avatar */}
              <Image
                src="/images/akshat.png"
                alt="Akshat Patel — Software Engineer"
                width={112}
                height={112}
                className="h-[80px] w-[80px] rounded-xl object-cover object-center shadow-md shadow-accent/10 ring-2 ring-border md:h-[96px] md:w-[96px]"
              />

              {/* Identity */}
              <div className="min-w-0">
                <h3 className="text-2xl font-bold text-foreground md:text-3xl">
                  Akshat Patel
                </h3>
                <p className="mt-0.5 text-base text-muted-foreground sm:text-lg">
                  Software Engineer
                </p>
                <p className="mt-1 flex items-center justify-center gap-1 text-base text-muted-foreground md:justify-start">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  Atlanta, GA
                </p>
              </div>

              {/* Actions */}
              <div className="flex w-full flex-col items-stretch gap-2.5 sm:flex-row sm:items-center sm:justify-center md:w-auto md:justify-end">
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className={buttonVariants({
                    variant: "accent",
                    size: "md",
                    className: "w-full sm:w-auto",
                  })}
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  <span className="truncate">Email {SITE_CONFIG.email}</span>
                </a>
                <CopyButton
                  text={SITE_CONFIG.email}
                  variant="secondary"
                  size="md"
                  className="w-full sm:w-auto"
                  toastMessage="Email copied to clipboard"
                >
                  Copy Email
                </CopyButton>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
