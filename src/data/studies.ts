export const studies = [
    {
      title: "M.S. Information Technology",
      institution: "Florida Institute of Technology",
      description:
        "Focus on enterprise information systems and cybersecurity, with broad exposure to business analysis, IT project management, and enterprise applications.",
      tags: [
        "Information Technology",
        "Cybersecurity",
        "Project Management",
        "Databases",
        "Business & Systems Analysis",
        "Cloud Computing",
        "Information Systems"
      ],
    },
  {
    title: "B.A. Foreign Language",
    institution: "Defense Language Institute",
    description:
      "Completed 64 weeks of intensive foreign language study in Persian-Farsi. Completed additional transfer credits in Computer Science and Business Admin.",
    tags: [
      "Foreign Language",
      "Persian-Farsi",
      "Intelligence Analysis",
      "Literary Analysis",
      "Object-Oriented Programming",
      "Technical Writing",
      "Business Administration"
    ],
  },
  


];

export type StudyItem = (typeof studies)[number];

