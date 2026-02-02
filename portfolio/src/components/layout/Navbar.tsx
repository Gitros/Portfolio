"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "./Container";
import LanguageSwitch from "./LanguageSwitch";
import ThemeToggle from "./ThemeToggle";
import type { Locale } from "@/i18n/locales";
import { getMessages } from "@/i18n/messages";
import { GithubIcon, Linkedin } from "lucide-react";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const yOffset = -84;
  const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
}

export default function Navbar({ locale }: Readonly<{ locale: Locale }>) {
  const m = getMessages(locale);
  const [open, setOpen] = useState(false);

  const items = [
    { id: "projects", label: m.nav.projects },
    { id: "skills", label: m.nav.skills },
    { id: "education", label: m.nav.education },
    { id: "about", label: m.nav.about },
    { id: "contact", label: m.nav.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[calc(4rem+env(safe-area-inset-top))] border-b border-slate-200 bg-slate-50/80 pt-[env(safe-area-inset-top)] backdrop-blur md:sticky md:h-16 md:pt-0 dark:border-slate-800 dark:bg-slate-950/70">
      <Container className="grid h-full grid-cols-[1fr_auto_1fr] items-center">
        <Link
          href={`/${locale}`}
          className="justify-self-start text-base font-semibold tracking-tight text-indigo-700 dark:text-indigo-300"
        >
          Portfolio
        </Link>

        <div className="flex items-center justify-center gap-2 justify-self-center">
          <nav className="hidden items-center justify-center gap-6 md:flex">
            {items.map((it) => (
              <button
                key={it.id}
                type="button"
                onClick={() => scrollToId(it.id)}
                className="text-sm font-medium text-slate-700 cursor-pointer hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
              >
                {it.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitch locale={locale} />
            <ThemeToggle />
            <Link
              href="https://github.com/Gitros"
              target="_blank"
              className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 bg-white text-slate-800 hover:border-indigo-200 hover:text-indigo-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
              aria-label="GitHub"
            >
              <GithubIcon className="h-4 w-4" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/jakub-owczarek47/"
              target="_blank"
              className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 bg-white text-slate-800 hover:border-indigo-200 hover:text-indigo-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 justify-self-end">
          <div className="hidden items-center gap-2 md:flex">
            <LanguageSwitch locale={locale} />
            <ThemeToggle />
            <Link
              href="https://github.com/Gitros"
              target="_blank"
              className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 bg-white text-slate-800 hover:border-indigo-200 hover:text-indigo-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
              aria-label="GitHub"
            >
              <GithubIcon className="h-4 w-4" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/jakub-owczarek47/"
              target="_blank"
              className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 bg-white text-slate-800 hover:border-indigo-200 hover:text-indigo-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-800 hover:border-indigo-200 hover:text-indigo-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
          >
            Menu
          </button>
        </div>
      </Container>
      <div
        className={[
          "md:hidden absolute left-0 right-0 top-16 z-50",
          "overflow-hidden border-t border-slate-200 bg-slate-50 transition-all duration-300 ease-out",
          "dark:border-slate-800 dark:bg-slate-950",
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
        aria-hidden={!open}
      >
        <Container
          className={[
            "py-3 transition-transform duration-300 ease-out",
            open ? "translate-y-0" : "-translate-y-2",
          ].join(" ")}
        >
          <div className="flex flex-col gap-1">
            {items.map((it) => (
              <button
                key={it.id}
                type="button"
                onClick={() => {
                  scrollToId(it.id);
                  setOpen(false);
                }}
                className="rounded-xl px-3 py-2 text-left text-sm font-medium text-slate-800 hover:bg-white dark:text-slate-100 dark:hover:bg-slate-900"
              >
                {it.label}
              </button>
            ))}
          </div>
        </Container>
      </div>
    </header>
  );
}
