import { Sparkles } from "lucide-react";

export default function ProjectHighlights({
  title,
  items,
}: Readonly<{
  title: string;
  items: string[];
}>) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-4 flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />
        <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100">
          {title}
        </h3>
      </div>

      <ul className="grid gap-3 sm:grid-cols-2">
        {items.map((t) => (
          <li
            key={t}
            className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-800
                       dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
          >
            {t}
          </li>
        ))}
      </ul>
    </section>
  );
}
