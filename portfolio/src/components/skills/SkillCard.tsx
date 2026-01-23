"use client";

import type { Skill } from "@/data/skills";
import { levelDots, levelLabel, levelProgress } from "@/data/skills";
import { Clock, Rocket, Award } from "lucide-react";

type Locale = "pl" | "en";

function FactIcon({ kind }: { kind?: "time" | "projects" | "cert" }) {
  if (kind === "time") return <Clock className="h-4 w-4" />;
  if (kind === "projects") return <Rocket className="h-4 w-4" />;
  if (kind === "cert") return <Award className="h-4 w-4" />;
  return null;
}

export default function SkillCard({
  skill,
  locale,
}: {
  skill: Skill;
  locale: Locale;
}) {
  const dots = levelDots[skill.level];
  const progress = levelProgress[skill.level];

  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-400/60">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900 transition group-hover:text-indigo-700 dark:text-slate-100 dark:group-hover:text-indigo-300">
            {skill.name}
          </h3>
          <p className="mt-1 text-sm text-indigo-700 dark:text-indigo-300">
            {levelLabel[skill.level][locale]}
          </p>
        </div>

        <div className="flex gap-1.5 pt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={[
                "h-2.5 w-2.5 rounded-full",
                i < dots
                  ? "bg-indigo-600 dark:bg-indigo-400"
                  : "bg-slate-200 dark:bg-slate-700",
              ].join(" ")}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800">
        <div
          className="h-2 rounded-full bg-indigo-600 transition-[width] duration-500 dark:bg-indigo-400"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* FACTS: rozpycha w dół na hover */}
      {!!skill.facts?.length && (
        <div className="mt-4 grid grid-rows-[0fr] transition-all duration-300 ease-out group-hover:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <div className="flex flex-wrap gap-2 pt-1">
              {skill.facts.slice(0, 2).map((f, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-indigo-700 shadow-sm dark:border-slate-700 dark:bg-slate-950/90 dark:text-indigo-300"
                >
                  <FactIcon kind={f.icon} />
                  <span>{f.text[locale]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
