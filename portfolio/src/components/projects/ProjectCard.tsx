"use client";

import type { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  locale,
  onOpen,
}: {
  project: Project;
  locale: "pl" | "en";
  onOpen: () => void;
}) {
  return (
    <button
      onClick={onOpen}
      className="group relative rounded-2xl border border-slate-200 bg-white p-6 text-left
           transition-all duration-300 ease-out
           hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-100/60 hover:border-indigo-300
           focus:outline-none focus:ring-4 focus:ring-indigo-200/60
           dark:border-slate-800 dark:bg-slate-900
           dark:hover:border-indigo-500/40 dark:hover:shadow-indigo-500/10
           dark:focus:ring-indigo-500/20"
    >
      <h3 className="text-lg font-semibold text-slate-900 transition-colors group-hover:text-indigo-700 dark:text-slate-100 dark:group-hover:text-indigo-300">
        {project.title}
      </h3>
      <p className="mt-2 text-sm muted">{project.short[locale]}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.slice(0, 4).map((t) => (
          <span
            key={t}
            className="rounded-full bg-slate-100 px-2 py-0.5 text-xs
                       dark:bg-slate-800"
          >
            {t}
          </span>
        ))}
        {project.stack.length > 4 && (
          <span className="text-xs muted">+{project.stack.length - 4}</span>
        )}
      </div>
    </button>
  );
}
