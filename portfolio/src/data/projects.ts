export type ProjectProcessStep = {
  title: { pl: string; en: string };
  text: { pl: string; en: string };
  date?: string; // opcjonalnie: "2024-03"
  tags?: string[];
  image?: string; // np. "/images/projects/ordering/miro-1.png"
  link?: { label: string; href: string };
};

export type ProjectLearningGroup = {
  title: { pl: string; en: string };
  items: { pl: string[]; en: string[] };
};

export type Project = {
  id: string;
  featured?: boolean;
  title: string;
  short: { pl: string; en: string };
  description: { pl: string; en: string };
  stack: string[];
  links: { github?: string; demo?: string; video?: string };
  image?: string;
  learnings?: ProjectLearningGroup[];

  // NOWE
  about?: {
    intro: { pl: string; en: string };
    features: { pl: string[]; en: string[] };
    architecture: { pl: string[]; en: string[] };
  };

  process?: ProjectProcessStep[];

  resources?: {
    miro?: string;
    miroEmbed?: string;
    figmaV1?: string;
    figmaV2?: string;
    obsidian?: string; // jeśli kiedyś dasz publiczne
  };

  highlights?: {
    pl: { title: string; items: string[] };
    en: { title: string; items: string[] };
  };

  gallery?: { src: string; alt: { pl: string; en: string } }[];
};

export const projects: Project[] = [
  {
    id: "restaurant-ordering-app",
    featured: true,
    title: "OrderingApp",
    short: {
      pl: "System obsługi kelnerskiej: zamówienia na sali i na wynos.",
      en: "Waiter assistance system: dine-in & takeaway.",
    },
    description: {
      pl: "Aplikacja do obsługi zamówień przypisanych do stolików, rozliczeń oraz pracy zespołowej (backend .NET + frontend Next.js). Projekt rozwijany w zespole 5-osobowym — pełniłem rolę Project Lead / Backend Developera (koordynacja prac, planowanie, decyzje architektoniczne, code review z seniorem).",
      en: "System for table orders, billing, and team workflow (backend .NET + frontend Next.js). Built by a 5-person team — I worked as Project Lead / Backend Developer (coordination, planning, architecture decisions, senior code reviews).",
    },
    stack: [
      ".NET 8",
      "C#",
      "EF Core",
      "SQL Server",
      "Keycloak",
      "xUnit",
      "Moq",
      "FluentAssertions",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "TanStack Query",
      "Zod",
    ],
    links: {
      github: "https://github.com/OrderingApp/RestaurantOrderingAppSolution",
      video: "", // uzupełnisz
    },

    learnings: [
      {
        title: { pl: "Praca zespołowa i dowożenie", en: "Teamwork & delivery" },
        items: {
          pl: [
            "Koordynacja pracy 5-osobowego zespołu (2× spotkania tygodniowo, priorytety, podział zadań).",
            "Discord + bot do tasków (mini-Jira), jasna komunikacja i szybkie decyzje.",
            "Współpraca backend ↔ frontend ↔ UI: kontrakty API i iteracje po feedbacku.",
          ],
          en: [
            "Coordinated a 5-person team (2× weekly syncs, priorities, task breakdown).",
            "Discord + task bot (mini-Jira), clear communication and fast decisions.",
            "Backend ↔ frontend ↔ UI collaboration: API contracts and feedback iterations.",
          ],
        },
      },
      {
        title: {
          pl: "Jakość kodu i architektura",
          en: "Code quality & architecture",
        },
        items: {
          pl: [
            "Praca pod code review z seniorem: czytelność, spójność, edge-case’y, dług techniczny.",
            "Lepsze granice odpowiedzialności: warstwy, DTO, mapowanie, testowalność serwisów.",
            "Wybór kompromisów: co robić teraz vs. co zostawić na później.",
          ],
          en: [
            "Senior code reviews: readability, consistency, edge cases, reduced technical debt.",
            "Clearer responsibility boundaries: layers, DTOs, mapping, testable services.",
            "Trade-offs: what to build now vs. what to postpone.",
          ],
        },
      },
    ],
    resources: {
      miro: "https://miro.com/app/board/uXjVLLVqTYI=/?share_link_id=864116254262",
      miroEmbed:
        "https://miro.com/app/live-embed/uXjVLLVqTYI=/?embedMode=view_only_without_ui&moveToViewport=-29142,-7899,137235,65544&embedId=36672110714",
      figmaV1: "",
      figmaV2: "",
    },
    highlights: {
      pl: {
        title: "Backend i architektura",
        items: [
          "Clean Architecture (Domain / Application / Infrastructure / API) + CQRS",
          "Autoryzacja i uwierzytelnianie przez Keycloak (role, tokeny, zabezpieczenia endpointów)",
          "Mechanizm zdarzeń (eventy domenowe / integracyjne) pod audyt i historię akcji",
          "Testy jednostkowe serwisów (xUnit + Moq + FluentAssertions)",
          "EF Core: konfiguracje encji, seedy, relacje, walidacje i mapowanie DTO (AutoMapper)",
        ],
      },
      en: {
        title: "Backend & architecture",
        items: [
          "Clean Architecture (Domain / Application / Infrastructure / API) + CQRS",
          "Keycloak auth (roles, tokens, secured endpoints)",
          "Event mechanism (domain/integration events) for auditing and history",
          "Unit tests for services (xUnit + Moq + FluentAssertions)",
          "EF Core: entity configs, seeding, relations, DTO mapping (AutoMapper)",
        ],
      },
    },
    about: {
      intro: {
        pl: "System obsługi kelnerskiej (Waiter Assistance System) stworzony w C# .NET oraz Next.js...",
        en: "Waiter assistance system built with C# .NET and Next.js...",
      },
      features: {
        pl: [
          "Tworzenie i zarządzanie zamówieniami przypisanymi do stolików",
          "Dodawanie pozycji z menu oraz składników",
          "Historia zamówień i rachunków",
          "Wydruki do kuchni przez Wi-Fi",
          "Szybkie rozliczanie pojedynczych osób przy stole",
        ],
        en: [
          "Create and manage table orders",
          "Add menu items and ingredients",
          "Order & bill history",
          "Kitchen printing over Wi-Fi",
          "Split bills per guest",
        ],
      },
      architecture: {
        pl: [
          "Domain – encje i logika biznesowa",
          "Infrastructure – EF Core i seedy",
          "Application – logika, DTO, mapowanie",
          "API – REST API dla frontendu",
        ],
        en: ["Domain ...", "Infrastructure ...", "Application ...", "API ..."],
      },
    },
    process: [
      {
        title: { pl: "Start w Miro", en: "Kickoff in Miro" },
        text: {
          pl: "Rozpisałem bazę, endpointy i przepływy zamówień. Zrobiłem mapę funkcji i zależności.",
          en: "I mapped database, endpoints and flows.",
        },
        tags: ["Miro", "Flow", "DB"],
        link: {
          label: "Board Miro",
          href: "https://miro.com/app/board/uXjVLLVqTYI=/?share_link_id=864116254262",
        },
      },
      {
        title: { pl: "Dokumentacja w Obsidian", en: "Docs in Obsidian" },
        text: {
          pl: "Opisałem założenia, decyzje i TODO, żeby nie gubić kontekstu.",
          en: "I documented decisions and TODOs.",
        },
        tags: ["Docs"],
      },
      {
        title: { pl: "POC i pierwsza wersja", en: "POC and first version" },
        text: {
          pl: "Zrobiłem szybki prototyp, żeby sprawdzić kierunek i ryzyka.",
          en: "Quick prototype to validate direction.",
        },
        tags: ["POC"],
      },
      {
        title: { pl: "Rebuild po 5 miesiącach", en: "Rebuild after 5 months" },
        text: {
          pl: "Wróciłem do projektu i zbudowałem go ponownie z lepszą strukturą i podejściem.",
          en: "Rebuilt with better structure.",
        },
        tags: ["Refactor", "Architecture"],
      },
      {
        title: { pl: "Zespół i Code Review", en: "Team & Code Review" },
        text: {
          pl: "Dobrałem 2 frontendowców, pracowałem pod okiem seniora (review + feedback). Grafik przeszedł z Adobe XD do Figmy.",
          en: "Team setup + senior reviews + design iteration.",
        },
        tags: ["Team", "Review", "Figma", "Adobe XD"],
      },
      {
        title: { pl: "Komunikacja i taski", en: "Comms & tasks" },
        text: {
          pl: "Postawiliśmy Discorda + bota do tasków. Spotkania 2x w tygodniu i stałe iteracje.",
          en: "Discord + task bot. 2x weekly syncs and iterations.",
        },
        tags: ["Discord", "Process"],
      },
    ],
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
