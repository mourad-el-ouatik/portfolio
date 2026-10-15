"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, ClipboardCheck } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const studies = [
  {
    title: "Cycle ingénieur — Cybersécurité (Bac+5)",
    school: "ENSA Marrakech",
    detail: "Spécialisation Cyber Défense & Télécommunications Embarquées",
    period: "2024 – juin 2027",
  },
  {
    title: "Classes préparatoires intégrées",
    school: "ENSA Marrakech",
    detail: "Mathématiques, physique et fondamentaux de l'informatique",
    period: "2022 – 2024",
  },
]

export function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="education" className="bg-card/30 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Formation"
          title="Parcours académique"
          description="ENSA Marrakech, 2022 – 2027."
        />

        <div ref={ref} className="grid gap-6 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {studies.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card/60 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">{s.period}</p>
                    <h3 className="mt-1 font-semibold leading-snug text-foreground">{s.title}</h3>
                    <p className="mt-1 text-sm text-primary">{s.school}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Academic spotlight */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-primary/25 bg-gradient-to-b from-primary/[0.06] to-transparent p-6 sm:p-8 lg:col-span-3"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <ClipboardCheck className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                Projet académique · En cours
              </span>
            </div>

            <h3 className="mt-5 text-xl font-semibold leading-snug text-foreground sm:text-2xl">
              Audit de maturité du SI de l'Université Cadi Ayyad
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              ISO 27001 · ISO 27035 — projet de groupe (3 étudiants), encadré par un enseignant · depuis septembre 2026
            </p>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Évaluation de la maturité en sécurité de l'information du SI de l'Université Cadi Ayyad au regard
              de l'ISO/IEC 27001 (contrôles de l'Annexe A) et de l'ISO/IEC 27035 (gestion des incidents).
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border/70 bg-background/50 p-4">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-emerald-400">Réalisé</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Entretiens, revue documentaire et évaluation des contrôles de l'Annexe A.
                </p>
              </div>
              <div className="rounded-xl border border-border/70 bg-background/50 p-4">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">En cours</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Analyse de risques et analyse des écarts, en vue d'un rapport et d'un plan d'actions chiffré
                  (estimation budgétaire).
                </p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
