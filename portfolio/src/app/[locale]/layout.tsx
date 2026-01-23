import Navbar from "@/components/layout/Navbar";
import type { Locale } from "@/i18n/locales";
import { isLocale } from "@/i18n/locales";
import { ReactNode } from "react";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? (rawLocale as Locale) : "pl";

  return (
    <div>
      <Navbar locale={locale} />
      {children}
    </div>
  );
}
