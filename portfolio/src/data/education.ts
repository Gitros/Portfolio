// src/data/education.ts
import type { LucideIcon } from "lucide-react";
import {
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Users,
  Trophy,
  Code2,
} from "lucide-react";

export type Locale = "pl" | "en";

export type EducationItem = {
  id: string;
  side: "left" | "right";
  dateLabel: { pl: string; en: string };
  title: { pl: string; en: string };
  subtitle: { pl: string; en: string };
  description: { pl: string; en: string };
  badgeVariant: "green" | "indigo";
  dotColor: "green" | "indigo";
  icon: LucideIcon;
  highlights: Array<{
    icon: LucideIcon;
    text: { pl: string; en: string };
  }>;
};

export const education: EducationItem[] = [
  {
    id: "tech",
    side: "left",
    dateLabel: { pl: "2019 - 2023", en: "2019 - 2023" },
    title: { pl: "Technik Informatyk", en: "IT Technician" },
    subtitle: { pl: "Technikum Informatyczne", en: "IT Technical High School" },
    description: {
      pl: "Podstawy programowania, sieci komputerowych i systemów.",
      en: "Fundamentals of programming, computer networks and systems.",
    },
    badgeVariant: "green",
    dotColor: "green",
    icon: GraduationCap,
    highlights: [
      {
        icon: Award,
        text: { pl: "Certyfikat Grafika", en: "Graphics Certificate" },
      },
      {
        icon: Trophy,
        text: {
          pl: "Egzaminy zawodowe - zdane",
          en: "Vocational exams - passed",
        },
      },
      {
        icon: Users,
        text: {
          pl: "Organizacja turniejów esportowych",
          en: "Esports tournaments organization",
        },
      },
      {
        icon: BookOpen,
        text: { pl: "Tytuł Technika Informatyka", en: "IT Technician title" },
      },
    ],
  },
  {
    id: "uni",
    side: "right",
    dateLabel: { pl: "2023 - Obecnie", en: "2023 - Present" },
    title: { pl: "Informatyka", en: "Computer Science" },
    subtitle: { pl: "Studia wyższe", en: "Higher education" },
    description: {
      pl: "Inżynieria oprogramowania i nowoczesne technologie.",
      en: "Software engineering and modern technologies.",
    },
    badgeVariant: "indigo",
    dotColor: "indigo",
    icon: GraduationCap,
    highlights: [
      {
        icon: Code2,
        text: {
          pl: "Specjalizacja: Programista Aplikacji Biznesowych",
          en: "Specialization: Business Apps Developer",
        },
      },
      {
        icon: Briefcase,
        text: {
          pl: "Praca w Piccolo jako IT Specialist",
          en: "Work at Piccolo as IT Specialist",
        },
      },
      {
        icon: Trophy,
        text: {
          pl: "Rozwój projektów w React/.NET",
          en: "Projects development in React/.NET",
        },
      },
    ],
  },
];

export const educationStats = [
  {
    id: "years",
    value: { pl: "4+", en: "4+" },
    label: { pl: "Lata nauki", en: "Years of learning" },
  },
  {
    id: "certs",
    value: { pl: "3+", en: "3+" },
    label: { pl: "Certyfikaty", en: "Certificates" },
  },
  {
    id: "projects",
    value: { pl: "10+", en: "10+" },
    label: { pl: "Projektów", en: "Projects" },
  },
  {
    id: "work",
    value: { pl: "2+", en: "2+" },
    label: { pl: "Doświadczenie zawodowe", en: "Work experience" },
  },
] as const;
