import { MapPin } from "lucide-react"
import { ChipList } from "@/components/primitives/chip"
import { NodeHeader } from "@/components/primitives/node-header"
import { NodeSection } from "@/components/primitives/node-section"
import { Reveal } from "@/components/primitives/reveal"
import { SpotCard } from "@/components/primitives/spot-card"
import { roles, type Role } from "@/lib/content/experience"
import { TicketLog } from "./ticket-log"

function RoleCard({ role, index }: { role: Role; index: number }) {
  const primary = index === 0
  return (
    <li className="relative grid gap-4 pl-9 sm:pl-12 lg:grid-cols-[10.5rem_1fr] lg:gap-8">
      <span aria-hidden className="absolute left-0 top-1.5 flex size-[13px] items-center justify-center rounded-full border border-primary/70 bg-background lg:size-4">
        <span className="size-1.5 rounded-full bg-primary" />
      </span>
      <div className="lg:pt-0.5 lg:text-right">
        <p className="font-mono text-sm tracking-tight text-primary">{role.stamp}</p>
        <p className="mt-1 text-sm text-muted-foreground">{role.period}</p>
        <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin strokeWidth={1.75} className="size-3.5" aria-hidden />
          {role.location}
        </p>
      </div>
      <Reveal delay={0.05}>
        <SpotCard featured={primary} className={primary ? "p-5 sm:p-8" : "p-5 sm:p-6"}>
          <h3 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">{role.organization}</h3>
          <p className="mt-1 text-primary">{role.title}</p>
          {role.context && <p className="prose-fit mt-5 text-muted-foreground">{role.context}</p>}
          {role.phases && <TicketLog phases={role.phases} scope={`exp-${index}`} />}
          {role.points && (
            <ul className="mt-5 space-y-3 text-muted-foreground">
              {role.points.map((p) => (
                <li key={p} className="flex gap-3 leading-relaxed">
                  <span aria-hidden className="mt-2.5 size-1 shrink-0 rounded-full bg-primary" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          )}
          <ChipList items={role.tech} className="mt-6" />
        </SpotCard>
      </Reveal>
    </li>
  )
}

export function Experience() {
  return (
    <NodeSection id="experience">
      <NodeHeader id="experience" title="Parcours professionnel" description="De l'audit de conformité à la mise en production d'une architecture Zero Trust." />
      <div className="relative">
        <span aria-hidden className="absolute bottom-2 left-[6px] top-2 w-px bg-line lg:left-[7.5px]" />
        <ol className="space-y-14">
          {roles.map((role, i) => (
            <RoleCard key={role.organization} role={role} index={i} />
          ))}
        </ol>
      </div>
    </NodeSection>
  )
}
