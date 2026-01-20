// src/data/projects.ts
export type Project = {
  id: string;
  featured?: boolean;
  title: string;
  short: { pl: string; en: string };
  description: { pl: string; en: string };
  stack: string[];
  links: {
    github?: string;
    demo?: string;
    video?: string; // np. link do nagrania / YouTube / Drive
  };
  image?: string; // /images/projects/xxx.png
};

export const projects: Project[] = [
  {
    id: "restaurant-ordering-app",
    featured: true,
    title: "RestaurantOrderingApp",
    short: {
      pl: "System do obsługi zamówień w restauracji (Clean Architecture, .NET, EF Core, Keycloak).",
      en: "Restaurant ordering system (Clean Architecture, .NET, EF Core, Keycloak).",
    },
    description: {
      pl: "Aplikacja do obsługi zamówień na sali i na wynos. Role, autoryzacja, logika domenowa, testy jednostkowe. Projekt rozwijany jako główny case do rekrutacji.",
      en: "App for dine-in and takeaway ordering. Roles, auth, domain logic, unit tests. Main portfolio case for recruitment.",
    },
    stack: [
      ".NET",
      "C#",
      "EF Core",
      "SQL Server",
      "Keycloak",
      "xUnit",
      "React",
    ],
    links: {
      github: "https://github.com/OrderingApp/RestaurantOrderingAppSolution",
      demo: "", // jeśli brak – zostaw puste lub usuń
      video: "", // wkleisz link do nagrania
    },
    image: "/images/projects/ordering-app.png",
  },
  {
    id: "activityguard",
    title: "ActivityGuard",
    short: {
      pl: "User Activity Audit System - logowanie zdarzeń i przegląd w panelu admina.",
      en: "User Activity Audit System - event logging and admin viewer.",
    },
    description: {
      pl: "Aplikacja pokazująca audyt akcji użytkowników + filtracja + podgląd szczegółów.",
      en: "App showcasing user action auditing + filtering + event details view.",
    },
    stack: ["Next.js", "React", "Tailwind", ".NET", "SQL"],
    links: {
      github: "https://github.com/Gitros",
    },
    image: "/images/projects/activityguard.png",
  },
];
