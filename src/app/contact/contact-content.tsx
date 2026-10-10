"use client";

import { Mail, Github, Linkedin, MapPin, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { CopyButton } from "@/components/ui/copy-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/motion-wrapper";
import { SITE_CONFIG } from "@/lib/constants";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    copyable: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/akshatpatel555",
    href: SITE_CONFIG.github,
    copyable: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/akshat-patel-b4a998185",
    href: SITE_CONFIG.linkedin,
    copyable: false,
  },
];

export function ContactContent() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          label="// contact"
          title="Let's Connect"
          description="I'm actively looking for full-time software engineering roles. Whether you have an opportunity, a question, or just want to say hi — my inbox is open."
          as="h1"
        />

        <Stagger className="grid gap-4 md:grid-cols-3">
          {contactMethods.map((method) => (
            <StaggerItem key={method.label}>
              <div className="rounded-xl border border-border bg-card p-6 text-center transition-colors hover:border-accent/30">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <method.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">
                  {method.label}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {method.value}
                </p>
                <div className="mt-4">
                  {method.copyable ? (
                    <CopyButton
                      text={method.value}
                      variant="secondary"
                      size="sm"
                      toastMessage="Email copied to clipboard"
                    >
                      Copy Email
                    </CopyButton>
                  ) : (
                    <a
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonVariants({
                        variant: "secondary",
                        size: "sm",
                      })}
                    >
                      Visit {method.label}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Direct email CTA */}
        <FadeIn>
          <div className="relative mt-16 overflow-hidden rounded-2xl border border-border bg-card p-10 text-center md:p-14">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-purple-500/5 rounded-2xl" />
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Prefer email?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              Drop me a line about the role, your team, or what you&apos;re
              building. I respond to every message.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className={buttonVariants({ variant: "accent", size: "lg" })}
              >
                <Mail className="h-4 w-4" />
                Email {SITE_CONFIG.email}
              </a>
              <CopyButton
                text={SITE_CONFIG.email}
                variant="secondary"
                size="lg"
                toastMessage="Email copied to clipboard"
              >
                Copy
              </CopyButton>
            </div>
            <p className="mt-6 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              Atlanta, GA · Open to relocate
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
