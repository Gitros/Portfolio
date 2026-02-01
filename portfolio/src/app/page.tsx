import { headers } from "next/headers";
import { redirect } from "next/navigation";

function pickLocale(acceptLanguage: string | null) {
  const value = (acceptLanguage ?? "").toLowerCase();
  if (value.includes("pl")) return "pl";
  return "en";
}

export default async function Home() {
  const acceptLanguage = (await headers()).get("accept-language");
  const locale = pickLocale(acceptLanguage);
  redirect(`/${locale}`);
}
