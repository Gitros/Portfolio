"use client";

import type { Skill } from "@/data/skills";
import {
  Code2,
  Braces,
  FileCode2,
  Hash,
  Database,
  Globe,
  Layers3,
  Atom,
  Triangle,
  Wind,
  TestTube2,
  GitBranch,
  Box,
  Cloud,
  ShieldCheck,
  Palette,
  Layout,
  PanelsTopLeft,
  Workflow,
  Wrench,
  Terminal,
} from "lucide-react";

type Locale = "pl" | "en";

function pickMeta(skill: Skill, locale: Locale) {
  const facts = skill.facts?.slice(0, 2).map((f) => f.text[locale]) ?? [];
  return facts.join(" • ");
}

// Ikony per skill.id (Twoje ID z skills.ts)
const skillIcons: Record<string, React.ElementType> = {
  // languages
  ts: FileCode2,
  js: Braces,
  cs: Hash,
  sql: Database,
  htmlcss: Globe,

  // frameworks
  dotnet: Layers3,
  ef: Database,
  react: Atom,
  next: Triangle,
  tailwind: Wind,
  xunit: TestTube2,
  mediatR: Workflow,

  // design
  figma: Layout,
  miro: PanelsTopLeft,
  ux: Palette,
  responsive: Layout,

  // tools
  git: GitBranch,
  vscode: Terminal,
  docker: Box,
  vercel: Cloud,
  azure: ShieldCheck,
};

export default function TechCard({
  skill,
  locale,
}: Readonly<{
  skill: Skill;
  locale: Locale;
}>) {
  const meta = pickMeta(skill, locale);
  const Icon = skillIcons[skill.id] ?? Code2;

  return (
    <div className="rounded-3xl border border-indigo-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-400/40">
      <div className="flex items-start gap-4">
        <div
          className="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
          aria-hidden="true"
        >
          <Icon className="h-6 w-6" />
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-lg font-extrabold text-slate-900 dark:text-slate-100">
            {skill.name}
          </h3>

          {meta ? (
            <p className="mt-1 text-sm font-semibold text-indigo-700 dark:text-indigo-300">
              {meta}
            </p>
          ) : (
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {locale === "pl" ? "W moim stacku" : "In my stack"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
