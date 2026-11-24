"use client"

import { ChevronDown, Github } from "lucide-react"
import { useState } from "react"
import { ChipList, Chip } from "@/components/primitives/chip"
import { Collapse } from "@/components/primitives/collapse"
import { Reveal } from "@/components/primitives/reveal"
import { SpotCard } from "@/components/primitives/spot-card"
import type { Project } from "@/lib/content/projects"
import { cn } from "@/lib/utils"
import { ProjectDiagram } from "./diagrams"

export function CaseFile({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false)
  const panelId = `project-${project.id}-details`
  const flip = index % 2 === 1
  const featured = project.featured

  return (
    <Reveal as="article" className="scroll-mt-6">
      <div id={`project-${project.id}`} className="scroll-mt-6">
        <SpotCard featured={featured} className={cn("overflow-hidden p-5 sm:p-8", featured ? "lg:p-12" : "lg:p-10")}>
          <span
            aria-hidden
            className="pointer-events-none absolute -right-2 -top-6 select-none font-display font-bold leading-none text-foreground/[0.045] [font-size:clamp(7rem,18vw,15rem)]"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
            <figure className={cn(featured ? "lg:col-span-6" : "lg:col-span-5", flip && "lg:order-last")}>
              <div className="rounded-2xl border border-line bg-background/40 p-4 sm:p-6">
                <ProjectDiagram kind={project.diagram} />
              </div>
              <figcaption className="mt-3 font-mono text-xs text-muted-foreground">{project.caption}</figcaption>
            </figure>

            <div className={cn(featured ? "lg:col-span-6" : "lg:col-span-7")}>
              <div className="flex flex-wrap items-center gap-3">
                <p className="t-label text-primary">
                  Dossier {String(index + 1).padStart(2, "0")} · {project.period}
                </p>
                {featured && (
                  <Chip variant="status" tone="live">
                    Projet vedette
                  </Chip>
                )}
              </div>
              <h3 className={cn("mt-4 font-display font-semibold leading-tight text-foreground", featured ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl")}>
                {project.title}
              </h3>
              <p className="prose-fit mt-4 text-muted-foreground">{project.summary}</p>
              <ChipList items={project.tech} className="mt-5" />

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
                <button
                  type="button"
                  onClick={() => setOpen((v) => !v)}
                  aria-expanded={open}
                  aria-controls={panelId}
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold text-primary transition-colors hover:text-foreground"
                >
                  {open ? "Réduire" : "Voir le détail"}
                  <ChevronDown strokeWidth={1.75} aria-hidden className={cn("size-4 transition-transform duration-300", open && "rotate-180")} />
                </button>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Github strokeWidth={1.75} className="size-4" aria-hidden />
                    Code sur GitHub
                    <span className="sr-only"> — {project.title}</span>
                  </a>
                )}
              </div>

              <Collapse open={open} id={panelId}>
                <ul className="mt-3 space-y-3 border-t border-line pt-5 text-muted-foreground">
                  {project.details.map((d) => (
                    <li key={d} className="flex gap-3 leading-relaxed">
                      <span aria-hidden className="mt-2.5 size-1 shrink-0 rounded-full bg-primary" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </Collapse>
            </div>
          </div>
        </SpotCard>
      </div>
    </Reveal>
  )
}
