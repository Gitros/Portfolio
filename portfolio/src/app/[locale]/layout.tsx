import Navbar from "@/components/layout/Navbar";
import type { Locale } from "@/i18n/locales";
import { isLocale } from "@/i18n/locales";

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = isLocale(params.locale) ? (params.locale as Locale) : "pl";

  return (
    <div>
      <Navbar locale={locale} />
      {children}
    </div>
  );
}
