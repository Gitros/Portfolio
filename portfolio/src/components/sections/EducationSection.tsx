"use client";

import Container from "@/components/layout/Container";
import {
  education,
  educationStats,
  type Locale,
  type EducationItem,
} from "@/data/education";

export default function EducationSection({
  locale,
}: Readonly<{ locale: Locale }>) {
  const title = locale === "pl" ? "Ścieżka edukacyjna" : "Education path";
  const subtitle =
    locale === "pl"
      ? "Moja droga rozwoju - od technikum przez certyfikaty po studia"
      : "My growth journey - from high school through certificates to university";

  return (
    <section id="education" className="py-20">
      <Container>
        {/* header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            {title}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">{subtitle}</p>
        </div>

        {/* timeline */}
        <div className="relative mt-14">
          {/* center line */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-indigo-200 md:block dark:bg-indigo-500/20" />

          <div className="grid gap-10 md:gap-16">
            {education.map((item) => (
              <TimelineItem key={item.id} item={item} locale={locale} />
            ))}
          </div>
        </div>

        {/* stats */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {educationStats.map((s) => (
            <StatCard
              key={s.id}
              value={s.value[locale]}
              label={s.label[locale]}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function TimelineItem({
  item,
  locale,
}: Readonly<{
  item: EducationItem;
  locale: Locale;
}>) {
  const Icon = item.icon;

  const badgeClass =
    item.badgeVariant === "green"
      ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300"
      : "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300";

  const dotClass =
    item.dotColor === "green"
      ? "bg-emerald-500 shadow-[0_0_0_6px_rgba(16,185,129,0.12)] dark:shadow-[0_0_0_6px_rgba(16,185,129,0.20)]"
      : "bg-indigo-600 shadow-[0_0_0_6px_rgba(79,70,229,0.12)] dark:shadow-[0_0_0_6px_rgba(99,102,241,0.20)]";

  const card = (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start justify-between gap-6">
        <div>
          <span
            className={`inline-flex items-center rounded-full px-4 py-1 text-xs font-semibold ${badgeClass}`}
          >
            {item.dateLabel[locale]}
          </span>

          <h3 className="mt-4 text-2xl font-extrabold text-slate-900 dark:text-slate-100">
            {item.title[locale]}
          </h3>
          <p className="mt-1 font-semibold text-indigo-700 dark:text-indigo-300">
            {item.subtitle[locale]}
          </p>

          <p className="mt-5 text-slate-600 dark:text-slate-300">
            {item.description[locale]}
          </p>
        </div>

        <div className="rounded-2xl bg-indigo-50 p-4 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
          <Icon className="h-7 w-7" />
        </div>
      </div>

      <div className="mt-7 space-y-3">
        {item.highlights.map((h, idx) => {
          const HIcon = h.icon;
          return (
            <div
              key={idx}
              className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-950/40"
            >
              <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
                {h.text[locale]}
              </span>
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
                <HIcon className="h-4 w-4" />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="relative">
      {/* dot */}
      <div
        className={`absolute left-1/2 top-1/2 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full md:block ${dotClass}`}
      />

      {/* desktop: left/right; mobile: full */}
      <div className="grid md:grid-cols-2 md:gap-16">
        <div
          className={item.side === "left" ? "md:pr-8" : "md:pr-8 md:opacity-0"}
        >
          {item.side === "left" ? card : null}
        </div>
        <div
          className={item.side === "right" ? "md:pl-8" : "md:pl-8 md:opacity-0"}
        >
          {item.side === "right" ? card : null}
        </div>

        {/* mobile fallback */}
        <div className="md:hidden">{card}</div>
      </div>
    </div>
  );
}

function StatCard({
  value,
  label,
}: Readonly<{ value: string; label: string }>) {
  return (
    <div className="rounded-2xl border border-indigo-100 bg-indigo-50/60 px-6 py-6 text-center dark:border-indigo-400/20 dark:bg-indigo-500/10">
      <div className="text-3xl font-extrabold text-indigo-700 dark:text-indigo-300">
        {value}
      </div>
      <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        {label}
      </div>
    </div>
  );
}
