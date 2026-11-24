"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { Collapse } from "@/components/primitives/collapse"
import type { Phase } from "@/lib/content/experience"
import { cn } from "@/lib/utils"

export function TicketLog({ phases, scope }: { phases: Phase[]; scope: string }) {
  const [open, setOpen] = useState<string | null>(phases[0]?.ticket ?? null)

  return (
    <ul className="mt-8 space-y-3">
      {phases.map((phase) => {
        const isOpen = open === phase.ticket
        const panelId = `${scope}-${phase.ticket.slice(1).toLowerCase()}`
        return (
          <li key={phase.ticket} className={cn("rounded-xl border bg-background/40 transition-colors", isOpen ? "border-primary/40" : "border-line")}>
            <h4>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : phase.ticket)}
                className="flex min-h-14 w-full items-center gap-3 rounded-xl px-4 py-3 text-left"
              >
                <span className="shrink-0 rounded-md border border-primary/30 bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
                  {phase.ticket}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="t-label block text-muted-foreground">
                    {phase.label}
                    {phase.period ? ` · ${phase.period}` : ""}
                  </span>
                  <span className="mt-1 block text-base font-semibold leading-snug text-foreground">{phase.title}</span>
                </span>
                <ChevronDown strokeWidth={1.75} aria-hidden className={cn("size-5 shrink-0 text-muted-foreground transition-transform duration-300", isOpen && "rotate-180")} />
              </button>
            </h4>
            <Collapse open={isOpen} id={panelId}>
              <ul className="space-y-3 border-t border-line px-4 pb-5 pt-4 text-muted-foreground">
                {phase.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[0.9375rem] leading-relaxed">
                    <span aria-hidden className="mt-2.5 size-1 shrink-0 rounded-full bg-primary" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Collapse>
          </li>
        )
      })}
    </ul>
  )
}
