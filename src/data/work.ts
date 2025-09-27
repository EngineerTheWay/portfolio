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
        "Managed the Air Force’s foreign language training pipeline across multiple schoolhouses, advising senior leaders on student progression, retention, and attrition. Improved reporting and decision-making by modernizing workflows and business systems with Microsoft 365 and Power Platform.",
      technologies: [
        "Workflow Automation",
        "Process Improvement",
        "Risk Analysis",
        "Microsoft 365 Enterprise",
        "Power Platform"
      ],
    },
    {
      title: "Operations Superintendent",
      company: "Defense Language Institute — Washington",
      region: "Washington, D.C.",
      description:
        "Oversaw a $17M training program across three campuses during a leadership vacancy, restoring continuity and student support. Introduced workflow automations with Microsoft 365 and Power Platform that streamlined reporting and reduced manual administrative processes.",
      technologies: [
        "Workflow Automation",
        "Process Improvement",
        "Microsoft 365 Enterprise",
        "Power Platform"
      ],
    },
    {
      title: "Military Language Instructor",
      company: "Defense Language Institute",
      region: "Monterey, CA",
      description:
        "Facilitated classroom instruction and mentored students through a 48-week course. Chaired academic intervention and attrition boards. Built a modular Excel dashboard that transformed and centralized raw database outputs, increasing visibility into class performance and highlighting at-risk students.",
      technologies: [
        "Instruction & Training",
        "Stakeholder Management",
        "Microsoft 365 Enterprise",
        "Excel"
      ],
    },
    {
      title: "Cyber Intelligence Analyst",
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

