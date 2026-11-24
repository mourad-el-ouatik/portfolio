import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function ArrowGlyph({ className }: { className?: string }) {
  return <ArrowRight strokeWidth={1.75} aria-hidden className={cn("size-4", className)} />
}
