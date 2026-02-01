import type { Locale } from "./locales";

export type Messages = {
  nav: {
    projects: string;
    skills: string;
    education: string;
    about: string;
    contact: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    ctaProjects: string;
  };
};

const pl: Messages = {
  nav: {
    projects: "Projekty",
    skills: "Umiejętności",
    education: "Edukacja",
    about: "O mnie",
    contact: "Kontakt",
  },
  hero: {
    badge: "Cześć!",
    title1: "IT Specialist &",
    title2: "Developer",
    subtitle:
      "Student informatyki, tworzę aplikacje webowe i rozwiązuję problemy techniczne.",
    ctaProjects: "Zobacz projekty",
  },
};

const en: Messages = {
  nav: {
    projects: "Projects",
    skills: "Skills",
    education: "Education",
    about: "About",
    contact: "Contact",
  },
  hero: {
    badge: "Hi!",
    title1: "IT Specialist &",
    title2: "Developer",
    subtitle:
      "Computer Science student building web apps and solving technical problems.",
    ctaProjects: "See projects",
  },
};

export function getMessages(locale: Locale): Messages {
  return locale === "en" ? en : pl;
}
