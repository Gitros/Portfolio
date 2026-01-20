"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import FeaturedProject from "../projects/FeaturedProject";
import ProjectCard from "../projects/ProjectCard";
import ProjectModal from "../projects/ProjectModal";
import Container from "../layout/Container";

export default function ProjectsSection({ locale }: { locale: "pl" | "en" }) {
  const [open, setOpen] = useState<string | null>(null);
  const active = projects.find((p) => p.id === open);

  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20">
      <Container>
        <h2 className="text-3xl font-bold">Projekty</h2>

        {featured && (
          <div className="mt-8">
            <FeaturedProject
              project={featured}
              locale={locale}
              onOpen={() => setOpen(featured.id)}
            />
          </div>
        )}

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <ProjectCard
              key={p.id}
              project={p}
              locale={locale}
              onOpen={() => setOpen(p.id)}
            />
          ))}
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
