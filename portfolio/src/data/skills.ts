// src/data/skills.ts
export type SkillLevel = "expert" | "advanced" | "intermediate";
export type SkillCategoryId = "languages" | "frameworks" | "design" | "tools";

export type SkillFact = {
  icon?: "time" | "projects" | "cert";
  text: { pl: string; en: string };
};

export type Skill = {
  id: string;
  name: string;
  level: SkillLevel;
  facts?: SkillFact[]; // pokazywane w dymku na hover
};

export type SkillCategory = {
  id: SkillCategoryId;
  label: { pl: string; en: string };
  items: Skill[];
};

export const levelLabel: Record<SkillLevel, { pl: string; en: string }> = {
  expert: { pl: "Ekspert", en: "Expert" },
  advanced: { pl: "Zaawansowany", en: "Advanced" },
  intermediate: { pl: "Średniozaawansowany", en: "Intermediate" },
};

export const levelDots: Record<SkillLevel, number> = {
  expert: 5,
  advanced: 4,
  intermediate: 3,
};

export const levelProgress: Record<SkillLevel, number> = {
  expert: 100,
  advanced: 78,
  intermediate: 58,
};

export const skills: SkillCategory[] = [
  {
    id: "languages",
    label: { pl: "Języki", en: "Languages" },
    items: [
      {
        id: "cs",
        name: "C#",
        level: "advanced",
        facts: [
          { icon: "time", text: { pl: "2+ lata", en: "2+ years" } },
          {
            icon: "projects",
            text: { pl: "3+ projektów", en: "3+ projects" },
          },
        ],
      },
      {
        id: "ts",
        name: "TypeScript",
        level: "advanced",
        facts: [
          { icon: "time", text: { pl: "2+ lata", en: "2+ years" } },
          { icon: "projects", text: { pl: "5+ projektów", en: "5+ projects" } },
        ],
      },
      {
        id: "js",
        name: "JavaScript",
        level: "advanced",
        facts: [
          { icon: "time", text: { pl: "3+ lata", en: "3+ years" } },
          {
            icon: "projects",
            text: { pl: "10+ projektów", en: "10+ projects" },
          },
        ],
      },
      { id: "sql", name: "SQL", level: "advanced" },
      { id: "htmlcss", name: "HTML/CSS", level: "expert" },
    ],
  },
  {
    id: "frameworks",
    label: { pl: "Frameworks & Libraries", en: "Frameworks & Libraries" },
    items: [
      { id: "dotnet", name: ".NET", level: "advanced" },
      { id: "ef", name: "EF Core", level: "advanced" },
      { id: "react", name: "React", level: "advanced" },
      { id: "next", name: "Next.js", level: "advanced" },
      { id: "tailwind", name: "Tailwind CSS", level: "expert" },
      { id: "xunit", name: "xUnit", level: "intermediate" },
      { id: "mediatR", name: "MediatR", level: "advanced" },
    ],
  },
  {
    id: "design",
    label: { pl: "Design & UX", en: "Design & UX" },
    items: [
      { id: "figma", name: "Figma", level: "advanced" },
      { id: "miro", name: "Miro", level: "advanced" },
      { id: "ux", name: "UI/UX Design", level: "intermediate" },
      { id: "responsive", name: "Responsive Design", level: "advanced" },
    ],
  },
  {
    id: "tools",
    label: { pl: "Tools & DevOps", en: "Tools & DevOps" },
    items: [
      { id: "git", name: "Git & GitHub", level: "expert" },
      { id: "jenkins", name: "Jenkins", level: "expert" },
      { id: "vscode", name: "VS Code / VS", level: "expert" },
      { id: "docker", name: "Docker", level: "intermediate" },
      { id: "azure", name: "Azure", level: "intermediate" },
    ],
  },
];
