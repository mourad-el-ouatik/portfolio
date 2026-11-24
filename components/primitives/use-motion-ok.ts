"use client"

import { useReducedMotion } from "framer-motion"

export function useMotionOk() {
  return !useReducedMotion()
}
