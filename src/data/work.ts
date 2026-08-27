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
      // TODO: replace the placeholder description and region before publishing.
      title: "Cloud Solution Architect Fellow",
      year: "2026",
      company: "Microsoft",
      region: "United States (Remote)",
      description:
        "Selected for a competitive Hiring Our Heroes fellowship with Microsoft Federal’s AI and Business Solutions organization. Gaining hands-on exposure to customer discovery, solution design, technical demonstrations, and adoption while building deeper expertise in business applications and agentic AI.  ",
      technologies: [
        "Power Platform",
        "Copilot Studio",
        "Dynamics 365",
        "Microsoft 365",
        "Business Applications",
        "AI Solutioning"
      ],
    },
    {
      title: "Academic Program Manager",
      year: "2025",
      company: "Defense Language Institute",
      region: "Monterey, CA",
      description:
        "Managed the Air Force’s foreign language training pipeline across multiple schoolhouses, advising senior leaders on student progression, retention, and attrition. Improved reporting and decision-making by modernizing workflows and business systems with Microsoft 365 and Power Platform.",
      technologies: [
        "Workflow Automation",
        "Process Improvement",
        "Risk Analysis",
        "Microsoft 365",
        "Power Platform"
      ],
    },
    {
      title: "Operations Superintendent",
      year: "2024",
      company: "Defense Language Institute — Washington",
      region: "Washington, D.C.",
      description:
        "Supported oversight of a $17M training program across three campuses during a leadership vacancy, restoring continuity and student support. Introduced workflow automations with Microsoft 365 and Power Platform that streamlined reporting and reduced manual administrative processes.",
      technologies: [
        "Workflow Automation",
        "Process Improvement",
        "Microsoft 365",
        "Power Platform"
      ],
    },
    {
      title: "Military Language Instructor",
      year: "2023",
      company: "Defense Language Institute",
      region: "Monterey, CA",
      description:
        "Facilitated classroom instruction and mentored students through a 48-week course. Chaired academic intervention and attrition boards. Built a modular Excel dashboard that transformed and centralized raw database outputs, increasing visibility into class performance and highlighting at-risk students.",
      technologies: [
        "Instruction & Training",
        "Stakeholder Management",
        "Microsoft 365",
        "Excel"
      ],
    },
    {
      title: "Cyber Intelligence Analyst",
      year: "2022",
      company: "Marine Forces Cyber Command (MARFORCYBER)",
      region: "Fort Meade, MD",
      description:
        "Conducted all-source intelligence analysis in support of national-level cyber operations planning. Delivered daily briefings and reports on adversary activity to inform operations. Implemented Jira and Confluence to streamline requirements management and collaboration across cyber teams.",
      technologies: [
        "Cyber Intelligence",
        "Strategic Analysis",
        "Briefing & Reporting",
        "Jira",
        "Confluence"
      ],
    },
    {
      title: "Cryptologic Language Analyst",
      year: "2019",
      company: "United States Cyber Command (USCYBERCOM)",
      region: "Fort Gordon, GA",
      description:
        "Led a team of linguists and cyber analysts producing strategic reports that guided cyber operations and mission planning. Analyzed foreign communications for technical and linguistic insights, while managing classified workflow tools to ensure accuracy of intelligence products.",
      technologies: [
        "Intelligence Analysis",
        "Cyber Operations",
        "Foreign Language",
        "Workflow Design"
      ],
    }
];

export type WorkItem = (typeof work)[number];

