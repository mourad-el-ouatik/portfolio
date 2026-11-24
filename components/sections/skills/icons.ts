import {
  Bug, ClipboardCheck, Cloud, Code, GitBranch, Globe, LineChart, Lock, Radio, Radar, Shield, Smartphone, type LucideIcon,
} from "lucide-react"

export const categoryIcons: Record<string, LucideIcon> = {
  grc: ClipboardCheck,
  cloud: Cloud,
  devsecops: GitBranch,
  tools: Shield,
  intel: Bug,
  network: Radio,
  monitor: LineChart,
  code: Code,
  crypto: Lock,
  web: Globe,
  mobile: Smartphone,
}

export const vlanIcons: Record<string, LucideIcon> = {
  grc: ClipboardCheck,
  soc: Radar,
  cloud: Cloud,
  dev: Code,
  crypto: Lock,
}
