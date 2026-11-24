"use client"

import { motion, useScroll } from "framer-motion"
import { LayoutGrid } from "lucide-react"
import dynamic from "next/dynamic"
import { useEffect, useState, type KeyboardEvent } from "react"
import { mobileShortcutLabels, mobileShortcuts, nodeNumber, sections } from "@/lib/content/site"
import { cn } from "@/lib/utils"
import { useActiveSection } from "./use-active-section"

const MobileSheet = dynamic(() => import("./mobile-sheet"), { ssr: false })
const ids = sections.map((s) => s.id)

function useKeyboardOpen() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const isField = (t: EventTarget | null) => t instanceof HTMLElement && t.matches("input, textarea, select, [contenteditable='true']")
    const onIn = (e: FocusEvent) => isField(e.target) && setOpen(true)
    const onOut = () => setOpen(false)
    document.addEventListener("focusin", onIn)
    document.addEventListener("focusout", onOut)
    return () => {
      document.removeEventListener("focusin", onIn)
      document.removeEventListener("focusout", onOut)
    }
  }, [])
  return open
}

function Rail({ active }: { active: string }) {
  const { scrollYProgress } = useScroll()

  const onKeyDown = (e: KeyboardEvent<HTMLOListElement>) => {
    const links = Array.from(e.currentTarget.querySelectorAll<HTMLAnchorElement>("a"))
    const i = links.indexOf(document.activeElement as HTMLAnchorElement)
    const next = e.key === "ArrowDown" ? i + 1 : e.key === "ArrowUp" ? i - 1 : e.key === "Home" ? 0 : e.key === "End" ? links.length - 1 : null
    if (next === null) return
    e.preventDefault()
    links[(next + links.length) % links.length]?.focus()
  }

  return (
    <nav aria-label="Navigation par nœuds" className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <div className="relative rounded-full border border-line bg-background/60 px-1.5 py-3 backdrop-blur-md">
        <span aria-hidden className="absolute bottom-7 left-1/2 top-7 w-px -translate-x-1/2 bg-line" />
        <motion.span
          aria-hidden
          style={{ scaleY: scrollYProgress }}
          className="absolute bottom-7 left-1/2 top-7 w-px origin-top -translate-x-1/2 bg-primary"
        />
        <ol className="relative flex flex-col" onKeyDown={onKeyDown}>
          {sections.map(({ id, label, index }) => {
            const current = active === id
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={current ? "location" : undefined}
                  aria-label={`${nodeNumber(index)} ${label}`}
                  className="group relative flex size-8 items-center justify-center rounded-full"
                >
                  <span
                    aria-hidden
                    className={cn(
                      "block rounded-full transition-[transform,opacity] duration-300",
                      current
                        ? "size-3.5 scale-100 bg-primary shadow-[0_0_0_5px_var(--glow)]"
                        : "size-2.5 border-[1.5px] border-muted-foreground/70 bg-background group-hover:scale-125 group-hover:border-primary",
                    )}
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute left-full ml-3 flex -translate-x-1 flex-col whitespace-nowrap rounded-lg border border-line bg-popover px-3 py-1.5 opacity-0 shadow-lg transition-[transform,opacity] duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary">{nodeNumber(index)} </span>
                    <span className="text-sm font-medium text-foreground">{label}</span>
                  </span>
                </a>
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}

function Pill({ active }: { active: string }) {
  const [sheet, setSheet] = useState(false)
  const [sheetMounted, setSheetMounted] = useState(false)
  const keyboard = useKeyboardOpen()

  return (
    <>
      <div
        className={cn(
          "fixed inset-x-4 bottom-4 z-40 pb-[env(safe-area-inset-bottom)] transition-[transform,opacity] duration-300 max-[359px]:inset-x-2 lg:hidden",
          keyboard && "pointer-events-none translate-y-[150%] opacity-0",
        )}
      >
        <nav aria-label="Navigation rapide" className="flex items-center justify-between rounded-2xl border border-line/60 bg-background/70 p-1.5 shadow-lg backdrop-blur-xl">
          {mobileShortcuts.map((id) => {
            const meta = sections.find((s) => s.id === id)!
            const Icon = meta.icon
            const current = active === id
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={current ? "location" : undefined}
                aria-label={mobileShortcutLabels[id]}
                className={cn(
                  "flex size-11 items-center justify-center rounded-xl transition-colors",
                  current ? "bg-primary/15 text-primary shadow-[0_0_0_1px_var(--glow)]" : "text-muted-foreground active:bg-secondary",
                )}
              >
                <Icon strokeWidth={1.75} className="size-5" aria-hidden />
              </a>
            )
          })}
          <button
            type="button"
            aria-label="Tous les nœuds"
            aria-haspopup="dialog"
            onClick={() => {
              setSheetMounted(true)
              setSheet(true)
            }}
            className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground"
          >
            <LayoutGrid strokeWidth={1.75} className="size-5" aria-hidden />
          </button>
        </nav>
      </div>
      {sheetMounted && <MobileSheet open={sheet} onOpenChange={setSheet} active={active} />}
    </>
  )
}

export function NodeDock() {
  const active = useActiveSection(ids)
  return (
    <>
      <Rail active={active} />
      <Pill active={active} />
    </>
  )
}
