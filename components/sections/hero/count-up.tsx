"use client"

import { animate, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { useMotionOk } from "@/components/primitives/use-motion-ok"

const format = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ")

export function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const ok = useMotionOk()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView || !ok) return
    const controls = animate(0, to, { duration: 1.4, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setValue(Math.round(v)) })
    return () => controls.stop()
  }, [inView, ok, to])

  return (
    <span ref={ref}>
      {format(ok ? value : to)}
      {suffix}
    </span>
  )
}
