export const SITE_CONFIG = {
  name: "Akshat Patel",
  title: "Akshat Patel — Software Engineer",
  description:
    "Software engineer. Production software, AI-enabled applications, REST APIs, and cloud-native systems on AWS. Oregon State University, Cum Laude, 2026.",
  url: "https://akshatpatel555.github.io",
  email: "akshat.px08@gmail.com",
  github: "https://github.com/akshatpatel555",
  linkedin: "https://www.linkedin.com/in/akshat-patel-b4a998185/",
} as const;

/**
 * Public StitchLine site. This is the Vercel domain for now.
 * When the custom domain is ready, change this value only.
 */
export const STITCHLINE_URL = "https://stitch-line.vercel.app";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/security", label: "Cloud" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const;

/**
 * Home page scroll-spy targets. "Cloud" is a route, not a section, so it
 * is appended as a link — otherwise it would be unreachable from the nav
 * while the visitor is on the home page.
 */
export const HOME_SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

/**
 * Routes surfaced in the home-page nav alongside the scroll-spy sections.
 */
export const HOME_NAV_ROUTES = [
  { href: "/security", label: "Cloud" },
] as const;

export const SOFTWARE_SKILLS = [
  {
    name: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "C/C++", "Dart", "SQL", "Bash"],
  },
  {
    name: "Web & Frameworks",
    skills: ["React", "Next.js", "Node.js", "Flutter", "FastAPI", "HTML/CSS"],
  },
  {
    name: "APIs & Data",
    skills: ["REST", "OpenAI API", "JSON", "Postman", "Data Modeling"],
  },
  {
    name: "Cloud & DevOps",
    skills: [
      "AWS (S3, Lambda, CloudFront, CloudFormation)",
      "AWS ROSA / OpenShift",
      "Docker",
      "GitHub CI/CD",
      "Jenkins",
      "Kubernetes",
    ],
  },
  {
    name: "Databases",
    skills: ["MongoDB", "DynamoDB", "MySQL", "SQL", "SQLite", "Redshift"],
  },
  {
    name: "AI/ML",
    skills: ["RAG", "GPT-4o / LLM integration", "OpenCV", "Prompt engineering", "GenAI"],
  },
] as const;

/** Cloud / infra skills shown on the Cloud page and the skills toggle. */
export const SECURITY_SKILLS = [
  {
    name: "AWS Services",
    skills: ["S3", "Lambda", "CloudFront", "CloudFormation", "IAM", "Step Functions", "Glue", "Kinesis"],
  },
  {
    name: "Access Control",
    skills: ["IAM roles", "Multi-portal RBAC", "Least privilege", "Customer vs vendor portals"],
  },
  {
    name: "Containers & Orchestration",
    skills: ["Docker", "OpenShift / ROSA", "Kubernetes concepts", "CI/CD pipelines"],
  },
  {
    name: "Data Platforms",
    skills: ["Spark", "Kafka", "Redshift", "Databricks", "DynamoDB"],
  },
  {
    name: "Reliability",
    skills: ["IaC", "Automated testing", "Git workflows", "Monitoring (CloudWatch)"],
  },
  {
    name: "Process & Delivery",
    skills: ["Agile/Scrum", "SDLC", "TDD", "Stakeholder collaboration"],
  },
] as const;
