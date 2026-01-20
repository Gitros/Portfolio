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
      className="cursor-pointer rounded-3xl border border-indigo-300 bg-indigo-50 p-8
                 hover:shadow-lg dark:border-indigo-500/30 dark:bg-indigo-500/10"
    >
      <span className="mb-2 inline-block rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
        Featured
      </span>

      <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>
      <p className="mt-3 muted">{project.short[locale]}</p>
    </div>
  );
}
