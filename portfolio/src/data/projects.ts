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
      video: "12442", // uzupełnisz
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
      pl: "Audit logi i audit eventy z correlationId + panel admina (POC).",
      en: "Audit logs & audit events with correlationId + admin panel (POC).",
    },
    description: {
      pl: "POC systemu audytu i śledzenia aktywności użytkowników: request-level Audit Logs + domain-level Audit Events, korelowane correlationId. Skupiony na architekturze, obserwowalności i czytelnym UI admina — nie na CRUD.",
      en: "POC audit/activity tracking system: request-level Audit Logs + domain-level Audit Events connected via correlationId. Focused on architecture, observability and a clean admin UI — not CRUD.",
    },
    stack: [
      ".NET",
      "C#",
      "EF Core",
      "SQL Server",
      "React",
      "TypeScript",
      "Tailwind",
      "JWT",
    ],
    links: {
      github: "https://github.com/Gitros/activity-guard", // <- wstaw właściwy link
      video: "epTyWyW6y2s", // <- tu wrzucisz
      demo: "", // jak zrobisz deploy, tu dasz url
    },
    image: "/images/projects/activityguard.png",

    about: {
      intro: {
        pl: "ActivityGuard to Proof of Concept pokazujący jak budować audyt i tracking aktywności w aplikacji webowej: logi requestów (middleware) + zdarzenia domenowe (serwisy), spięte correlationId i wyświetlane w panelu admina.",
        en: "ActivityGuard is a Proof of Concept showing how to build audit & activity tracking: request logs (middleware) + domain events (services), connected via correlationId and presented in an admin UI.",
      },
      features: {
        pl: [
          "Audit Logs: automatyczny zapis każdego requestu (status, ścieżka, user, user-agent, IP, correlationId)",
          "Audit Events: jawne zapisywanie akcji domenowych (typ, aktor, target, metadata JSON)",
          "Nawigacja event → powiązany request log (i odwrotnie)",
          "Admin UI: filtry, wyszukiwanie, panel szczegółów, wybór kolumn (localStorage)",
          "Demo endpoints: PING / FAIL / ADMIN-ONLY do generowania danych",
        ],
        en: [
          "Audit Logs: automatic request logging (status, path, user, user-agent, IP, correlationId)",
          "Audit Events: explicit domain actions (type, actor, target, JSON metadata)",
          "Navigation event → related request log (and back)",
          "Admin UI: filters, search, details panel, column picker (localStorage)",
          "Demo endpoints: PING / FAIL / ADMIN-ONLY to generate data",
        ],
      },
      architecture: {
        pl: [
          "Clean Architecture: Domain / Application / Infrastructure / API",
          "AuditMiddleware: log requestu zawsze, bez psucia requestów (non-breaking)",
          "EF Core w Infrastructure + repozytoria, bez wycieków do Application",
          "JWT auth + role (User/Admin), widoki audytu tylko dla Admin",
        ],
        en: [
          "Clean Architecture: Domain / Application / Infrastructure / API",
          "AuditMiddleware: always log requests, non-breaking behavior",
          "EF Core in Infrastructure + repositories, no leaking to Application",
          "JWT auth + roles (User/Admin), audit views for Admin only",
        ],
      },
    },

    highlights: {
      pl: {
        title: "Co ten projekt pokazuje",
        items: [
          "Dwie warstwy audytu: request-level i domain-level",
          "CorrelationId jako kręgosłup traceability (debugging, śledzenie działań)",
          "Admin UI z nawigacją i panelem szczegółów (realny use-case)",
          "Projekt POC nastawiony na architekturę, a nie CRUD",
        ],
      },
      en: {
        title: "What this project demonstrates",
        items: [
          "Two audit layers: request-level and domain-level",
          "CorrelationId as the backbone of traceability",
          "Admin UI with navigation + details panel (realistic use-case)",
          "POC focused on architecture, not CRUD",
        ],
      },
    },

    process: [
      {
        title: {
          pl: "Projektowanie modelu audytu",
          en: "Designing the audit model",
        },
        text: {
          pl: "Rozdzieliłem log requestu (AuditLog) od akcji domenowej (AuditEvent), a całość spiąłem correlationId.",
          en: "I separated request logs (AuditLog) from domain actions (AuditEvent) and connected them via correlationId.",
        },
        tags: ["Architecture", "CorrelationId"],
      },
      {
        title: {
          pl: "Middleware i niezawodność",
          en: "Middleware & reliability",
        },
        text: {
          pl: "Audit jest non-breaking — nawet jeśli zapis audytu padnie, request nie powinien się wysypać.",
          en: "Audit is non-breaking — audit failures should never break requests.",
        },
        tags: ["Middleware", "Resilience"],
      },
      {
        title: { pl: "Panel admina", en: "Admin UI" },
        text: {
          pl: "Dodałem filtry, wyszukiwanie, panel szczegółów i wybór kolumn (per user w localStorage).",
          en: "Added filters, search, details panel and per-user column picker (localStorage).",
        },
        tags: ["React", "UI"],
      },
      {
        title: { pl: "Demo endpointy", en: "Demo endpoints" },
        text: {
          pl: "PING/FAIL/ADMIN-ONLY generują spójne logi i eventy do prezentacji projektu.",
          en: "PING/FAIL/ADMIN-ONLY generate consistent logs/events for showcasing the system.",
        },
        tags: ["Demo", "Auth"],
      },
    ],
  },
  {
    id: "dbmetatool",
    title: "DbMetaTool",
    short: {
      pl: "Narzędzie .NET 8 do eksportu i odtwarzania metadanych Firebird 5.0 (domeny, tabele, procedury).",
      en: ".NET 8 tool to export and recreate Firebird 5.0 metadata (domains, tables, procedures).",
    },
    description: {
      pl: "Konsolowe narzędzie do budowania nowej bazy Firebird 5.0 ze skryptów, eksportu metadanych do SQL oraz aktualizacji istniejącej bazy na podstawie katalogu skryptów. Zakres: domeny, tabele (kolumny), procedury.",
      en: "Console tool for building a Firebird 5.0 database from scripts, exporting metadata to SQL, and updating an existing database from a scripts directory. Scope: domains, tables (columns), procedures.",
    },
    stack: [".NET 8", "C#", "Firebird 5.0", "SQL", "CLI", "Testing"],
    links: {
      github: "PASTE_GITHUB_REPO_URL_HERE",
      // video: "YOUTUBE_ID_TU_JESLI_BEDZIE"
      // demo: "" // raczej nie
    },

    about: {
      intro: {
        pl: "DbMetaTool to aplikacja konsolowa w .NET 8 do budowania, eksportu i aktualizacji schematu bazy Firebird 5.0 na podstawie katalogu skryptów SQL. Projekt powstał jako narzędzie do pracy z metadanymi w kontrolowany i powtarzalny sposób.",
        en: "DbMetaTool is a .NET 8 console app for building, exporting and updating Firebird 5.0 schema from a SQL scripts directory. It was built to handle metadata in a controlled and repeatable way.",
      },
      features: {
        pl: [
          "build-db: buduje nową bazę .fdb na podstawie katalogu skryptów SQL",
          "export-scripts: generuje skrypty metadanych z istniejącej bazy do struktury katalogów",
          "update-db: aktualizuje istniejącą bazę na podstawie katalogu skryptów",
          "Obsługiwane obiekty: domeny, tabele (kolumny), procedury",
          "Tryb update-db jest bezpieczny/permisywny: nie usuwa istniejących elementów",
        ],
        en: [
          "build-db: creates a new .fdb database from SQL scripts",
          "export-scripts: exports metadata scripts from an existing database into folders",
          "update-db: updates an existing database from scripts directory",
          "Supported objects: domains, tables (columns), procedures",
          "Safe/permissive update mode: doesn’t delete existing elements",
        ],
      },
      architecture: {
        pl: [
          "Application: Contracts (interfejsy) + Services (logika)",
          "Domain: modele POCO (DomainType, Table, Column, Procedure)",
          "Infrastructure: pomocnicze narzędzia (np. zapis plików)",
          "Program.cs: parsowanie argumentów i uruchamianie komend",
        ],
        en: [
          "Application: Contracts (interfaces) + Services (logic)",
          "Domain: POCO models (DomainType, Table, Column, Procedure)",
          "Infrastructure: helpers (e.g. file saving)",
          "Program.cs: args parsing + command execution",
        ],
      },
    },

    highlights: {
      pl: {
        title: "Co jest tu „mocne”",
        items: [
          "3 komendy CLI (build-db, export-scripts, update-db) z czytelnym DX",
          "Eksport do uporządkowanej struktury katalogów (domains/tables/procedures)",
          "Idempotentność update-db: uruchamiasz wiele razy bez psucia stanu",
          "Procedury tworzone przez CREATE OR ALTER",
          "Testy integracyjne na tymczasowych katalogach i plikach .fdb",
        ],
      },
      en: {
        title: "Key highlights",
        items: [
          "3 CLI commands (build-db, export-scripts, update-db) with good DX",
          "Export into clean folder structure (domains/tables/procedures)",
          "Idempotent update-db: can run multiple times safely",
          "Procedures created via CREATE OR ALTER",
          "Integration tests using temporary folders and .fdb files",
        ],
      },
    },

    process: [
      {
        title: { pl: "Założenia i scope", en: "Scope & assumptions" },
        text: {
          pl: "Zdefiniowałem minimalny zakres metadanych: domeny, tabele (kolumny) i procedury. Reszta (triggery, indeksy, constraints) celowo pominięta.",
          en: "I defined minimal metadata scope: domains, tables (columns) and procedures. Other objects were intentionally out of scope.",
        },
        tags: ["Firebird", "Metadata", "Scope"],
      },
      {
        title: { pl: "Komendy CLI", en: "CLI commands" },
        text: {
          pl: "Zaprojektowałem trzy komendy: budowanie bazy ze skryptów, eksport skryptów z bazy oraz aktualizację bazy na podstawie folderu.",
          en: "Designed three commands: build DB from scripts, export scripts from DB, update DB from folder.",
        },
        tags: ["CLI", ".NET 8"],
      },
      {
        title: {
          pl: "Update-db w trybie bezpiecznym",
          en: "Safe update-db behavior",
        },
        text: {
          pl: "Update nie usuwa istniejących elementów, a procedury zawsze przechodzą przez CREATE OR ALTER. To pozwala odpalać update wielokrotnie bez efektów ubocznych.",
          en: "Update doesn't delete existing elements; procedures go through CREATE OR ALTER. This makes it safe to run repeatedly.",
        },
        tags: ["Idempotency", "SQL"],
      },
      {
        title: { pl: "Testy integracyjne", en: "Integration tests" },
        text: {
          pl: "Testy działają na tymczasowych katalogach i osobnych plikach .fdb — bez ręcznego sprzątania. Sprawdzają m.in. export, update i brak usuwania kolumn.",
          en: "Tests run on temp folders and separate .fdb files — no manual cleanup. They cover export, update and no column deletion.",
        },
        tags: ["Testing"],
      },
    ],

    learnings: [
      {
        title: {
          pl: "CLI i ergonomia narzędzia",
          en: "CLI & developer experience",
        },
        items: {
          pl: [
            "Projektowanie komend i parametrów tak, żeby narzędzie było czytelne w użyciu (build-db / export-scripts / update-db).",
            "Myślenie o przewidywalnych outputach i błędach (przyjazne komunikaty, jasne ścieżki plików, powtarzalność).",
            "Porządkowanie eksportu do struktury katalogów (domains/tables/procedures), żeby łatwo wersjonować skrypty w repo.",
          ],
          en: [
            "Designing commands and parameters for a clear CLI experience (build-db / export-scripts / update-db).",
            "Thinking about predictable output and errors (friendly messages, clear file paths, repeatability).",
            "Exporting into a clean folder structure (domains/tables/procedures) that works well with git.",
          ],
        },
      },
      {
        title: {
          pl: "Bezpieczne aktualizacje i idempotentność",
          en: "Safe updates & idempotency",
        },
        items: {
          pl: [
            "Budowanie update-db w trybie bezpiecznym/permisywnym (tworzenie gdy nie istnieje, brak usuwania).",
            "Idempotentność: możliwość wielokrotnego uruchamiania bez psucia schematu.",
            "Stosowanie CREATE OR ALTER dla procedur jako praktyczny kompromis dla aktualizacji.",
          ],
          en: [
            "Implementing update-db as a safe/permissive operation (create if missing, no deletions).",
            "Idempotency: running the update multiple times without breaking the schema.",
            "Using CREATE OR ALTER for procedures as a pragmatic update strategy.",
          ],
        },
      },
      {
        title: {
          pl: "Testy i weryfikacja działania",
          en: "Testing & verification",
        },
        items: {
          pl: [
            "Testy na tymczasowych katalogach i osobnych plikach .fdb (bez ręcznego sprzątania).",
            "Sprawdzanie scenariuszy: build-db, export-scripts, update-db i propagacja nowych obiektów.",
            "Weryfikacja, że update nie usuwa istniejących kolumn/elementów (bezpieczne działanie).",
          ],
          en: [
            "Tests using temporary folders and separate .fdb files (no manual cleanup).",
            "Covering scenarios: build-db, export-scripts, update-db and propagating new objects.",
            "Verifying that update does not delete existing columns/elements (safe behavior).",
          ],
        },
      },
    ],
    // image: "/images/projects/dbmetatool.png",
  },
];
