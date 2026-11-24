import { cn } from "@/lib/utils"

export function Monogram({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex size-11 items-center justify-center rounded-xl border border-primary/40 bg-primary/10 font-display text-sm font-bold tracking-tight text-primary shadow-[0_0_24px_-6px_var(--glow)]",
        className,
      )}
    >
      ME
    </span>
  )
}
