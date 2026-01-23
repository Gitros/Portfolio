"use client";

import { useMemo, useState } from "react";
import Container from "@/components/layout/Container";
import { skills, type SkillCategoryId, levelLabel } from "@/data/skills";
import SkillCard from "@/components/skills/SkillCard";
import { Code2, Layers3, Palette, Wrench, Sparkles } from "lucide-react";

type Locale = "pl" | "en";

const tabIcons: Record<SkillCategoryId, React.ElementType> = {
  languages: Code2,
  frameworks: Layers3,
  design: Palette,
  tools: Wrench,
};

const tabBase =
  "inline-flex items-center justify-center gap-2 rounded-2xl border px-5 py-3 text-sm font-semibold transition " +
  "focus:outline-none focus:ring-2 focus:ring-indigo-300/60";

const tabActive =
  "bg-indigo-600 text-white border-indigo-600 shadow-sm " +
  "dark:bg-indigo-500 dark:border-indigo-500 dark:text-white";

const tabInactive =
  "bg-white text-slate-900 border-slate-200 hover:border-indigo-200 hover:text-indigo-700 " +
  "dark:bg-slate-900 dark:text-slate-100 dark:border-slate-800 dark:hover:border-indigo-400 dark:hover:text-indigo-300";

export default function SkillsSection({
  locale,
}: Readonly<{ locale: Locale }>) {
  const [active, setActive] = useState<SkillCategoryId>("languages");

  const activeCategory = useMemo(
    () => skills.find((c) => c.id === active) ?? skills[0],
    [active],
  );

  const title = locale === "pl" ? "Umiejętności" : "Skills";
  const subtitle =
    locale === "pl"
      ? "Technologie i narzędzia, z którymi pracuję na co dzień"
      : "Technologies and tools I use day-to-day";
  const badge = locale === "pl" ? "Stack technologiczny" : "Tech stack";

  return (
    <section id="skills" className="py-20">
      <Container>
        {/* header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 dark:border-indigo-400/30 dark:bg-indigo-500/10 dark:text-indigo-300">
            <Sparkles className="h-4 w-4" />
            {badge}
          </div>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            {title}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">{subtitle}</p>
        </div>

        {/* tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {skills.map((c) => {
            const Icon = tabIcons[c.id];
            const isActive = c.id === active;

            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActive(c.id)}
                className={`${tabBase} ${isActive ? tabActive : tabInactive}`}
              >
                <Icon className="h-4 w-4" />
                {c.label[locale]}
              </button>
            );
          })}
        </div>

        {/* cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {activeCategory.items.map((s) => (
            <SkillCard key={s.id} skill={s} locale={locale} />
          ))}
        </div>

        {/* legend */}
        <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-slate-600 dark:text-slate-300">
          <LegendItem label={levelLabel.expert[locale]} dots={5} />
          <LegendItem label={levelLabel.advanced[locale]} dots={4} />
          <LegendItem label={levelLabel.intermediate[locale]} dots={3} />
        </div>
      </Container>
    </section>
  );
}

function LegendItem({
  label,
  dots,
}: Readonly<{ label: string; dots: number }>) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex gap-1.5">
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
      <span>{label}</span>
    </div>
  );
}
