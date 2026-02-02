import Container from "@/components/layout/Container";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-slate-200/70 bg-white/60 py-10 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/30">
      <Container>
        {/* top row */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          {/* left */}
          <div className="min-w-0">
            <div className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
              Portfolio
            </div>
            <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              IT Specialist &amp; Developer
            </div>
          </div>

          {/* right icons */}
          <div className="flex items-center gap-3 sm:justify-end">
            <IconLink
              href="https://github.com/Gitros"
              label="GitHub"
              icon={<Github className="h-5 w-5" />}
            />
            <IconLink
              href="https://www.linkedin.com/in/jakub-owczarek47/"
              label="LinkedIn"
              icon={<Linkedin className="h-5 w-5" />}
            />
            <IconLink
              href="mailto:jakubowczarek882@gmail.com"
              label="Email"
              icon={<Mail className="h-5 w-5" />}
            />
          </div>
        </div>

        {/* divider */}
        <div className="my-8 h-px w-full bg-slate-200/70 dark:bg-slate-800/70" />

        {/* bottom row */}
        <div className="text-center text-sm text-slate-500 dark:text-slate-400">
          © {year} Portfolio. Wszystkie prawa zastrzeżone.
        </div>
      </Container>
    </footer>
  );
}

function IconLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  const isMail = href.startsWith("mailto:");

  return (
    <a
      href={href}
      target={isMail ? undefined : "_blank"}
      rel={isMail ? undefined : "noreferrer"}
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:text-indigo-700 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-indigo-300/30 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-indigo-400/50 dark:hover:text-indigo-300"
    >
      {icon}
    </a>
  );
}
