import type { CSSProperties, ReactNode } from "react"
import { sections } from "@/lib/content/site"
import { cn } from "@/lib/utils"

export function NodeSection({ id, children, className }: { id: string; children: ReactNode; className?: string }) {
  const meta = sections.find((s) => s.id === id)
  const style = { "--hue": meta?.hue ?? 255, "--tint-x": meta && meta.index % 2 ? "88%" : "12%" } as CSSProperties
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("node-section", className)} style={style}>
      <div className="container-x">{children}</div>
    </section>
  )
}
