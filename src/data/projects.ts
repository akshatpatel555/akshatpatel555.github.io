import { STITCHLINE_URL } from "@/lib/constants";

export type ProjectTag =
  | "Full-Stack"
  | "Security"
  | "AI"
  | "Web"
  | "Infra"
  | "Mobile"
  | "Forensics"
  | "Detection"
  | "Assessment"
  | "Machine Learning"
  | "Academic";

/** Which index an entry belongs to. Drives /projects vs /security (Cloud). */
export type ProjectCategory = "software" | "security";

export type ContentType = "project" | "examination" | "assessment";

export const CONTENT_TYPE_LABEL: Record<ContentType, string> = {
  project: "Case Study",
  examination: "Forensic Examination",
  assessment: "Security Assessment",
};

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption?: string;
  orientation?: "portrait" | "landscape";
}

export interface ToolingItem {
  name: string;
  purpose?: string;
}

export interface MethodStep {
  title: string;
  detail: string;
}

export interface FindingGroup {
  group?: string;
  lead?: string;
  items: string[];
}

export interface LimitEntry {
  claim: string;
  wouldConfirm?: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tags: ProjectTag[];
  tech: string[];
  role: string;
  period: string;
  status: string;
  image?: string;
  imageFit?: "cover" | "contain";
  confidential?: boolean;
  links?: { label: string; href: string }[];
  screenshots?: ProjectScreenshot[];
  category?: ProjectCategory;
  contentType?: ContentType;
  context?: string;
  attribution?: string;
  featuredOnSecurity?: boolean;
  securityOrder?: number;
  problem?: string;
  solution?: string;
  architecture?: string[];
  securityReliability?: string[];
  designTradeoffs?: string[];
  results?: string[];
  scope?: string;
  scopeNotes?: string[];
  environment?: string;
  tooling?: ToolingItem[];
  methodIntro?: string;
  method?: MethodStep[];
  findings?: FindingGroup[];
  findingsNote?: string;
  limitsIntro?: string;
  limits?: LimitEntry[];
  takeaway?: string;
  reference?: string;
}

export const ALL_TAGS: ProjectTag[] = [
  "Full-Stack",
  "AI",
  "Infra",
  "Mobile",
  "Web",
  "Academic",
  "Security",
  "Machine Learning",
];

export const PROJECTS: Project[] = [
  {
    slug: "stitchline",
    title: "StitchLine",
    tagline:
      "Cloud-native ops platform for fashion design businesses — customer & vendor portals on AWS",
    description:
      "Production platform for wedding-dress ateliers, custom fashion designers, and alteration studios. Multi-portal IAM, serverless APIs, CloudFront hosting, and Kubernetes on AWS ROSA. All commercial flows are USD-denominated.",
    tags: ["Full-Stack", "Infra", "Mobile", "Web"],
    tech: [
      "AWS Lambda",
      "S3",
      "CloudFront",
      "IAM",
      "AWS ROSA / OpenShift",
      "Flutter",
      "React",
      "TypeScript",
      "Docker",
    ],
    role: "Sole engineer / founder",
    period: "2025 – Present",
    status: "Early access",
    image: "/images/projects/stitchline-dashboard.png",
    imageFit: "cover",
    confidential: true,
    category: "software",
    contentType: "project",
    featuredOnSecurity: true,
    securityOrder: 1,
    links: [{ label: "StitchLine", href: STITCHLINE_URL }],
    screenshots: [
      {
        src: "/images/projects/stitchline-dashboard.png",
        alt: "StitchLine dashboard on a tablet, with orders, due dates, and status",
        caption:
          "Studio dashboard — active orders, due dates, and status in one work queue.",
        orientation: "landscape",
      },
      {
        src: "/images/projects/stitchline-customers.png",
        alt: "StitchLine customer list with search",
        caption:
          "Customer list — search by name or phone instead of flipping a notebook.",
        orientation: "landscape",
      },
      {
        src: "/images/projects/stitchline-order-detail.png",
        alt: "StitchLine order with notes, measurements, photos, and payment",
        caption:
          "Order detail — notes, measurements, photos, and the USD balance on one job.",
        orientation: "landscape",
      },
      {
        src: "/images/projects/stitchline-handwriting.png",
        alt: "Handwritten fitting notes on the StitchLine pen canvas",
        caption:
          "S Pen fitting notes on the order, the same way a studio already sketches.",
        orientation: "landscape",
      },
    ],
    problem:
      "Custom fashion businesses run concurrent orders, fittings, deposits, and due dates. Paper notebooks and ad-hoc spreadsheets break under that load: no reliable search, no shared measurement history, no role-separated views for clients vs. the shop floor, and no audit trail when payment status changes mid-season. The work is not limited to one cultural niche — wedding dress designers, ateliers, and alteration shops all need the same operational spine.",
    solution:
      "StitchLine is a multi-portal operations platform. Customers track orders and USD balances through a customer portal. Business and vendor staff manage work queues, measurements, and fulfillment through a separate vendor portal — each surface gated by IAM roles. Started as a tablet-first Flutter/SQLite app for a family atelier; evolved into a cloud-native multi-tenant system on AWS.",
    architecture: [
      "Customer portal and vendor/business portal with distinct IAM roles and least-privilege access",
      "Serverless APIs on AWS Lambda for order, payment, and profile workflows",
      "Static frontends on S3 + CloudFront for low-latency global delivery",
      "Containerized workloads on AWS ROSA (OpenShift on AWS) where longer-running services are needed",
      "Flutter tablet clients sharing the same cloud APIs as browser portals",
      "Normalized domain model: customers, orders, garment/work tags, measurements, media, USD payment state",
    ],
    securityReliability: [
      "IAM-backed portal separation — customers never share staff credentials",
      "Confidential production codebase; architecture and product decisions documented without exposing implementation dumps",
      "USD-only commercial flows for consistent pricing and reconciliation",
    ],
    designTradeoffs: [
      "Local-first tablet roots vs. cloud multi-portal — kept tablet UX while moving authority and sync to AWS",
      "Separate portals vs. one mega-app — clearer authZ boundaries and safer handoff between clients and staff",
      "ROSA/Kubernetes for select services vs. Lambda-only — use containers where process lifetime and ops model demand it",
    ],
    results: [
      "Replaced paper order tracking with searchable digital workflows in daily production use",
      "Multi-portal IAM model supports customer self-service and vendor operations without shared logins",
      "Cloud-native hosting (S3/CloudFront/Lambda/ROSA) ready for scale beyond a single shop",
    ],
  },
  {
    slug: "ai-workout-generator",
    title: "AI-Powered Workout Generator",
    tagline:
      "Senior capstone — GPT-4o personalized workouts + OpenCV form feedback on AWS-compatible infra",
    description:
      "End-to-end fitness platform: LLM-powered workout generation with GPT-4o, computer-vision form coaching via OpenCV, FastAPI + MongoDB backend, multi-factor auth, Dockerized services, and CI/CD.",
    tags: ["Full-Stack", "AI", "Infra", "Academic", "Mobile"],
    tech: [
      "Python",
      "FastAPI",
      "MongoDB",
      "React",
      "TypeScript",
      "Flutter",
      "GPT-4o",
      "OpenCV",
      "Docker",
      "AWS",
      "JWT",
      "PyOTP",
    ],
    role: "Backend / full-stack lead (team)",
    period: "Senior Capstone · CS46x",
    status: "Shipped · Academic",
    image: "/images/projects/fitness-ai-workout.jpg",
    imageFit: "cover",
    category: "software",
    contentType: "project",
    context: "CS46x Senior Capstone · Oregon State University",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/akshatpatel555/OSU-Capstone-Cross-Platform-Workout-Trainer",
      },
    ],
    screenshots: [
      {
        src: "/images/projects/fitness-ai-workout.jpg",
        alt: "AI-generated workout plan screen",
        caption: "GPT-4o personalized workout generation adapted to goals and training history.",
        orientation: "portrait",
      },
      {
        src: "/images/projects/fitness-opencv-form.jpg",
        alt: "OpenCV pose estimation form feedback",
        caption: "OpenCV pose landmarks and form coaching cues during exercise analysis.",
        orientation: "portrait",
      },
    ],
    problem:
      "Most consumer fitness apps ship static plans. Athletes need workouts that adapt to goals, real-time form feedback instead of blind reps, and auth stronger than password-only — deployable as a real cloud service.",
    solution:
      "Agile team built an end-to-end tracker and workout generator: GPT-4o plan generation, OpenCV pose analysis, FastAPI + MongoDB, React/TypeScript (and Flutter path), JWT/PyOTP MFA, Docker + GitHub CI/CD on AWS-compatible infrastructure.",
    architecture: [
      "GPT-4o workout generation via structured OpenAI API workflows",
      "OpenCV computer-vision pipeline for pose landmarks and form feedback",
      "FastAPI REST API with MongoDB for users, workouts, and sessions",
      "React/TypeScript web client; Flutter mobile lineage",
      "Dockerized services with GitHub CI/CD targeting AWS-compatible deployment",
    ],
    securityReliability: [
      "JWT access tokens and PyOTP multi-factor authentication",
      "AI and vision workloads behind authenticated, validated API boundaries",
    ],
    designTradeoffs: [
      "LLM generation vs. template libraries — personalization over static plans, with structured outputs for reliability",
      "On-device CV vs. server-side analysis — server path for consistent models and easier ops during the capstone",
    ],
    results: [
      "Shipped senior capstone integrating LLM generation, CV feedback, and cloud-ready backend services",
      "Cross-team API contracts enabled parallel frontend/backend iteration",
      "Demonstrated auth → generate workout → track → form feedback end-to-end",
    ],
  },
  {
    slug: "graphics-engine",
    title: "3D Graphics Rendering Engine",
    tagline: "OpenGL simulations with PBR lighting, custom GLSL shaders, and keyframe animation",
    description:
      "Academic graphics engine exploring physically-based lighting, custom GLSL shaders, and keyframe animation pipelines in C++ / OpenGL.",
    tags: ["Academic"],
    tech: ["C++", "OpenGL", "GLSL"],
    role: "Individual contributor",
    period: "Coursework",
    status: "Academic",
    category: "software",
    contentType: "project",
    problem: "Need a controllable environment to study real-time rendering techniques beyond engine black boxes.",
    solution: "Built a custom OpenGL pipeline with shader-driven lighting and animation experiments.",
    architecture: [
      "C++ OpenGL application loop",
      "Custom GLSL shaders for lighting and materials",
      "Keyframe animation experiments",
    ],
    results: ["Delivered course demos covering PBR-style lighting and shader iteration"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

/** Entries for /security (Cloud), ordered by securityOrder. */
export function getSecurityCaseStudies(): Project[] {
  return PROJECTS.filter((p) => p.featuredOnSecurity)
    .sort(
      (a, b) =>
        (a.securityOrder ?? Number.MAX_SAFE_INTEGER) -
        (b.securityOrder ?? Number.MAX_SAFE_INTEGER)
    );
}

export function getContentTypeLabel(project: Project): string {
  return CONTENT_TYPE_LABEL[project.contentType ?? "project"];
}
