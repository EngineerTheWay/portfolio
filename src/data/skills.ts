export const skills = [
  {
    icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="8.5" y="14" width="7" height="7" rx="2"/><path d="M10 6.5h4"/><path d="M6.5 10v2a2 2 0 0 0 2 2h3.5"/><path d="M17.5 10v2a2 2 0 0 1-2 2H12"/></svg>`,
    title: "Systems Design",
    description:
      "Connecting business needs, processes, and technology to create practical, scalable solutions that improve how organizations operate.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 2l3 3-3 3"/><path d="M4 11a7 7 0 0 1 7-7h9"/><path d="M7 22l-3-3 3-3"/><path d="M20 13a7 7 0 0 1-7 7H4"/><path d="m13 8-3 5h4l-3 5"/></svg>`,
    title: "Workflow Automation",
    description:
      "Reducing manual effort and improving operational efficiency through automation, intelligent workflows, and modern business applications.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v3"/><path d="M12 19v3"/><path d="m4.93 4.93 2.12 2.12"/><path d="m16.95 16.95 2.12 2.12"/><path d="M2 12h3"/><path d="M19 12h3"/><path d="m4.93 19.07 2.12-2.12"/><path d="m16.95 7.05 2.12-2.12"/><rect x="8" y="8" width="8" height="8" rx="2"/><path d="M10.5 12h3"/><path d="M12 10.5v3"/></svg>`,
    title: "Agentic AI Solutions",
    description:
      "Applying AI-powered experiences and agentic systems to improve decision-making, streamline work, and enhance organizational effectiveness.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 11l2 2 4-4"/><path d="M17 20h4"/><path d="M19 18v4"/></svg>`,
    title: "Change Enablement",
    description:
      "Helping people successfully adopt new technologies through training, mentorship, and change management that drives success.",
  },
];

export type Skill = (typeof skills)[number];
