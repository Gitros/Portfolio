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
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-slate-50/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href={`/${locale}`}
          className="text-base font-semibold tracking-tight text-indigo-700 dark:text-indigo-300"
        >
          Portfolio
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
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

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitch locale={locale} />
          <ThemeToggle />

          {/* Podmień linki na swoje */}
          <Link
            href="https://github.com/Gitros"
            target="_blank"
            className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-800 hover:border-indigo-200 hover:text-indigo-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
          >
            <GithubIcon />
          </Link>
          <Link
            href="https://www.linkedin.com/in/jakub-owczarek47/"
            target="_blank"
            className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-800 hover:border-indigo-200 hover:text-indigo-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
          >
            <Linkedin />
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
      </Container>

      {open && (
        <div className="border-t border-slate-200 bg-slate-50 md:hidden dark:border-slate-800 dark:bg-slate-950">
          <Container className="py-3">
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

            <div className="mt-3 flex items-center justify-between gap-2">
              <LanguageSwitch locale={locale} />
              <ThemeToggle />
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="https://github.com/Gitros"
                  target="_blank"
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-center text-sm font-medium text-slate-800 hover:border-indigo-200 hover:text-indigo-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
                >
                  GitHub
                </Link>
                <Link
                  href="https://www.linkedin.com/in/jakub-owczarek47/"
                  target="_blank"
                  className="rounded-xl bg-indigo-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-indigo-700"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
