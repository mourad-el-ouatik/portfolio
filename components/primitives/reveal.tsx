"use client"

import { motion, useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"
import { useMotionOk } from "./use-motion-ok"

const EASE = [0.22, 1, 0.36, 1] as const

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: "div" | "li" | "article" | "p"
}

export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const ok = useMotionOk()
  const Tag = motion[as]
  if (!ok) return <Tag className={className}>{children}</Tag>
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: EASE, delay }}
    >
      {children}
    </Tag>
  )
}

export function MaskReveal({ children, className }: { children: ReactNode; className?: string }) {
  const ok = useMotionOk()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" })
  if (!ok) return <div className={className}>{children}</div>
  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={false}
        animate={inView ? { clipPath: "inset(0 0% 0 0)", opacity: 1 } : { clipPath: "inset(0 100% 0 0)", opacity: 0.4 }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        {children}
      </motion.div>
    </div>
  )
}
