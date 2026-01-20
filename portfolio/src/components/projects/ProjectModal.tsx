"use client";

import { X } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectModal({
  project,
  locale,
  onClose,
}: {
  project: Project;
  locale: "pl" | "en";
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4">
      <div className="relative w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl dark:bg-slate-900">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <X />
        </button>

        <h3 className="text-2xl font-bold">{project.title}</h3>
        <p className="mt-3 muted">{project.description[locale]}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span
              key={t}
              className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700
                         dark:bg-indigo-500/10 dark:text-indigo-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              className="btn-ghost"
            >
              GitHub
            </a>
          )}

          {project.links.video && (
            <a href={project.links.video} target="_blank" className="btn-ghost">
              Video
            </a>
          )}

          <button
            disabled
            className="cursor-not-allowed rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-400
                       dark:border-slate-800"
          >
            Demo (wkrótce)
          </button>
        </div>
      </div>
    </div>
  );
}
