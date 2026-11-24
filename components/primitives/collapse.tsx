"use client"

import { AnimatePresence, motion } from "framer-motion"
import type { ReactNode } from "react"
import { useMotionOk } from "./use-motion-ok"

export function Collapse({ open, id, children, className }: { open: boolean; id: string; children: ReactNode; className?: string }) {
  const ok = useMotionOk()
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          id={id}
          key="panel"
          initial={ok ? { height: 0, opacity: 0 } : false}
          animate={{ height: "auto", opacity: 1 }}
          exit={ok ? { height: 0, opacity: 0 } : { opacity: 0 }}
          transition={{ duration: ok ? 0.35 : 0, ease: [0.22, 1, 0.36, 1] }}
          className={className ?? "overflow-hidden"}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
