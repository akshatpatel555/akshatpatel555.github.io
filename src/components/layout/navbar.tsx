"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_LINKS, HOME_SECTIONS, HOME_NAV_ROUTES } from "@/lib/constants";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-spy for homepage sections
  const updateActiveSection = useCallback(() => {
    if (!isHome) return;
    const sections = HOME_SECTIONS.map((s) => s.id);
    let current = "hero";
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100) current = id;
      }
    }
    setActiveSection(current);
  }, [isHome]);

  useEffect(() => {
    if (!isHome) return;
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [isHome, updateActiveSection]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Escape closes the mobile menu — expected of any expanded disclosure.
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass border-b border-border shadow-sm" : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-foreground transition-opacity hover:opacity-70"
        >
          akshat<span className="text-accent">patel</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {isHome
            ? [
                ...HOME_SECTIONS.map((section) => (
                  <button
                    key={section.id}
                    type="button"
                    aria-current={activeSection === section.id ? "true" : undefined}
                    onClick={() => scrollTo(section.id)}
                    className={cn(
                      "rounded-lg px-3 py-2 text-base font-medium transition-colors cursor-pointer",
                      activeSection === section.id
                        ? "text-accent"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {section.label}
                  </button>
                )),
                ...HOME_NAV_ROUTES.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className="rounded-lg px-3 py-2 text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {route.label}
                  </Link>
                )),
              ]
            : NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "rounded-lg px-3 py-2 text-base font-medium transition-colors",
                      isActive
                        ? "text-accent"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
          <div className="ml-2 border-l border-border pl-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-foreground transition-colors hover:bg-muted cursor-pointer"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            id="mobile-menu"
            className="overflow-hidden border-b border-border glass md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {isHome
                ? [
                    ...HOME_SECTIONS.map((section) => (
                      <button
                        key={section.id}
                        type="button"
                        aria-current={activeSection === section.id ? "true" : undefined}
                        onClick={() => scrollTo(section.id)}
                        className={cn(
                          "rounded-lg px-3 py-3 text-left text-base font-medium transition-colors cursor-pointer",
                          activeSection === section.id
                            ? "bg-accent/10 text-accent"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {section.label}
                      </button>
                    )),
                    ...HOME_NAV_ROUTES.map((route) => (
                      <Link
                        key={route.href}
                        href={route.href}
                        className="rounded-lg px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {route.label}
                      </Link>
                    )),
                  ]
                : NAV_LINKS.map((link) => {
                    const isActive =
                      link.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(link.href);
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "rounded-lg px-3 py-3 text-base font-medium transition-colors",
                          isActive
                            ? "bg-accent/10 text-accent"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
