"use client"

import { Search } from "lucide-react"
import { Kbd } from "@/components/ui/kbd"
import { openPalette } from "@/lib/nav"

export function PaletteButton() {
  return (
    <button
      type="button"
      onClick={openPalette}
      onPointerEnter={() => void import("./command-palette")}
      onFocus={() => void import("./command-palette")}
      title="Palette de commandes (Ctrl+K)"
      aria-keyshortcuts="Control+K Meta+K"
      className="hidden h-11 items-center gap-2 rounded-xl border border-line bg-background/70 pl-3 pr-2 text-sm text-muted-foreground backdrop-blur-md transition-colors hover:border-primary/50 hover:text-foreground lg:inline-flex"
    >
      <Search strokeWidth={1.75} className="size-4" aria-hidden />
      <span>Rechercher</span>
      <Kbd className="font-mono">K</Kbd>
    </button>
  )
}
