"use client";

import { useEffect } from "react";
import { X, Github, Video } from "lucide-react";
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
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      onMouseDown={(e) => {
        // klik w tło zamyka
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

      {/* panel */}
      <div
        className="relative w-full max-w-3xl rounded-3xl bg-white shadow-2xl
                   transition-all duration-300 ease-out
                   animate-[modalIn_.18s_ease-out]
                   dark:bg-slate-900"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-xl p-2 text-slate-700 hover:bg-slate-100
                     dark:text-slate-200 dark:hover:bg-slate-800"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* content */}
        <div className="max-h-[80vh] overflow-auto p-7">
          <h3 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">
            {project.title}
          </h3>

          <p className="mt-3 text-slate-600 dark:text-slate-300">
            {project.description[locale]}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span
                key={t}
                className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700
                           dark:bg-indigo-500/10 dark:text-indigo-300"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800
                           hover:border-indigo-200 hover:text-indigo-700
                           dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
              >
                <Github className="h-4 w-4" />
                Zobacz kod
              </a>
            )}

            {project.links.video && project.links.video.trim() !== "" && (
              <a
                href={project.links.video}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800
                           hover:border-indigo-200 hover:text-indigo-700
                           dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
              >
                <Video className="h-4 w-4" />
                Video
              </a>
            )}

            <button
              disabled
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-2xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-400
                         dark:border-slate-800"
              title="Demo wkrótce"
            >
              Demo (wkrótce)
            </button>
          </div>
        </div>
      </div>

      {/* animacja */}
      <style jsx global>{`
        @keyframes modalIn {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
