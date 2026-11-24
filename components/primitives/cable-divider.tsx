"use client"

import { motion } from "framer-motion"
import { useMotionOk } from "./use-motion-ok"

export function CableDivider() {
  const ok = useMotionOk()
  return (
    <div aria-hidden className="pointer-events-none relative z-[1] -my-px flex h-14 justify-center lg:pl-[4.5rem]">
      <svg width="16" height="56" viewBox="0 0 16 56" fill="none" className="overflow-visible text-primary">
        <motion.path
          d="M8 0V46"
          stroke="currentColor"
          strokeOpacity="0.5"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={ok ? { pathLength: 0 } : false}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <circle cx="8" cy="50" r="3.5" fill="var(--background)" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </div>
  )
}
