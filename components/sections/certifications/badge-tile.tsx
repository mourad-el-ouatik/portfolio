"use client"

import { CheckCircle2, ExternalLink } from "lucide-react"
import Image from "next/image"
import { useRef, type PointerEvent } from "react"
import { Chip } from "@/components/primitives/chip"
import { useMotionOk } from "@/components/primitives/use-motion-ok"
import type { Certification } from "@/lib/content/certifications"
import { cn } from "@/lib/utils"

export function BadgeTile({ cert }: { cert: Certification }) {
  const stage = useRef<HTMLDivElement>(null)
  const ok = useMotionOk()
  const onCredly = cert.url.includes("credly.com")

  const move = (e: PointerEvent<HTMLAnchorElement>) => {
    const el = stage.current
    if (!el || !ok || e.pointerType !== "mouse") return
    const r = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(800px) rotateX(${(-y * 10).toFixed(2)}deg) rotateY(${(x * 12).toFixed(2)}deg)`
    el.style.setProperty("--sx", `${(x + 0.5) * 100}%`)
    el.style.setProperty("--sy", `${(y + 0.5) * 100}%`)
  }
  const leave = () => {
    if (stage.current) stage.current.style.transform = ""
  }

  return (
    <a
      href={cert.url}
      target="_blank"
      rel="noopener noreferrer"
      onPointerMove={move}
      onPointerLeave={leave}
      className={cn("card-surface group flex h-full flex-col overflow-hidden p-0", cert.latest && "card-featured")}
    >
      <div className="relative flex h-52 items-center justify-center overflow-hidden border-b border-line bg-[radial-gradient(70%_80%_at_50%_30%,var(--glow),transparent)]">
        <div aria-hidden className="absolute inset-x-8 bottom-8 h-px bg-line" />
        <div
          ref={stage}
          className="relative transition-transform duration-300 ease-out will-change-transform [transform-style:preserve-3d]"
        >
          <div className={cn("relative", cert.wide ? "h-24 w-48 md:h-[120px] md:w-60" : "size-24 md:size-[120px]")}>
            <Image
              src={cert.badge}
              alt={`Badge ${cert.name}`}
              fill
              sizes={cert.wide ? "(min-width:768px) 240px, 192px" : "(min-width:768px) 120px, 96px"}
              className="object-contain drop-shadow-[0_14px_20px_oklch(0_0_0/0.35)]"
            />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-xl opacity-0 mix-blend-overlay transition-opacity duration-300 [background:radial-gradient(circle_at_var(--sx,50%)_var(--sy,50%),oklch(1_0_0/0.55),transparent_55%)] group-hover:opacity-100"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <p className="t-label text-primary">{cert.issuer}</p>
          {cert.latest && (
            <Chip variant="status" tone="live">
              Plus récente
            </Chip>
          )}
        </div>
        <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-foreground">{cert.name}</h3>
        <div className="mt-auto flex items-center justify-between gap-3 pt-6 text-sm">
          <span className="text-muted-foreground">Délivrée en {cert.date}</span>
          <CheckCircle2 strokeWidth={1.75} aria-label="Vérifiée" className="size-4 text-ok" />
        </div>
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
          {onCredly ? "Vérifier sur Credly" : "Vérifier le badge"}
          <ExternalLink strokeWidth={1.75} className="size-3.5" aria-hidden />
          <span className="sr-only">(nouvel onglet)</span>
        </span>
      </div>
    </a>
  )
}
