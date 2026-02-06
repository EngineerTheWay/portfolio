export const skills = [
  {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"> <path d="M21 12a9 9 0 1 1-2.64-6.36"/> <polyline points="21 3 21 9 15 9"/> </svg>`,
    title: "Systems Analysis",
    description:
      "Bridging business needs and technical solutions by analyzing processes, system constraints, and requirements to inform practical, scalable designs.",
  },
  {
    icon: `<svg width="48" height="48" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M244.658 0H121.707a55.502 55.502 0 0 0 55.502 55.502h22.649V77.37c.02 30.625 24.841 55.447 55.466 55.467V10.666C255.324 4.777 250.55 0 244.658 0z"/><path d="M183.822 61.262H60.872c.019 30.625 24.84 55.447 55.466 55.467h22.649v21.938c.039 30.625 24.877 55.43 55.502 55.43V71.93c0-5.891-4.776-10.667-10.667-10.667z"/><path d="M122.951 122.489H0c0 30.653 24.85 55.502 55.502 55.502h22.72v21.867c.02 30.597 24.798 55.408 55.396 55.466V133.156c0-5.891-4.776-10.667-10.667-10.667z"/></svg>`,
    title: "Solution Delivery",
    description:
      "Supporting iterative delivery by translating requirements into implementable work and guiding solutions from concept through adoption.",
  },
  {
        icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/></svg>`,
    title: "Process Improvement",
    description:
      "Evaluating workflows & systems to identify inefficiencies and design improvements that enhance reliability and operational effectiveness.",
  },
  {
    icon: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M40.4898 25.9933C41.9074 25.9933 42.5339 27.7781 41.4273 28.6641L31.9916 36.2196V39.5083C31.9916 41.9935 29.9769 44.0083 27.4916 44.0083H20.5009C18.0156 44.0083 16.0009 41.9935 16.0009 39.5083V36.2198L6.5617 28.6643C5.45489 27.7784 6.08134 25.9933 7.49906 25.9933H40.4898Z" fill="currentColor"/><path d="M17.5009 17.9991H30.4903C32.3266 17.9991 33.8327 19.4133 33.9787 21.212L33.9903 21.4991V23.9991H14.0009V21.4991C14.0009 19.6627 15.4151 18.1567 17.2138 18.0107L17.5009 17.9991Z" fill="currentColor"/><path d="M24.0009 4C27.3146 4 30.0009 6.68629 30.0009 10C30.0009 13.3137 27.3146 16 24.0009 16C20.6872 16 18.0009 13.3137 18.0009 10C18.0009 6.68629 20.6872 4 24.0009 4Z" fill="currentColor"/></svg>`,
    title: "Training & Mentorship",
    description:
      "Supporting individuals and teams through training, knowledge transfer, and mentorship to build capability and long-term adoption of new systems.",
  },
];

export type Skill = (typeof skills)[number];
