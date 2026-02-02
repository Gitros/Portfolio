import Footer from "@/components/layout/Footer";
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
      <div className="pt-[calc(4rem+env(safe-area-inset-top))] md:pt-0">
        {children}
      </div>
      <Footer />
    </div>
  );
}
