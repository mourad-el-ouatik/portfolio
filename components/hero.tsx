"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Award, ArrowDown, Download, MapPin } from "lucide-react"
import { useEffect } from "react"

const stats = [
  { value: "12", label: "PME auditées ISO 27001 / 27035" },
  { value: "9 · 5", label: "Nœuds Zero Trust · VLAN" },
  { value: "5 000+", label: "Événements / jour analysés" },
  { value: "3", label: "Certifications" },
]

const techStack = ["ISO 27001", "NIST CSF", "IAM", "Zero Trust", "GRC", "Wazuh", "Python"]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
}

const socials = [
  { href: "https://github.com/mourad-el-ouatik", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/mourad-el-ouatik", label: "LinkedIn", icon: Linkedin },
  { href: "https://www.credly.com/users/mourad-el-ouatik", label: "Credly", icon: Award },
]

export function Hero() {
  useEffect(() => {
    const src = "//cdn.credly.com/assets/utilities/embed.js"
    if (!document.querySelector(`script[src="${src}"]`)) {
      const script = document.createElement("script")
      script.src = src
      script.async = true
      script.type = "text/javascript"
      document.body.appendChild(script)
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 pb-28 pt-28 sm:px-8 lg:px-12"
    >
      {/* Single soft sapphire wash: depth without neon */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(60%_60%_at_50%_0%,oklch(0.68_0.13_255/0.10),transparent)]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-6xl"
      >
        <motion.div variants={item}>
          <div className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-emerald-500/25 bg-emerald-500/5 px-4 py-2">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-medium tracking-wide text-emerald-300 sm:text-sm">
              Disponible pour stage de fin d'études — Conseil Cybersécurité & GRC
            </span>
          </div>
        </motion.div>

        <motion.div variants={item} className="mt-8 space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground sm:text-sm">
            Étudiant Ingénieur Cybersécurité | Cyber GRC | IT Risk GRC
          </p>
          <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Mourad <span className="text-primary">EL OUATIK</span>
          </h1>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-8 max-w-2xl text-base leading-[1.8] text-muted-foreground sm:text-lg"
        >
          Je recherche un stage de fin d'études de 6 mois en conseil Cybersécurité & GRC. Mon
          parcours technique (Architectures, IAM, Zero Trust) associé à une expertise en{" "}
          <span className="font-medium text-foreground">gouvernance et protection des données</span>{" "}
          (certifié IBM GRC & Data Privacy) me permet de piloter des chantiers de{" "}
          <span className="font-medium text-foreground">conformité ISO 27001 et NIST CSF</span> avec une
          vision concrète et pragmatique.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href="#experience"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voir mon parcours
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <Mail className="h-4 w-4" />
            Me contacter
          </a>
          <a
            href="/CV_Mourad_EL_OUATIK_Consultant_GRC.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Download className="h-4 w-4" />
            Télécharger le CV
          </a>
        </motion.div>

        <motion.dl
          variants={item}
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-10 lg:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{s.value}</dd>
              <p aria-hidden className="mt-1.5 text-xs leading-snug text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </motion.dl>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
          <div className="flex items-center gap-5">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <span className="hidden h-5 w-px bg-border sm:block" />
          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            Marrakech, Maroc
          </span>
        </motion.div>

        <motion.div variants={item} className="mt-8 flex flex-wrap gap-2">
          {techStack.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium text-secondary-foreground"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Aller à la section À propos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground sm:block"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.a>
    </section>
  )
}
