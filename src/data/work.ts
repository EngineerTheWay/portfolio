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
        "Managed the Air Force’s foreign language training pipeline across numerous schoolhouses. Advised senior leaders on program issues and student progression, retention, and attrition decisions. Modernized workflows and developed various internal business systems.",
      technologies: [
        "Program Management",
        "Risk Analysis",
        "Process Improvement",
        "Microsoft 365 Enterprise",
        "Power Platform"
      ],
    },
    {
      title: "Operations Superintendent",
      company: "Defense Language Institute — Washington",
      region: "Washington, D.C.",
      description:
        "Oversaw a $17M training program across three campuses during a leadership vacancy, restoring continuity and student support. Initiated various process improvement and digital transformation initiatives using Microsoft 365, Power Platform, and other software tools.",
      technologies: [
        "Operations Management",
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
        "Faciliated classroom instruction and mentored students through a 48 week course. Chaired academic intervention and attrition boards. Developed a stopgap solution to format and centralize database outputs, enabling centralized performance tracking and supporting early academic interventions.",
      technologies: [
        "Instruction & Training",
        "Performance Analytics",
        "Stakeholder Management",
        "Microsoft 365 Enterprise"
      ],
    },
    {
      title: "Cyber Intelligence Analyst",
      company: "Marine Forces Cyber Command (MARFORCYBER)",
      region: "Fort Meade, MD",
      description:
        "Conducted all-source cyber intelligence analysis in support of national-level cyber operations planning. Improved collaboration and planning through implementing Jira/Confluence to manage requirements. Authored numerous reports and provided daily briefings on adversary cyber activity.",
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
        "Led a team of linguists and cyber analysts, producing strategic reports that guided cyber operations and mission planning. Analyzed foreign communications, extracting linguistic and technical insights. Managed workflows for analysis and QA, ensuring accuracy of intelligence products. ",
      technologies: [
        "Intelligence Analysis",
        "Cyber Operations",
        "Workflow Design",
        "Team Leadership",
        "Linguistic Analysis"
      ],
    }
];

export type WorkItem = (typeof work)[number];

