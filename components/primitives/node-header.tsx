import type { ReactNode } from "react"
import { sections, nodeNumber } from "@/lib/content/site"
import { MaskReveal, Reveal } from "./reveal"

interface NodeHeaderProps {
  id: string
  title: string
  description?: ReactNode
}

export function NodeHeader({ id, title, description }: NodeHeaderProps) {
  const meta = sections.find((s) => s.id === id)
  if (!meta) return null
  return (
    <header className="mb-12 max-w-3xl lg:mb-16">
      <Reveal>
        <p className="t-label text-primary">
          {nodeNumber(meta.index)} — {meta.label}
        </p>
      </Reveal>
      <MaskReveal className="mt-4 pb-1">
        <h2 id={`${id}-title`} className="t-h2 font-semibold text-foreground">
          {title}
        </h2>
      </MaskReveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="prose-fit mt-5 text-muted-foreground">{description}</p>
        </Reveal>
      )}
    </header>
  )
}
