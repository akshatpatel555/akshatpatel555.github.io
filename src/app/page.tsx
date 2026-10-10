import { Hero } from "@/components/sections/hero";
import { RecruiterTLDR } from "@/components/sections/recruiter-tldr";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { SkillsGrid } from "@/components/sections/skills-grid";
import { ContactHome } from "@/components/sections/contact-home";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <RecruiterTLDR />
      <FeaturedProjects />
      <Experience />
      <Education />
      <SkillsGrid />
      <ContactHome />
    </>
  );
}
