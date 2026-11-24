"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Fingerprint, Network, ShieldCheck } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Monogram } from "@/components/primitives/monogram"
import { useMotionOk } from "@/components/primitives/use-motion-ok"
import { heroContent } from "@/lib/content/site"

const floatIcons = [ShieldCheck, Network, Fingerprint]
const floatPos = [
  "-left-10 top-12",
  "-right-4 top-[42%]",
  "-left-6 bottom-20",
]
const SHAPE = "rounded-t-[999px] rounded-b-2xl lg:rounded-none lg:[clip-path:polygon(0_0,calc(100%-44px)_0,100%_44px,100%_100%,44px_100%,0_calc(100%-44px))]"

function FloatingCard({ label, Icon, className, depth }: { label: string; Icon: typeof Network; className: string; depth: number }) {
  const ok = useMotionOk()
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, depth])
  return (
    <motion.div
      style={ok ? { y } : undefined}
      className={`absolute z-10 hidden items-center gap-2 rounded-xl border border-line bg-background/75 px-3 py-2 font-mono text-xs text-foreground shadow-lg backdrop-blur-md lg:flex ${className}`}
    >
      <Icon strokeWidth={1.75} className="size-4 text-primary" aria-hidden />
      {label}
    </motion.div>
  )
}

export function HeroPortrait() {
  const [failed, setFailed] = useState(false)
  return (
    <figure className="relative mx-auto w-[clamp(90px,17.6svh,160px)] min-[400px]:w-[clamp(110px,22svh,176px)] lg:w-full lg:max-w-[440px]">
      <div aria-hidden className="absolute -inset-8 -z-10 rounded-full bg-primary/20 blur-3xl" />
      {["left-0 top-0 border-l-2 border-t-2", "right-0 top-0 border-r-2 border-t-2", "left-0 bottom-0 border-l-2 border-b-2", "right-0 bottom-0 border-r-2 border-b-2"].map((c) => (
        <span key={c} aria-hidden className={`absolute z-10 hidden size-7 border-primary/80 lg:block ${c}`} style={{ margin: -14 }} />
      ))}
      <div className={`aspect-[4/5] bg-gradient-to-br from-primary/60 via-line to-primary/20 p-px ${SHAPE}`}>
        <div className={`relative size-full overflow-hidden bg-surface-1 ${SHAPE}`}>
          {failed ? (
            <div className="flex size-full items-center justify-center">
              <Monogram className="size-20 text-2xl" />
            </div>
          ) : (
            <>
              <Image
                src="/profile.jpeg"
                alt="Portrait de Mourad EL OUATIK en costume sombre, souriant, sur une terrasse"
                fill
                priority
                sizes="(min-width:1024px) 480px, 70vw"
                className="object-cover [filter:saturate(0.85)_contrast(1.05)]"
                style={{ objectPosition: "55% 40%" }}
                onError={() => setFailed(true)}
              />
              <div aria-hidden className="absolute inset-0 bg-[oklch(0.3_0.08_260/0.22)] mix-blend-multiply" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/10 to-background/80" />
            </>
          )}
        </div>
      </div>
      <figcaption className="t-label mt-5 hidden text-center text-muted-foreground lg:block">CYBER GRC · SOC · ZERO TRUST</figcaption>
      {heroContent.floating.map((label, i) => (
        <FloatingCard key={label} label={label} Icon={floatIcons[i]} className={floatPos[i]} depth={[-28, 36, -18][i]} />
      ))}
    </figure>
  )
}
