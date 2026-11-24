import { ClipboardCheck, GraduationCap } from "lucide-react"
import { Chip } from "@/components/primitives/chip"
import { NodeHeader } from "@/components/primitives/node-header"
import { NodeSection } from "@/components/primitives/node-section"
import { Reveal } from "@/components/primitives/reveal"
import { SpotCard } from "@/components/primitives/spot-card"
import { academicProject, studies } from "@/lib/content/education"
import { cn } from "@/lib/utils"

export function Education() {
  return (
    <NodeSection id="education">
      <NodeHeader id="education" title="Parcours académique" description="ENSA Marrakech, 2022 – 2027." />

      <ol className="grid gap-4 md:grid-cols-2 md:gap-6">
        {studies.map((s, i) => (
          <Reveal as="li" key={s.title} delay={i * 0.1} className={cn(i === 0 && "md:mt-14")}>
            <SpotCard className="h-full p-6">
              <div aria-hidden className={cn("absolute inset-x-6 top-0 h-[3px] rounded-b-full bg-primary", i === 0 ? "opacity-40" : "opacity-90")} />
              <p className="t-label text-primary">
                Palier {i + 1} · {s.period}
              </p>
              <div className="mt-4 flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <GraduationCap strokeWidth={1.75} className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold leading-snug">{s.title}</h3>
                  <p className="mt-1 text-primary">{s.school}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
                </div>
              </div>
            </SpotCard>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={0.1} className="mt-6">
        <SpotCard featured className="p-6 sm:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <ClipboardCheck strokeWidth={1.75} className="size-5" aria-hidden />
            </span>
            <Chip variant="status" tone="live">
              {academicProject.status}
            </Chip>
          </div>
          <h3 className="mt-5 font-display text-2xl font-semibold leading-snug sm:text-3xl">{academicProject.title}</h3>
          <p className="mt-2 font-mono text-xs leading-relaxed text-muted-foreground">{academicProject.meta}</p>
          <p className="prose-fit mt-5 text-muted-foreground">{academicProject.description}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div>
              <div aria-hidden className="h-1.5 rounded-full bg-ok" />
              <p className="t-label mt-3 text-ok">Réalisé</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{academicProject.done}</p>
            </div>
            <div>
              <div aria-hidden className="h-1.5 rounded-full bg-live [background-image:repeating-linear-gradient(135deg,transparent_0_6px,oklch(0_0_0/0.18)_6px_12px)]" />
              <p className="t-label mt-3 text-live">En cours</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{academicProject.ongoing}</p>
            </div>
          </div>
        </SpotCard>
      </Reveal>
    </NodeSection>
  )
}
