import Container from "@/components/layout/Container";
import Image from "next/image";
import { aboutContent, type Locale } from "@/data/about";
import {
  Code2,
  Zap,
  Trophy,
  Heart,
  Gamepad2,
  Mountain,
  Coffee,
  Sparkles,
  Figma,
  MessageSquare,
  ArrowRight,
  BriefcaseBusiness,
} from "lucide-react";

const statIcon = {
  code: Code2,
  zap: Zap,
  trophy: Trophy,
} as const;

const tagIcon = {
  code: Code2,
  game: Gamepad2,
  mountain: Mountain,
  coffee: Coffee,
} as const;

const processIcon = {
  spark: Sparkles,
  figma: Figma,
  discord: MessageSquare,
  code: Code2,
} as const;

function toneClasses(tone: "indigo" | "purple" | "green" | "amber") {
  switch (tone) {
    case "indigo":
      return "bg-indigo-50 text-indigo-700 border-indigo-100 dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-400/30";
    case "purple":
      return "bg-purple-50 text-purple-700 border-purple-100 dark:bg-purple-500/10 dark:text-purple-300 dark:border-purple-400/30";
    case "green":
      return "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-400/30";
    case "amber":
      return "bg-amber-50 text-amber-800 border-amber-100 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-400/30";
  }
}

export default function AboutSection({ locale }: { locale: Locale }) {
  const c = aboutContent;

  const role2Title =
    locale === "pl" ? "Organizator Turniejów" : "Tournament Organizer";

  return (
    <section id="about" className="py-20">
      <Container>
        {/* header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            {c.title[locale]}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            {c.subtitle[locale]}
          </p>
        </div>

        {/* top grid: text card + image */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-stretch">
          {/* left card */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
                <Heart className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                {c.cardTitle[locale]}
              </h3>
            </div>

            <div className="mt-5 space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              {c.paragraphs[locale].map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            {/* stats */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {c.stats.map((s) => {
                const Icon = statIcon[s.icon];
                return (
                  <div
                    key={s.value + s.label[locale]}
                    className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm
                               dark:border-slate-800 dark:bg-slate-900"
                  >
                    <div className="mx-auto grid h-11 w-11 place-items-center rounded-2xl bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mt-3 text-2xl font-extrabold text-slate-900 dark:text-slate-100">
                      {s.value}
                    </div>
                    <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                      {s.label[locale]}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* interests */}
            <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
                  <Zap className="h-5 w-5" />
                </span>
                <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  {c.interestsTitle[locale]}
                </h4>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                {c.interests.map((t) => {
                  const Icon = tagIcon[t.icon];
                  return (
                    <span
                      key={t.text[locale]}
                      className={[
                        "inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold",
                        toneClasses(t.tone),
                      ].join(" ")}
                    >
                      <Icon className="h-4 w-4" />
                      {t.text[locale]}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          {/* right image */}
          <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="overflow-hidden rounded-[1.35rem]">
              <Image
                src={c.image.src}
                alt={c.image.alt}
                width={1400}
                height={900}
                className="h-[420px] w-full object-cover sm:h-[480px] lg:h-full"
              />
            </div>
          </div>
        </div>

        {/* process */}
        <div className="mt-10 rounded-3xl border border-indigo-100 bg-indigo-50/40 p-7 dark:border-indigo-400/20 dark:bg-indigo-500/10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 dark:text-indigo-300">
              <Code2 className="h-4 w-4" />
              {c.processTitle[locale]}
            </div>
          </div>

          <div className="mt-7 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
            {c.process.map((step, idx) => {
              const Icon = processIcon[step.icon];
              return (
                <div key={step.title} className="flex items-center gap-4">
                  <div className="rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="leading-tight">
                        <div className="font-bold text-slate-900 dark:text-slate-100">
                          {step.title}
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-300">
                          {step.subtitle[locale]}
                        </div>
                      </div>
                    </div>
                  </div>

                  {idx < c.process.length - 1 && (
                    <ArrowRight className="hidden h-5 w-5 text-indigo-500 md:block" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* roles */}
        <h3 className="mt-12 text-center text-xl font-bold text-slate-900 dark:text-slate-100">
          {c.rolesTitle[locale]}
        </h3>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* role 1 */}
          <RoleCard
            locale={locale}
            title="IT Specialist"
            meta={c.roles[0].meta[locale]}
            description={c.roles[0].description[locale]}
            tone="indigo"
            icon="briefcase"
          />

          {/* role 2 */}
          <RoleCard
            locale={locale}
            title={role2Title}
            meta={c.roles[1].meta[locale]}
            description={c.roles[1].description[locale]}
            tone="purple"
            icon="trophy"
          />
        </div>
      </Container>
    </section>
  );
}

function RoleCard({
  title,
  meta,
  description,
  tone,
  icon,
}: {
  locale: Locale;
  title: string;
  meta: string;
  description: string;
  tone: "indigo" | "purple";
  icon: "briefcase" | "trophy";
}) {
  const Icon = icon === "briefcase" ? BriefcaseBusiness : Trophy;

  const toneBg =
    tone === "indigo"
      ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
      : "bg-purple-50 text-purple-700 dark:bg-purple-500/10 dark:text-purple-300";

  const metaColor =
    tone === "indigo"
      ? "text-indigo-700 dark:text-indigo-300"
      : "text-purple-700 dark:text-purple-300";

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start gap-4">
        <div
          className={`grid h-12 w-12 place-items-center rounded-2xl ${toneBg}`}
        >
          <Icon className="h-6 w-6" />
        </div>

        <div className="min-w-0">
          <div className="text-xl font-extrabold text-slate-900 dark:text-slate-100">
            {title}
          </div>
          <div className={`mt-1 text-sm font-semibold ${metaColor}`}>
            {meta}
          </div>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
