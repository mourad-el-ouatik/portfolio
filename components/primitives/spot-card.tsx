"use client"

import { useCallback, type HTMLAttributes, type PointerEvent } from "react"
import { cn } from "@/lib/utils"

interface SpotCardProps extends HTMLAttributes<HTMLDivElement> {
  featured?: boolean
}

export function SpotCard({ featured, className, onPointerMove, children, ...props }: SpotCardProps) {
  const handleMove = useCallback(
    (e: PointerEvent<HTMLDivElement>) => {
      const el = e.currentTarget
      const rect = el.getBoundingClientRect()
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`)
      el.style.setProperty("--my", `${e.clientY - rect.top}px`)
      onPointerMove?.(e)
    },
    [onPointerMove],
  )
  return (
    <div onPointerMove={handleMove} className={cn("card-surface spot", featured && "card-featured", className)} {...props}>
      {children}
    </div>
  )
}
