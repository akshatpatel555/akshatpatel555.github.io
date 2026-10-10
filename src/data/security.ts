/** Content for /security — Cloud & Infrastructure. */

export const SECURITY_POSITIONING = {
  headline: "Cloud-Native Systems · AWS · Multi-Portal IAM",
  certification: "Generative AI Mastermind — OutSkill · Theoretical CS — OSU CoE",
} as const;

export interface ToolingGroup {
  name: string;
  items: string[];
}

export const SECURITY_TOOLING: ToolingGroup[] = [
  {
    name: "AWS & Hosting",
    items: [
      "Amazon S3",
      "CloudFront",
      "AWS Lambda",
      "CloudFormation (IaC)",
      "IAM roles & policies",
      "Step Functions",
      "Glue",
      "Kinesis",
      "CloudWatch",
      "Redshift",
    ],
  },
  {
    name: "Containers & CI/CD",
    items: [
      "Docker",
      "AWS ROSA / OpenShift",
      "Kubernetes concepts",
      "GitHub Actions / CI/CD",
      "Jenkins",
      "GitLab CI/CD",
    ],
  },
  {
    name: "Data & Streaming",
    items: [
      "Apache Spark",
      "Apache Kafka",
      "DynamoDB",
      "MongoDB",
      "MySQL / RDBMS",
      "Databricks",
    ],
  },
  {
    name: "Access & Application Security",
    items: [
      "Multi-portal RBAC",
      "Least-privilege IAM",
      "JWT",
      "PyOTP MFA",
      "Secrets via environment / IAM",
      "Input validation on APIs",
    ],
  },
];

export const SECURITY_COURSEWORK = [
  "Computer Networks",
  "Network Security",
  "Operating Systems",
  "Parallel Programming",
  "Database Systems",
  "Software Engineering I & II",
] as const;

export const ADDITIONAL_SECURITY_WORK = [
  {
    title: "StitchLine multi-portal IAM",
    detail:
      "Customer vs vendor portals with role-separated access on AWS — fashion business ops without shared credentials.",
  },
  {
    title: "LLM-powered RAG at NovaTech",
    detail:
      "Production RAG full-stack solutions connecting sales, inventory, and production data with AWS CloudFormation deployments.",
  },
] as const;

export const EXTERNAL_VERIFICATION = [
  {
    label: "GitHub",
    href: "https://github.com/akshatpatel555",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/akshat-patel-b4a998185/",
  },
] as const;
