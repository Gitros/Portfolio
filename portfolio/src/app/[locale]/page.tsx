import Container from "@/components/layout/Container";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import type { Locale } from "@/i18n/locales";
import { isLocale } from "@/i18n/locales";
import { getMessages } from "@/i18n/messages";
import Image from "next/image";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;

  const locale: Locale = isLocale(localeParam) ? (localeParam as Locale) : "pl";

  const m = getMessages(locale);

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden pt-10 pb-14 md:pt-12 md:pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2">
            <div
              className="h-[520px] w-[900px] rounded-full blur-3xl
                 bg-gradient-to-r from-indigo-200/60 via-fuchsia-200/40 to-sky-200/40
                 dark:from-indigo-500/20 dark:via-fuchsia-500/10 dark:to-sky-500/10
                 gradient-float"
            />
          </div>
        </div>

        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            {/* LEFT */}
            <div className="flex flex-col justify-center">
              <div>
                <span
                  className="inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-700
          dark:border-indigo-400/30 dark:bg-indigo-500/10 dark:text-indigo-300"
                >
                  👋 {m.hero.badge}
                </span>

                <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 lg:text-6xl">
                  {m.hero.title1}{" "}
                  <span className="text-indigo-600 dark:text-indigo-400">
                    {m.hero.title2}
                  </span>
                </h1>

                <p className="mt-5 max-w-xl text-lg leading-relaxed muted">
                  {m.hero.subtitle}
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a href="#projects" className="btn-primary">
                    {m.hero.ctaProjects} →
                  </a>
                </div>

                {/* social icons UNDER CTA */}
                <div className="mt-6 flex items-center gap-3">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    aria-label="GitHub"
                    className="h-10 w-10 rounded-full border border-slate-200 bg-white/70 grid place-items-center
            hover:border-indigo-200 hover:text-indigo-700
            dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
                  >
                    GH
                  </a>

                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    aria-label="LinkedIn"
                    className="h-10 w-10 rounded-full border border-slate-200 bg-white/70 grid place-items-center
            hover:border-indigo-200 hover:text-indigo-700
            dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
                  >
                    in
                  </a>

                  <a
                    href="mailto:twojemail@example.com"
                    aria-label="Email"
                    className="h-10 w-10 rounded-full border border-slate-200 bg-white/70 grid place-items-center
            hover:border-indigo-200 hover:text-indigo-700
            dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
                  >
                    @
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="absolute -inset-10 -z-10 rounded-[2rem] bg-indigo-200/50 blur-2xl dark:bg-indigo-500/10" />

              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <Image
                  src="/images/hero.jpg"
                  alt="Jakub Owczarek"
                  width={1200}
                  height={1400}
                  className="h-[420px] w-full object-cover sm:h-[520px] md:h-[600px] lg:h-[640px]"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* PLACEHOLDERS pod sekcje jak w Figmie */}
      <ProjectsSection locale={locale} />

      <SkillsSection locale={locale} />

      <section id="education" className="py-14">
        <Container>
          <div className="card p-8">
            <h2 className="text-3xl font-bold">Edukacja</h2>
            <div className="mt-6 h-48 rounded-2xl bg-slate-50 dark:bg-slate-800/60" />
          </div>
        </Container>
      </section>

      <section id="about" className="py-14">
        <Container>
          <div className="card p-8">
            <h2 className="text-3xl font-bold">O mnie</h2>
            <p className="mt-2 muted">
              (tu później wrzucimy zdjęcie z rowerem + 2 karty ról)
            </p>
            <div className="mt-6 h-48 rounded-2xl bg-slate-50 dark:bg-slate-800/60" />
          </div>
        </Container>
      </section>

      <section id="contact" className="py-14">
        <Container>
          <div className="card p-8">
            <h2 className="text-3xl font-bold">Kontakt</h2>
            <div className="mt-6 h-48 rounded-2xl bg-slate-50 dark:bg-slate-800/60" />
          </div>
        </Container>
      </section>

      <footer className="mt-10 border-t border-slate-200 py-10 dark:border-slate-800">
        <Container>
          <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
            <div className="text-sm muted">
              © {new Date().getFullYear()} Portfolio
            </div>
            <div className="flex gap-3 text-sm">
              <a
                className="muted hover:text-indigo-700 dark:hover:text-indigo-300"
                href="https://github.com/"
                target="_blank"
              >
                GitHub
              </a>
              <a
                className="muted hover:text-indigo-700 dark:hover:text-indigo-300"
                href="https://www.linkedin.com/"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
