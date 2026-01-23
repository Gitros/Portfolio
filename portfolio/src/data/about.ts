export type Locale = "pl" | "en";

export type AboutStat = {
  icon: "code" | "zap" | "trophy";
  value: string;
  label: Record<Locale, string>;
};

export type AboutTag = {
  icon: "code" | "game" | "mountain" | "coffee";
  text: Record<Locale, string>;
  tone: "indigo" | "purple" | "green" | "amber";
};

export type AboutProcessStep = {
  title: string;
  subtitle: Record<Locale, string>;
  icon: "spark" | "figma" | "discord" | "code";
};

export type AboutRole = {
  title: string;
  meta: Record<Locale, string>;
  description: Record<Locale, string>;
  icon: "briefcase" | "trophy";
  tone: "indigo" | "purple";
};

export const aboutContent = {
  title: { pl: "O mnie", en: "About" },
  subtitle: {
    pl: "Pasjonat technologii, esportu i tworzenia rozwiązań webowych",
    en: "Tech enthusiast, esports organizer and web solutions builder",
  },

  cardTitle: { pl: "Kim jestem?", en: "Who am I?" },
  paragraphs: {
    pl: [
      "Jestem informatykiem z tytułem technika informatyka, obecnie studiuję informatykę i pracuję jako IT Specialist w firmie Piccolo. Moją pasją jest tworzenie aplikacji webowych i rozwiązywanie problemów technicznych.",
      "Oprócz programowania, zajmuję się organizacją turniejów esportowych jako Eszat, gdzie łączę moje umiejętności techniczne z pasją do gamingu. Posiadam również certyfikat grafika zdobyty podczas konkursu w technikum.",
    ],
    en: [
      "I’m an IT specialist with a technician diploma. I currently study computer science and work as an IT Specialist at Piccolo. I enjoy building web applications and solving technical problems.",
      "Besides coding, I organize esports tournaments (Eszat), combining my technical skills with gaming. I also have a design certificate earned during a high-school competition.",
    ],
  },

  image: {
    src: "/images/about-bike.jpg",
    alt: "Rower / outdoor",
  },

  stats: [
    {
      icon: "code",
      value: "10+",
      label: { pl: "Projektów zrealizowanych", en: "Projects delivered" },
    },
    {
      icon: "zap",
      value: "3+",
      label: { pl: "Lata doświadczenia", en: "Years of experience" },
    },
    {
      icon: "trophy",
      value: "20+",
      label: { pl: "Turniejów zorganizowanych", en: "Tournaments organized" },
    },
  ] satisfies AboutStat[],

  interestsTitle: { pl: "Zainteresowania", en: "Interests" },
  interests: [
    {
      icon: "code",
      text: { pl: "Programowanie", en: "Programming" },
      tone: "indigo",
    },
    { icon: "game", text: { pl: "E-sport", en: "Esports" }, tone: "purple" },
    { icon: "mountain", text: { pl: "Outdoor", en: "Outdoor" }, tone: "green" },
    {
      icon: "coffee",
      text: { pl: "Tech News", en: "Tech News" },
      tone: "amber",
    },
  ] satisfies AboutTag[],

  processTitle: { pl: "Mój proces pracy", en: "My workflow" },
  process: [
    {
      title: "Miro",
      subtitle: { pl: "Planowanie", en: "Planning" },
      icon: "spark",
    },
    { title: "Figma", subtitle: { pl: "Design", en: "Design" }, icon: "figma" },
    {
      title: "Discord",
      subtitle: { pl: "Komunikacja", en: "Communication" },
      icon: "discord",
    },
    {
      title: "Development",
      subtitle: { pl: "Implementacja", en: "Implementation" },
      icon: "code",
    },
  ] satisfies AboutProcessStep[],

  rolesTitle: { pl: "Aktualne role", en: "Current roles" },
  roles: [
    {
      title: "IT Specialist",
      meta: { pl: "Piccolo • Obecnie", en: "Piccolo • Current" },
      description: {
        pl: "Zarządzanie infrastrukturą IT, wsparcie techniczne, rozwój rozwiązań webowych.",
        en: "Managing IT infrastructure, technical support, and building web solutions.",
      },
      icon: "briefcase",
      tone: "indigo",
    },
    {
      title: { pl: "Organizator Turniejów", en: "Tournament Organizer" } as any, // (zrobimy to niżej w komponencie)
      meta: { pl: "Ezsat • Obecnie", en: "Ezsat • Current" },
      description: {
        pl: "Organizacja turniejów esportowych, zarządzanie społecznością graczy.",
        en: "Organizing esports tournaments and managing the gaming community.",
      },
      icon: "trophy",
      tone: "purple",
    },
  ] as unknown as AboutRole[],
};
