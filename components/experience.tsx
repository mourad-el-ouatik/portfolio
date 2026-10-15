"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

interface Phase {
  label: string
  title: string
  period?: string
  points: string[]
}

interface Role {
  organization: string
  location: string
  title: string
  period: string
  context?: string
  phases?: Phase[]
  points?: string[]
  tech: string[]
}

const roles: Role[] = [
  {
    organization: "Absec Cybersécurité",
    location: "Marrakech",
    title: "Stagiaire Ingénieur Cybersécurité",
    period: "Février – Septembre 2026",
    context:
      "Startup de conseil et d'ingénierie cybersécurité. Audit ISO/IEC 27001 et ISO/IEC 27035 mené auprès de 12 PME, révélant des carences communes : logs non centralisés, réseau non cloisonné, gestion des privilèges obsolète, exposition au ransomware et aux fuites de données.",
    phases: [
      {
        label: "Cadrage GRC",
        title: "Audit ISO 27001 / 27035 de 12 PME",
        period: "Début de stage",
        points: [
          "Collecte, centralisation et analyse des données brutes d'audit pour cartographier les vulnérabilités communes aux 12 PME.",
          "Exploitation de ces constats pour formaliser la matrice des exigences techniques, servant de cahier des charges (segmentation réseau, règles de corrélation SOC, politiques d'accès).",
        ],
      },
      {
        label: "Mission 1",
        title: "Détection, réponse et gestion des incidents",
        period: "Février – Avril",
        points: [
          "Déploiement d'une chaîne SOC open-source : Wazuh, Zeek, OpenCTI, TheHive, n8n.",
          "Stockage et exploitation des données de sécurité dans PostgreSQL pour le suivi d'indicateurs opérationnels.",
        ],
      },
      {
        label: "Mission 2",
        title: "Analyse des alertes assistée par IA",
        period: "Mai – Juillet",
        points: [
          "Intégration d'un LLM local (Ollama) et d'une recherche contextuelle (RAG) dans la chaîne SIEM → SOAR pour enrichir et qualifier les alertes, sans sortie des données hors de l'infrastructure.",
          "Suivi des performances : temps d'analyse d'une alerte, MTTR.",
        ],
      },
      {
        label: "Mission 3",
        title: "Mise en production et architecture Zero Trust",
        period: "Juillet – Septembre",
        points: [
          "Conception et déploiement d'une architecture Zero Trust alignée sur le NIST SP 800-207 : cluster Docker Swarm de 9 nœuds (3 managers, 6 workers) réparti sur 5 VLAN.",
          "Contrôle d'accès, authentification, gestion des accès privilégiés et des secrets, segmentation réseau, filtrage des flux, isolation des environnements ; documentation complète de l'architecture.",
        ],
      },
    ],
    tech: ["ISO 27001", "ISO 27035", "NIST SP 800-207", "Wazuh", "Zeek", "OpenCTI", "TheHive", "n8n", "PostgreSQL", "Ollama", "RAG", "Docker Swarm"],
  },
  {
    organization: "Ministère de l'Équipement et de l'Eau",
    location: "Rabat",
    title: "Stagiaire Analyste Cybersécurité",
    period: "Juin – Août 2025",
    points: [
      "Déploiement d'une sonde de détection d'intrusions (Suricata) analysant plus de 5 000 événements par jour, dans le cadre des exigences DGSSI et ISO 27001.",
      "Création de tableaux de bord de suivi sous Grafana / InfluxDB pour l'analyse et le reporting des événements de sécurité.",
    ],
    tech: ["Suricata", "Grafana", "InfluxDB", "DGSSI", "ISO 27001"],
  },
]

export function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="experience" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Expérience"
          title="Parcours professionnel"
          description="De l'audit de conformité à la mise en production d'une architecture Zero Trust."
        />

        <div ref={ref} className="relative">
          {/* Timeline rail */}
          <div aria-hidden className="absolute bottom-2 left-[7px] top-2 w-px bg-border sm:left-[11px]" />

          <ol className="space-y-12">
            {roles.map((role, i) => (
              <motion.li
                key={role.organization}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative pl-8 sm:pl-12"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-2 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-primary/60 bg-background sm:h-[23px] sm:w-[23px]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary sm:h-2 sm:w-2" />
                </span>

                <div className="rounded-2xl border border-border bg-card/60 p-6 sm:p-8">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground sm:text-2xl">{role.organization}</h3>
                      <p className="mt-1 text-base text-primary">{role.title}</p>
                    </div>
                    <div className="mt-2 flex flex-col gap-1 text-sm text-muted-foreground sm:mt-1 sm:items-end">
                      <span className="font-medium text-foreground/90">{role.period}</span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {role.location}
                      </span>
                    </div>
                  </div>

                  {role.context && (
                    <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {role.context}
                    </p>
                  )}

                  {role.phases && (
                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                      {role.phases.map((phase, idx) => (
                        <div
                          key={phase.label}
                          className="rounded-xl border border-border/70 bg-background/50 p-5"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <span className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
                              {String(idx + 1).padStart(2, "0")} · {phase.label}
                            </span>
                            {phase.period && (
                              <span className="shrink-0 text-xs text-muted-foreground">{phase.period}</span>
                            )}
                          </div>
                          <h4 className="mt-3 text-base font-semibold leading-snug text-foreground">
                            {phase.title}
                          </h4>
                          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                            {phase.points.map((p) => (
                              <li key={p} className="flex gap-3">
                                <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/60" />
                                <span>{p}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {role.points && (
                    <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {role.points.map((p) => (
                        <li key={p} className="flex gap-3">
                          <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {role.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-xs text-secondary-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
