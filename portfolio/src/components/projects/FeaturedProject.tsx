"use client";

import type { Project } from "@/data/projects";

export default function FeaturedProject({
  project,
  locale,
  onOpen,
}: {
  project: Project;
  locale: "pl" | "en";
  onOpen: () => void;
}) {
  return (
    <div
      onClick={onOpen}
      className="group relative cursor-pointer rounded-3xl border border-indigo-300 bg-indigo-50 p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-100/70 hover:border-indigo-400 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:hover:border-indigo-400/50 dark:hover:shadow-indigo-500/10"
    >
      <span className="mb-2 inline-block rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
        Featured
      </span>

      <h3 className="mt-2 text-2xl font-bold text-slate-900 transition-colors group-hover:text-indigo-700 dark:text-slate-100 dark:group-hover:text-indigo-300">
        {project.title}
      </h3>
      <p className="mt-3 muted">{project.short[locale]}</p>
    </div>
  );
}
