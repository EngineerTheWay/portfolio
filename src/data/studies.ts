export const studies = [
    {
      title: "M.S. in Information Technology",
      institution: "Florida Institute of Technology",
      description:
        "Focus on enterprise information systems and cybersecurity, with broad exposure to business analysis and project management.",
      tags: [
        "Information Technology",
        "Cybersecurity",
        "IT Project Management",
        "Business & Systems Analysis",
        "Cloud Computing",
        "Databases",
      ],
    },
  {
    title: "B.A. in Foreign Language",
    institution: "Defense Language Institute",
    description:
      "Completed 64 weeks of intensive foreign language study in Persian-Farsi. Completed additional transfer credits in Computer Science and Business Administration at the University of Maryland.",
    tags: [
      "Foreign Language",
      "Persian-Farsi",
      "Intelligence Analysis",
      "Literary Analysis",
      "Introductory Programming",
      "Technical Writing",
      
    ],
  },
  


];

export type StudyItem = (typeof studies)[number];

