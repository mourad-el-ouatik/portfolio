"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Shield, ClipboardCheck, ScrollText, LineChart } from "lucide-react"

const highlights = [
  { icon: ClipboardCheck, label: "Cyber GRC" },
  { icon: ScrollText, label: "IT Risk & Conformité" },
  { icon: Shield, label: "Zero Trust & IAM" },
  { icon: LineChart, label: "AI Based Threat Analytics" },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 lg:py-32 px-6 lg:px-12 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Labels */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-24"
          >
            <span className="font-mono text-sm text-primary tracking-wider">ABOUT</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-6">
              Who I Am
            </h2>
            
            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-4 bg-background border border-border rounded-lg hover:border-primary/50 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="text-sm text-foreground">{item.label}</span>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-muted-foreground leading-relaxed"
          >
            <p className="text-foreground text-lg font-medium">
              Étudiant en dernière année d'ingénierie à l'ENSA Marrakech, spécialisation
              Cyber Défense & Télécommunications Embarquées, je recherche un stage de fin
              d'études en conseil Cybersécurité & GRC.
            </p>

            <p>
              Mon parcours technique (Architectures, IAM, Zero Trust) associé à une expertise
              en gouvernance et protection des données (certifié IBM GRC & Data Privacy) me
              permet d'apporter une vision concrète et pragmatique. Mes rôles associatifs en
              tant que Président du Club Self-Dev et Vice-Président du MUN ENSA Marrakech ont
              renforcé mes compétences en gestion de projet et en collaboration.
            </p>

            <p>
              Passionné par l'évaluation de solutions IT et la gestion des risques, je souhaite
              mettre mes compétences au service de clients pour piloter des chantiers de{" "}
              <span className="text-primary">conformité ISO 27001</span>,{" "}
              <span className="text-primary">NIST CSF</span>, tout en m'appuyant sur des
              fondations techniques solides en{" "}
              <span className="text-primary">Zero Trust</span> et{" "}
              <span className="text-primary">IA appliquée à la cybersécurité</span>.
            </p>

            <div className="pt-6 border-t border-border">
              <h3 className="text-foreground font-semibold mb-4">Centres d'intérêt</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Cyber GRC & IT Risk",
                  "ISO 27001 / NIST CSF",
                  "AI Based Threat Intelligence",
                  "Zero-Trust Architecture",
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 text-xs font-mono bg-primary/10 text-primary border border-primary/20 rounded-full"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
