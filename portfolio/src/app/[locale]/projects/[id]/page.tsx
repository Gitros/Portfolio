import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import type { Locale } from "@/i18n/locales";
import { isLocale } from "@/i18n/locales";
import Container from "@/components/layout/Container";
import ProjectDetails from "@/components/projects/ProjectDetails";
import BackButton from "@/components/buttons/BackButton";

export default async function ProjectPage({
  params,
}: Readonly<{
  params: Promise<{ locale: string; id: string }>;
}>) {
  const { locale: rawLocale, id } = await params;
  const locale: Locale = isLocale(rawLocale) ? (rawLocale as Locale) : "pl";

  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <main className="py-16">
      <Container>
        <BackButton
          label={locale === "pl" ? "Wróć do projektów" : "Back to projects"}
        />

        <ProjectDetails project={project} locale={locale} />
      </Container>
    </main>
  );
}
