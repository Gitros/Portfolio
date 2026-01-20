"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/locales";
import { locales } from "@/i18n/locales";

function replaceLocale(pathname: string, nextLocale: Locale) {
  const parts = pathname.split("/");
  // parts[0] = "" ; parts[1] = locale
  if (parts.length >= 2) parts[1] = nextLocale;
  return parts.join("/") || `/${nextLocale}`;
}

export default function LanguageSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname() || `/${locale}`;

  return (
    <div className="flex items-center gap-1 rounded-xl border border-slate-200 bg-white p-1">
      {locales.map((l) => {
        const active = l === locale;
        return (
          <Link
            key={l}
            href={replaceLocale(pathname, l)}
            className={[
              "rounded-lg px-2.5 py-1 text-xs font-semibold",
              active
                ? "bg-indigo-600 text-white"
                : "text-slate-700 hover:text-slate-900",
            ].join(" ")}
          >
            {l.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
