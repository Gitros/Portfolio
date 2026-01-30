import { GraduationCap } from "lucide-react";
import type { ProjectLearningGroup } from "@/data/projects";

type Locale = "pl" | "en";

export default function ProjectLearnings({
  locale,
  learnings,
}: Readonly<{
  locale: Locale;
  learnings: ProjectLearningGroup[];
}>) {
  const t = (pl: string, en: string) => (locale === "pl" ? pl : en);

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-4 flex items-center gap-2">
        <GraduationCap className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />
        <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100">
          {t("Czego się nauczyłem", "What I learned")}
        </h3>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {learnings.map((g) => (
          <div
            key={g.title[locale]}
            className="rounded-3xl border border-slate-100 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950"
          >
            <h4 className="text-base font-extrabold text-slate-900 dark:text-slate-100">
              {g.title[locale]}
            </h4>

            <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-200">
              {g.items[locale].map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500/80" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
