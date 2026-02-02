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

export default function LanguageSwitch({
  locale,
}: Readonly<{ locale: Locale }>) {
  const pathname = usePathname() || `/${locale}`;
  const nextLocale = locale === "pl" ? "en" : "pl";
  const label = nextLocale.toUpperCase();
  const title = nextLocale === "pl" ? "Zmien na PL" : "Switch to EN";

  return (
    <Link
      href={replaceLocale(pathname, nextLocale as (typeof locales)[number])}
      className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 bg-white text-[11px] font-extrabold tracking-widest text-slate-800 hover:border-indigo-200 hover:text-indigo-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-indigo-400"
      aria-label={title}
      title={title}
    >
      {label}
    </Link>
  );
}
