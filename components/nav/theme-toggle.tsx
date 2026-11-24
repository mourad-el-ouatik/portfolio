"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      aria-label="Basculer entre le thème clair et le thème sombre"
      className="inline-flex size-11 items-center justify-center rounded-xl border border-line bg-background/70 text-foreground backdrop-blur-md transition-colors hover:border-primary/50 hover:text-primary"
    >
      <Sun strokeWidth={1.75} className="hidden size-[18px] dark:block" />
      <Moon strokeWidth={1.75} className="size-[18px] dark:hidden" />
    </button>
  )
}
