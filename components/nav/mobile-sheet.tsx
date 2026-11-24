"use client"

import { Search } from "lucide-react"
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import { Kbd } from "@/components/ui/kbd"
import { nodeNumber, sections } from "@/lib/content/site"
import { goTo, openPalette } from "@/lib/nav"
import { cn } from "@/lib/utils"

interface MobileSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  active: string
}

export default function MobileSheet({ open, onOpenChange, active }: MobileSheetProps) {
  const leaveThen = (fn: () => void) => {
    onOpenChange(false)
    window.setTimeout(fn, 380)
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="pb-[max(1rem,env(safe-area-inset-bottom))]">
        <DrawerHeader className="text-left">
          <p className="t-label text-primary">Le Cluster</p>
          <DrawerTitle className="font-display text-2xl">Tous les nœuds</DrawerTitle>
          <DrawerDescription>Choisissez une zone à explorer.</DrawerDescription>
        </DrawerHeader>
        <nav aria-label="Toutes les sections" className="overflow-y-auto px-4">
          <ul className="grid grid-cols-2 gap-2">
            {sections.map(({ id, label, index, icon: Icon }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "location" : undefined}
                  onClick={(e) => {
                    e.preventDefault()
                    leaveThen(() => goTo(id))
                  }}
                  className={cn(
                    "flex min-h-14 items-center gap-3 rounded-xl border px-3 py-2 transition-colors",
                    active === id ? "border-primary/60 bg-primary/10 text-foreground" : "border-line bg-surface-1 text-foreground",
                  )}
                >
                  <Icon strokeWidth={1.75} className="size-5 shrink-0 text-primary" aria-hidden />
                  <span className="flex min-w-0 flex-col leading-tight">
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{nodeNumber(index)}</span>
                    <span className="truncate text-sm font-medium">{label}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="px-4 pt-3">
          <button
            type="button"
            onClick={() => leaveThen(openPalette)}
            className="flex min-h-12 w-full items-center justify-between rounded-xl border border-line px-3 text-sm text-muted-foreground"
          >
            <span className="inline-flex items-center gap-2">
              <Search strokeWidth={1.75} className="size-4" aria-hidden /> Rechercher une section, un projet, une action
            </span>
            <Kbd className="font-mono">K</Kbd>
          </button>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
