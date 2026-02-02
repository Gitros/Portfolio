"use client";

import type { Project } from "@/data/projects";
import { ArrowRight, Star, GithubIcon, Video } from "lucide-react";

export default function FeaturedProject({
  project,
  locale,
  onOpen,
}: Readonly<{
  project: Project;
  locale: "pl" | "en";
  onOpen: () => void;
}>) {
  const t = (pl: string, en: string) => (locale === "pl" ? pl : en);

  const videoHref =
    project.links.video && project.links.video.trim() !== ""
      ? project.links.video.startsWith("http")
        ? project.links.video
        : `https://www.youtube.com/watch?v=${project.links.video}`
      : null;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
      className={[
        "group relative w-full cursor-pointer overflow-hidden rounded-3xl border p-8 text-left transition",
        "hover:-translate-y-0.5 focus:outline-none focus:ring-4",

        // ✅ LIGHT
        "border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-slate-50 shadow-sm",
        "hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100/60",
        "focus:ring-indigo-200/60",

        // ✅ DARK
        "dark:border-indigo-400/20",
        "dark:bg-gradient-to-br dark:from-indigo-950/70 dark:via-slate-950/60 dark:to-slate-950/40",
        "dark:shadow-xl dark:shadow-indigo-500/10",
        "dark:hover:border-indigo-300/60 dark:hover:shadow-indigo-500/20",
        "dark:focus:ring-indigo-300/30",
      ].join(" ")}
      aria-label={t("Otwórz szczegóły projektu", "Open project details")}
    >
      {/* glow */}
      <div
        className={[
          "pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl",
          "bg-indigo-200/70",
          "dark:bg-indigo-500/20",
        ].join(" ")}
      />

      <div className="relative grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
        {/* left */}
        <div className="space-y-4">
          <div
            className={[
              "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold",
              "bg-indigo-100 text-indigo-700",
              "dark:bg-indigo-500/15 dark:text-indigo-200",
            ].join(" ")}
          >
            <Star className="h-4 w-4" />
            {t("Wyróżniony", "Featured")}
          </div>

          <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {project.title}
          </h3>

          <p className="max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-200/90">
            {project.short[locale]}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.stack.slice(0, 8).map((s) => (
              <span
                key={s}
                className={[
                  "rounded-full px-3 py-1 text-xs font-semibold",
                  "bg-slate-900/5 text-slate-700",
                  "dark:bg-white/10 dark:text-slate-100",
                ].join(" ")}
              >
                {s}
              </span>
            ))}
          </div>

          <div className="pt-2">
            <span
              className={[
                "inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold transition",
                "bg-indigo-600 text-white group-hover:bg-indigo-700 group-hover:scale-[1.02]",
                "dark:bg-indigo-500 dark:group-hover:bg-indigo-400",
              ].join(" ")}
            >
              {t("Otwórz szczegóły", "Open details")}
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>

        {/* right */}
        <div
          className={[
            "rounded-3xl border p-6",
            "border-slate-200 bg-white/70",
            "dark:border-white/10 dark:bg-white/5",
          ].join(" ")}
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-200/70">
            {t("Szybkie linki", "Quick links")}
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={[
                  "inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-semibold transition",
                  "border-slate-200 bg-white text-slate-800 hover:border-indigo-200 hover:text-indigo-700 hover:shadow-sm hover:scale-[1.03]",
                  "focus:outline-none focus:ring-2 focus:ring-indigo-200/60",
                  "dark:border-white/10 dark:bg-black/20 dark:text-slate-100 dark:hover:bg-white/10 dark:focus:ring-indigo-300/40",
                ].join(" ")}
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>
            )}

            {videoHref && (
              <a
                href={videoHref}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={[
                  "inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-semibold transition",
                  "border-slate-200 bg-white text-slate-800 hover:border-indigo-200 hover:text-indigo-700 hover:shadow-sm hover:scale-[1.03]",
                  "focus:outline-none focus:ring-2 focus:ring-indigo-200/60",
                  "dark:border-white/10 dark:bg-black/20 dark:text-slate-100 dark:hover:bg-white/10 dark:focus:ring-indigo-300/40",
                ].join(" ")}
              >
                <Video className="h-4 w-4" />
                Video
              </a>
            )}
          </div>

          <div className="mt-5 text-sm text-slate-500 dark:text-slate-200/80">
            {t(
              "Kliknij kafelek, żeby zobaczyć opis, proces i materiały.",
              "Click the tile to see description, process and resources.",
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
