export type ContactData = {
  email: string;
  location: { pl: string; en: string };
  githubUrl: string;
  githubHandle: string;
  linkedinUrl: string;
  linkedinHandle: string;
  responseTime: { pl: string; en: string };
  engagement: { pl: string; en: string };
};

export const contact: ContactData = {
  email: "jakubowczarek882@gmail.com",
  location: { pl: "Polska", en: "Poland" },
  githubUrl: "https://github.com/Gitros",
  githubHandle: "@Gitros",
  linkedinUrl: "https://www.linkedin.com/in/jakub-owczarek47/",
  linkedinHandle: "@jakub-owczarek47",
  responseTime: { pl: "< 24h", en: "< 24h" },
  engagement: { pl: "100%", en: "100%" },
};
