"use client";

import { useEffect } from "react";
import { X, GithubIcon, Video, ExternalLink, ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";
import Link from "next/link";

export default function ProjectModal({
  project,
  locale,
  onClose,
}: Readonly<{
  project: Project;
  locale: "pl" | "en";
  onClose: () => void;
}>) {
  // blokada scrolla tła
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // ESC zamyka
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    globalThis.addEventListener("keydown", onKey);
    return () => globalThis.removeEventListener("keydown", onKey);
  }, [onClose]);

  const t = (pl: string, en: string) => (locale === "pl" ? pl : en);

  const youtubeId = project.links.video?.trim();
  const youtubeUrl = youtubeId
    ? `https://www.youtube.com/watch?v=${youtubeId}`
    : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

      {/* panel */}
      <div
        className="
          relative w-full max-w-3xl
          rounded-3xl bg-white shadow-2xl dark:bg-slate-900
          max-h-[90vh] overflow-hidden
        "
        role="dialog"
        aria-modal="true"
      >
        {/* HEADER (sticky) */}
        <div className="sticky top-0 z-10 border-b border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-xl p-2 text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          <h3 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">
            {project.title}
          </h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            {project.short[locale]}
          </p>

          {/* stack */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700
                           dark:bg-indigo-500/10 dark:text-indigo-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* BODY (scroll) */}
        <div className="max-h-[calc(90vh-170px)] overflow-y-auto p-6">
          {/* opis */}
          <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            {t("Opis projektu", "Project description")}
          </h4>
          <p className="mt-2 text-slate-700 dark:text-slate-200">
            {project.description[locale]}
          </p>

          {/* kluczowe funkcje (jeśli masz about.features) */}
          {project.about?.features?.[locale]?.length ? (
            <div className="mt-6">
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                {t("Kluczowe funkcjonalności", "Key features")}
              </h4>

              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {project.about.features[locale].map((f) => (
                  <div
                    key={f}
                    className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-800
                               dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
                  >
                    • {f}
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        {/* FOOTER (sticky bottom) */}
        <div className="sticky bottom-0 z-10 border-t border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* lewa strona: linki */}
            <div className="flex flex-wrap gap-3">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800
                             hover:border-indigo-200 hover:text-indigo-700
                             dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
                >
                  <GithubIcon className="h-4 w-4" />
                  {t("Zobacz kod", "View code")}
                  <ExternalLink className="h-4 w-4 opacity-70" />
                </a>
              )}

              {youtubeUrl && (
                <a
                  href={youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:border-indigo-200 hover:text-indigo-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
                >
                  <Video className="h-4 w-4" />
                  Video
                </a>
              )}

              {project.links.demo && project.links.demo.trim() !== "" ? (
                <a
                  href={project.links.demo}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:border-indigo-200 hover:text-indigo-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
                >
                  <ArrowRight className="h-4 w-4" />
                  Live Demo
                </a>
              ) : (
                <button
                  disabled
                  className="inline-flex cursor-not-allowed items-center gap-2 rounded-2xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-400 dark:border-slate-800"
                  title="Demo wkrótce"
                >
                  Demo (wkrótce)
                </button>
              )}
            </div>

            {/* prawa strona: CTA */}
            <Link
              href={`/${locale}/projects/${project.id}`}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
              onClick={onClose}
            >
              {t("Zobacz mój proces myślowy", "See my thinking process")} →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
