import { Monogram } from "@/components/primitives/monogram"
import { profile } from "@/lib/content/site"
import { PaletteButton } from "./palette-button"
import { ThemeToggle } from "./theme-toggle"

export function Identity() {
  return (
    <div className="pointer-events-none fixed inset-x-4 top-4 z-50 flex items-start justify-between">
      <div className="pointer-events-auto flex items-center gap-2">
        <a href="#hero" aria-label="ME, retour à l'accueil" className="rounded-xl">
          <Monogram />
        </a>
        <p
          className="flex h-11 items-center gap-2 rounded-xl border border-ok/30 bg-background/70 px-3 font-mono text-xs text-ok backdrop-blur-md max-[479px]:w-11 max-[479px]:justify-center max-[479px]:px-0"
          role="status"
        >
          <span className="relative flex size-2 shrink-0" aria-hidden>
            <span className="animate-ping-soft absolute inline-flex size-full rounded-full bg-ok" />
            <span className="relative inline-flex size-2 rounded-full bg-ok" />
          </span>
          <span className="max-[479px]:sr-only">{profile.availabilityShort}</span>
        </p>
      </div>
      <div className="pointer-events-auto flex items-center gap-2">
        <PaletteButton />
        <ThemeToggle />
      </div>
    </div>
  )
}
