"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { Chip } from "@/components/primitives/chip"
import { Collapse } from "@/components/primitives/collapse"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { SkillCategory, Vlan } from "@/lib/content/skills"
import { cn } from "@/lib/utils"
import { categoryIcons, vlanIcons } from "./icons"

function Categories({ categories }: { categories: SkillCategory[] }) {
  return (
    <div className="space-y-6">
      {categories.map((c) => {
        const Icon = categoryIcons[c.icon]
        return (
          <section key={c.category}>
            <h3 className="flex items-center gap-2.5 font-display text-base font-semibold text-foreground">
              <Icon strokeWidth={1.75} className="size-4 text-primary" aria-hidden />
              {c.category}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {c.tools.map((t) => (
                <li key={t}>
                  <Chip variant="skill">{t}</Chip>
                </li>
              ))}
            </ul>
          </section>
        )
      })}
    </div>
  )
}

function DesktopTabs({ vlans }: { vlans: Vlan[] }) {
  return (
    <Tabs defaultValue={vlans[0].id} className="hidden gap-6 md:flex">
      <TabsList aria-label="Zones de compétences" className="h-auto w-full flex-wrap justify-start gap-2 bg-transparent p-0">
        {vlans.map((v, i) => {
          const Icon = vlanIcons[v.icon]
          return (
            <TabsTrigger
              key={v.id}
              value={v.id}
              className="min-h-11 flex-none gap-2 rounded-xl border border-line bg-surface-1 px-4 text-sm text-muted-foreground data-[state=active]:border-primary/60 data-[state=active]:bg-primary/10 data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              <Icon strokeWidth={1.75} className="size-4" aria-hidden />
              <span className="font-mono text-[11px] uppercase tracking-[0.12em]">V{i + 1}</span>
              {v.name}
            </TabsTrigger>
          )
        })}
      </TabsList>
      {vlans.map((v) => (
        <TabsContent key={v.id} value={v.id} className="card-surface p-8">
          <Categories categories={v.categories} />
        </TabsContent>
      ))}
    </Tabs>
  )
}

function MobileAccordion({ vlans }: { vlans: Vlan[] }) {
  const [open, setOpen] = useState<string | null>(vlans[0].id)
  return (
    <ul className="space-y-3 md:hidden">
      {vlans.map((v, i) => {
        const isOpen = open === v.id
        const Icon = vlanIcons[v.icon]
        const panel = `vlan-m-${v.id}`
        return (
          <li key={v.id} className={cn("card-surface", isOpen && "border-primary/40")}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panel}
                onClick={() => setOpen(isOpen ? null : v.id)}
                className="flex min-h-14 w-full items-center gap-3 rounded-2xl px-4 text-left"
              >
                <Icon strokeWidth={1.75} className="size-5 shrink-0 text-primary" aria-hidden />
                <span className="flex-1">
                  <span className="t-label block text-muted-foreground">V{i + 1}</span>
                  <span className="font-display text-base font-semibold">{v.name}</span>
                </span>
                <ChevronDown strokeWidth={1.75} aria-hidden className={cn("size-5 text-muted-foreground transition-transform duration-300", isOpen && "rotate-180")} />
              </button>
            </h3>
            <Collapse open={isOpen} id={panel}>
              <div className="border-t border-line px-4 pb-5 pt-4">
                <Categories categories={v.categories} />
              </div>
            </Collapse>
          </li>
        )
      })}
    </ul>
  )
}

export function VlanMatrix({ vlans }: { vlans: Vlan[] }) {
  return (
    <>
      <DesktopTabs vlans={vlans} />
      <MobileAccordion vlans={vlans} />
    </>
  )
}
