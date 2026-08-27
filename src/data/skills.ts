export const skills = [
  {
    icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="8.5" y="14" width="7" height="7" rx="2"/><path d="M10 6.5h4"/><path d="M6.5 10v2a2 2 0 0 0 2 2h3.5"/><path d="M17.5 10v2a2 2 0 0 1-2 2H12"/></svg>`,
    title: "Systems Design",
    description:
      "Business systems that scale.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 2l3 3-3 3"/><path d="M4 11a7 7 0 0 1 7-7h9"/><path d="M7 22l-3-3 3-3"/><path d="M20 13a7 7 0 0 1-7 7H4"/><path d="m13 8-3 5h4l-3 5"/></svg>`,
    title: "Workflow Automation",
    description:
      "Automating the manual work.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v3"/><path d="M12 19v3"/><path d="m4.93 4.93 2.12 2.12"/><path d="m16.95 16.95 2.12 2.12"/><path d="M2 12h3"/><path d="M19 12h3"/><path d="m4.93 19.07 2.12-2.12"/><path d="m16.95 7.05 2.12-2.12"/><rect x="8" y="8" width="8" height="8" rx="2"/><path d="M10.5 12h3"/><path d="M12 10.5v3"/></svg>`,
    title: "Agentic AI Solutions",
    description:
      "AI agents that act on real data.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 11l2 2 4-4"/><path d="M17 20h4"/><path d="M19 18v4"/></svg>`,
    title: "Change Enablement",
    description:
      "Driving adoption that sticks.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/><path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/></svg>`,
    title: "Data Modeling",
    description:
      "Dataverse schemas that hold up.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4.4-3 8.3-7 9.5C8 20.3 5 16.4 5 12V6z"/><path d="m9 12 2 2 4-4"/></svg>`,
    title: "Security & Governance",
    description:
      "Access and controls by design.",
  },
];

export type Skill = (typeof skills)[number];
