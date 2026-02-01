"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import FeaturedProject from "../projects/FeaturedProject";
import ProjectCard from "../projects/ProjectCard";
import ProjectModal from "../projects/ProjectModal";
import Container from "../layout/Container";

export default function ProjectsSection({ locale }: { locale: "pl" | "en" }) {
  const [open, setOpen] = useState<string | null>(null);
  const active = useMemo(() => projects.find((p) => p.id === open), [open]);

  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            {locale === "pl" ? "Projekty" : "Projects"}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            {locale === "pl"
              ? "Najważniejsze rzeczy, które zbudowałem i jak do tego podszedłem."
              : "My key projects and how I approached building them."}
          </p>
        </div>

        {featured && (
          <div className="mt-10">
            <FeaturedProject
              project={featured}
              locale={locale}
              onOpen={() => setOpen(featured.id)}
            />
          </div>
        )}

        {/* REST: wyśrodkowane, max szerokość, bez miejsca na 3 kafelek */}
        <div className="mx-auto mt-10 max-w-4xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {rest.map((p) => (
              <ProjectCard
                key={p.id}
                project={p}
                locale={locale}
                onOpen={() => setOpen(p.id)}
              />
            ))}
          </div>
        </div>
      </Container>

      {active && (
        <ProjectModal
          project={active}
          locale={locale}
          onClose={() => setOpen(null)}
        />
      )}
    </section>
  );
}
