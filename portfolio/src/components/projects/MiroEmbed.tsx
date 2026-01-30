"use client";

import { useMemo } from "react";

export default function MiroEmbed({
  embedUrl,
  title = "Miro board",
}: {
  embedUrl: string;
  title?: string;
}) {
  // prosta walidacja żeby ktoś nie wstrzyknął ci dziwnych URLi
  const safeUrl = useMemo(() => {
    try {
      const u = new URL(embedUrl);
      if (u.hostname !== "miro.com") return null;
      return u.toString();
    } catch {
      return null;
    }
  }, [embedUrl]);

  if (!safeUrl) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <p className="text-slate-700 dark:text-slate-200">
          Nie udało się załadować osadzenia.
        </p>
      </div>
    );
  }

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
          {title}
        </h3>
        <a
          href={safeUrl}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-indigo-700 hover:underline dark:text-indigo-300"
        >
          Otwórz w nowej karcie →
        </a>
      </div>

      {/* 16:9 responsywnie */}
      <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
        <div className="aspect-video w-full">
          <iframe
            className="h-full w-full"
            src={safeUrl}
            title={title}
            frameBorder="0"
            scrolling="no"
            allow="fullscreen; clipboard-read; clipboard-write"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
