import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export type ChipTone = "ok" | "live" | "warn" | "neutral"

interface ChipProps {
  variant?: "tech" | "status" | "skill"
  tone?: ChipTone
  className?: string
  children: ReactNode
}

const toneClass: Record<ChipTone, string> = {
  ok: "border-ok/40 bg-ok/10 text-ok",
  live: "border-live/40 bg-live/10 text-live",
  warn: "border-warn/40 bg-warn/10 text-warn",
  neutral: "border-line bg-secondary/60 text-secondary-foreground",
}

export function Chip({ variant = "tech", tone = "neutral", className, children }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex max-w-full items-center gap-1.5 rounded-md border px-2.5 py-1 font-mono text-xs leading-none",
        variant === "tech" && "border-line bg-secondary/50 text-secondary-foreground",
        variant === "skill" && "border-primary/25 bg-primary/10 text-foreground",
        variant === "status" && cn("rounded-full uppercase tracking-[0.12em]", toneClass[tone]),
        className,
      )}
    >
      {variant === "status" && <span aria-hidden className="size-1.5 rounded-full bg-current" />}
      {children}
    </span>
  )
}

export function ChipList({ items, variant = "tech", className }: { items: readonly string[]; variant?: ChipProps["variant"]; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <li key={item}>
          <Chip variant={variant}>{item}</Chip>
        </li>
      ))}
    </ul>
  )
}
