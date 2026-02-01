import type { Project } from "@/data/projects";
import { BookOpen, Users, Workflow, ExternalLink } from "lucide-react";
import MiroEmbed from "./MiroEmbed";
import ProjectHighlights from "./ProjectHighlights";
import ProjectLearnings from "./ProjectLearnings";
import ProjectVideo from "../helpers/ProjectVide";

export default function ProjectDetails({
  project,
  locale,
}: Readonly<{
  project: Project;
  locale: "pl" | "en";
}>) {
  const t = (pl: string, en: string) => (locale === "pl" ? pl : en);

  const hasVideo = Boolean(project.links?.video?.trim());

  return (
    <div className="space-y-10 mt-5">
      {/* header */}
      <header className="space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          {project.title}
        </h1>
        <p className="text-slate-600 dark:text-slate-300">
          {project.short[locale]}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700
                         dark:bg-slate-800 dark:text-slate-200"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          {project.links.github && (
            <a
              className="btn-ghost"
              href={project.links.github}
              target="_blank"
            >
              GitHub
            </a>
          )}
          {project.resources?.miro && (
            <a
              className="btn-ghost inline-flex items-center gap-2"
              href={project.resources.miro}
              target="_blank"
            >
              {t("Miro board", "Miro board")}{" "}
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </header>

      {/* O projekcie */}
      {project.about && (
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-6 flex items-center gap-3">
            <BookOpen className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />
            <h2 className="text-2xl font-bold">{t("O projekcie", "About")}</h2>
          </div>

          <div
            className={hasVideo ? "grid gap-8 lg:grid-cols-2" : "grid gap-8"}
          >
            {/* LEWA STRONA – opis */}
            <div>
              <p className="text-slate-700 dark:text-slate-200">
                {project.about.intro[locale]}
              </p>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                    {t("Główne funkcje", "Key features")}
                  </h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-200">
                    {project.about.features[locale].map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                    {t("Architektura", "Architecture")}
                  </h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-200">
                    {project.about.architecture[locale].map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* PRAWA STRONA – video */}
            {hasVideo && (
              <div className="lg:sticky lg:top-24">
                <ProjectVideo youtubeId={project.links!.video!.trim()} />
              </div>
            )}
          </div>
        </section>
      )}

      {project.highlights && (
        <ProjectHighlights
          title={project.highlights[locale].title}
          items={project.highlights[locale].items}
        />
      )}

      {/* Proces powstawania */}
      {project.process?.length ? (
        <section className="rounded-3xl border border-indigo-100 bg-indigo-50/50 p-8 dark:border-indigo-400/20 dark:bg-indigo-500/5">
          <div className="mb-6 flex items-center gap-3">
            <Workflow className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />
            <h2 className="text-2xl font-bold">
              {t("Proces powstawania", "How I built it")}
            </h2>
          </div>

          <div className="space-y-4">
            {project.process.map((step, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {step.title[locale]}
                  </h3>
                  {step.date && (
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {step.date}
                    </span>
                  )}
                </div>

                <p className="mt-2 text-slate-700 dark:text-slate-200">
                  {step.text[locale]}
                </p>

                {!!step.tags?.length && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {step.link && (
                  <div className="mt-4">
                    <a
                      href={step.link.href}
                      target="_blank"
                      className="text-sm font-semibold text-indigo-700 hover:underline dark:text-indigo-300"
                    >
                      {step.link.label} →
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {project.resources?.miroEmbed && (
        <MiroEmbed
          embedUrl={project.resources.miroEmbed}
          title="Miro – plan / diagramy"
        />
      )}

      {project.learnings?.length ? (
        <ProjectLearnings locale={locale} learnings={project.learnings} />
      ) : null}
    </div>
  );
}
