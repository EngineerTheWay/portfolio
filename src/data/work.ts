import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
    {
      title: "Training Program Manager",
      company: "Defense Language Institute",
      region: "Monterey, CA",
      description:
        "Led the design and delivery of a multi‑tenant platform, decomposed critical monolith paths into services, improved p95 latency by 40%, defined SLOs and on‑call rotations, and mentored junior engineers.",
      technologies: [
        "TypeScript",
        "Node.js",
        "React",
        "PostgreSQL",
        "Redis",
        "AWS",
        "Docker",
        "Kubernetes",
        "Terraform",
        "GraphQL",
      ],
    },
  {
    title: "Operations Superintendent",
    company: "Defense Language Institute — Washington",
    region: "Washington, D.C.",
    description:
      "Led the design and delivery of a multi‑tenant platform, decomposed critical monolith paths into services, improved p95 latency by 40%, defined SLOs and on‑call rotations, and mentored junior engineers.",
    technologies: [
      "TypeScript",
      "Node.js",
      "React",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GraphQL",
    ],
  },
  {
    title: "Military Language Instructor",
    company: "Defense Language Insitute",
    region: "Monterey, CA",
    description:
      "Architected event‑driven payment services with idempotency and retries, introduced Kafka for async processing, enforced API versioning, and drove observability with structured logging and tracing.",
    technologies: [
      "TypeScript",
      "NestJS",
      "Kafka",
      "PostgreSQL",
      "Redis",
      "gRPC",
      "OpenTelemetry",
      "AWS",
    ],
  },
  {
    title: "Cyber Intelligence Analysis",
    company: "Marine Forces Cyber Commander (MARFORCYBER)",
    region: "Maryland, USA",
    description:
      "Owned the design system and SSR/ISR strategy, improved Core Web Vitals (LCP/INP) into the green, and shipped accessible UI components with strong tests and story coverage.",
    technologies: [
      "React",
      "Next.js",
      "Astro",
      "Tailwind CSS",
      "Playwright",
      "Vitest",
    ],
  },
  {
    title: "Cryptologic Language Analyst",
    company: "United States Cyber Command (USCYBERCOM)",
    region: "Georgia, USA",
    description:
      "Built MVPs end‑to‑end: designed REST/GraphQL APIs, set up CI/CD with preview environments, introduced feature flags, and migrated data to Postgres.",
    technologies: [
      "Node.js",
      "Express",
      "GraphQL",
      "Supabase",
      "PostgreSQL",
      "GitHub Actions",
      "Docker",
    ],
  },
];

export type WorkItem = (typeof work)[number];

