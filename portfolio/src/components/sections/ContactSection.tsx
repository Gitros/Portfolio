"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import { contact } from "@/data/contact";
import { Mail, MapPin, Github, Linkedin, Copy, Check } from "lucide-react";

type Locale = "pl" | "en";

const t = {
  title: { pl: "Kontakt", en: "Contact" },
  subtitle: {
    pl: "Masz projekt lub pytanie? Napisz do mnie.",
    en: "Have a project or question? Reach out.",
  },
  email: { pl: "Email", en: "Email" },
  location: { pl: "Lokalizacja", en: "Location" },
  copy: { pl: "Kopiuj", en: "Copy" },
  copied: { pl: "Skopiowano", en: "Copied" },
  github: { pl: "GitHub", en: "GitHub" },
  linkedin: { pl: "LinkedIn", en: "LinkedIn" },
  githubHint: { pl: "Zobacz moje repozytoria", en: "See my repositories" },
  linkedinHint: { pl: "Profil zawodowy", en: "Professional profile" },
};

export default function ContactSection({ locale }: { locale: Locale }) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore
    }
  }

  return (
    <section id="contact" className="py-20">
      <Container>
        {/* header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            {t.title[locale]}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            {t.subtitle[locale]}
          </p>
        </div>

        {/* centered grid */}
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Email */}
            <InfoTile
              icon={<Mail className="h-5 w-5" />}
              title={t.email[locale]}
              subtitle={contact.email}
              right={
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-slate-200 bg-white px-2.5 py-2 text-xs font-semibold
                             sm:px-3 sm:text-sm
                             text-slate-900 transition hover:border-indigo-200 hover:text-indigo-700
                             dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
                >
                  {copied ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  {copied ? t.copied[locale] : t.copy[locale]}
                </button>
              }
            />

            {/* Location */}
            <InfoTile
              icon={<MapPin className="h-5 w-5" />}
              title={t.location[locale]}
              subtitle={contact.location[locale]}
            />

            {/* LinkedIn (big CTA) */}
            <BigLinkTile
              href={contact.linkedinUrl}
              icon={<Linkedin className="h-6 w-6" />}
              title={t.linkedin[locale]}
              handle={contact.linkedinHandle}
              hint={t.linkedinHint[locale]}
              tone="slate"
              locale={locale}
            />

            <BigLinkTile
              href={contact.githubUrl}
              icon={<Github className="h-6 w-6" />}
              title={t.github[locale]}
              handle={contact.githubHandle}
              hint={t.githubHint[locale]}
              tone="slate"
              locale={locale}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function InfoTile({
  icon,
  title,
  subtitle,
  right,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4 min-w-0">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-indigo-50 text-indigo-700 sm:h-12 sm:w-12 dark:bg-indigo-500/10 dark:text-indigo-300">
            {icon}
          </div>
          <div className="min-w-0">
            <div className="text-base font-bold text-slate-900 sm:text-lg dark:text-slate-100">
              {title}
            </div>
            <div className="mt-1 break-words text-sm text-slate-600 dark:text-slate-300">
              {subtitle}
            </div>
          </div>
        </div>
        {right}
      </div>
    </div>
  );
}

function BigLinkTile({
  href,
  icon,
  title,
  handle,
  hint,
  tone,
  locale,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  handle: string;
  hint: string;
  tone: "blue" | "slate";
  locale: "pl" | "en";
}) {
  const toneCls =
    tone === "blue"
      ? "border-blue-200 bg-blue-50/60 hover:border-blue-300 hover:bg-blue-50 dark:border-blue-400/25 dark:bg-blue-500/10 dark:hover:border-blue-400/45"
      : "border-slate-200 bg-slate-50/70 hover:border-indigo-200 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-400/40";

  const iconCls =
    tone === "blue"
      ? "bg-white text-blue-700 dark:bg-slate-950 dark:text-blue-300"
      : "bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100";

  const openLabel = locale === "pl" ? "Otwórz" : "Open";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={[
        "group rounded-3xl border p-5 shadow-sm transition sm:p-7",
        "hover:-translate-y-0.5 hover:shadow-md",
        "focus:outline-none focus:ring-4 focus:ring-indigo-300/30",
        toneCls,
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        {/* left */}
        <div className="flex items-start gap-4 min-w-0">
          <div
            className={[
              "grid h-10 w-10 shrink-0 place-items-center rounded-2xl shadow-sm sm:h-12 sm:w-12",
              iconCls,
            ].join(" ")}
          >
            {icon}
          </div>

          <div className="min-w-0">
            <div className="text-lg font-extrabold text-slate-900 sm:text-xl dark:text-slate-100">
              {title}
            </div>
            <div className="mt-1 text-sm font-semibold text-slate-600 dark:text-slate-300">
              {handle}
            </div>
            <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              {hint}
            </div>
          </div>
        </div>

        {/* right button */}
        <span onClick={(e) => e.stopPropagation()} className="shrink-0">
          <span
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold
                       text-slate-900 transition hover:border-indigo-200 hover:text-indigo-700
                       dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
          >
            {openLabel} →
          </span>
        </span>
      </div>
    </a>
  );
}
