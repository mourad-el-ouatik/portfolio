"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import { PALETTE_EVENT } from "@/lib/nav"

const CommandPalette = dynamic(() => import("./command-palette"), { ssr: false })

export function CommandLauncher() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const openIt = () => {
      setMounted(true)
      setOpen(true)
    }
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setMounted(true)
        setOpen((v) => !v)
      }
    }
    window.addEventListener("keydown", onKey)
    window.addEventListener(PALETTE_EVENT, openIt)
    return () => {
      window.removeEventListener("keydown", onKey)
      window.removeEventListener(PALETTE_EVENT, openIt)
    }
  }, [])

  return mounted ? <CommandPalette open={open} onOpenChange={setOpen} /> : null
}
