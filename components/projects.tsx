"use client"

import { AnimatePresence, motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Github, Shield, Smartphone, GitBranch, ChevronDown, type LucideIcon } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

interface Project {
  id: string
  title: string
  period: string
  icon: LucideIcon
  summary: string
  details: string[]
  tech: string[]
  github: string
  featured?: boolean
}

const projects: Project[] = [
  {
    id: "zt-soc",
    title: "Zero Trust & AI-Driven SOC Architecture",
    period: "Juillet – Septembre 2026",
    icon: Shield,
    summary:
      "Architecture Zero Trust alignée sur le NIST SP 800-207 et SOC hybride assisté par IA, déployés sur un cluster de 9 nœuds répartis sur 5 VLAN.",
    details: [
      "Cluster Docker Swarm (3 managers, 6 workers) sur infrastructure Proxmox VE en haute disponibilité.",
      "Contrôle d'accès, authentification, gestion des accès privilégiés et des secrets (Keycloak, HashiCorp Vault, Teleport), segmentation réseau et isolation des environnements.",
      "Chaîne SOC : Wazuh, Zeek, TheHive, Cortex, OpenCTI, MISP, orchestration SOAR avec n8n.",
      "Moteur d'analyse d'incidents basé sur un LLM local (Ollama) et RAG : enrichissement contextuel et qualification des alertes sans sortie des données de l'infrastructure.",
    ],
    tech: ["Docker Swarm", "Proxmox", "Wazuh", "Ollama", "RAG", "Keycloak", "Vault", "NIST SP 800-207"],
    github: "https://github.com/mourad-el-ouatik",
    featured: true,
  },
  {
    id: "apk",
    title: "AI-Enhanced APK Security Analysis Platform",
    period: "Mai – Juin 2026",
    icon: Smartphone,
    summary:
      "Plateforme d'analyse de sécurité d'applications Android combinant rétro-ingénierie, analyse statique automatisée et détection de malwares assistée par IA.",
    details: [
      "Décompilation et inspection des APK avec JADX.",
      "Détection de comportements malveillants avec Quark Engine, orchestrée par des scripts Python et Bash.",
      "Restitution des résultats sous forme de rapport HTML pour l'analyste.",
    ],
    tech: ["Java", "JADX", "Quark Engine", "Python", "Bash"],
    github: "https://github.com/mourad-el-ouatik/secure-apk-analyzer",
  },
  {
    id: "devsecops",
    title: "Secure CI/CD Pipeline & DevSecOps Suite",
    period: "Janvier – Mars 2026",
    icon: GitBranch,
    summary:
      "Pipeline DevSecOps avec tests de sécurité automatisés (SAST / DAST) et analyse de vulnérabilités, déployé sur OCI avec Terraform.",
    details: [
      "Pipeline GitLab CI/CD intégrant analyse statique (SonarQube) et scan d'images et de dépendances (Trivy).",
      "Infrastructure as Code avec Terraform sur Oracle Cloud Infrastructure.",
      "Conteneurisation Docker et contrôles de sécurité intégrés à chaque étape de livraison.",
    ],
    tech: ["GitLab CI/CD", "Terraform", "Trivy", "SonarQube", "Docker", "OCI"],
    github: "https://github.com/mourad-el-ouatik",
  },
]

function ProjectCard({ project, index, inView }: { project: Project; index: number; inView: boolean }) {
  const [open, setOpen] = useState(false)
  const Icon = project.icon
  const panelId = `project-${project.id}`

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex flex-col rounded-2xl border border-border bg-card/60 p-6 transition-colors hover:border-primary/40 sm:p-8 ${
        project.featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} sur GitHub`}
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <Github className="h-5 w-5" />
        </a>
      </div>

      <p className="mt-6 text-xs font-medium text-muted-foreground">{project.period}</p>
      <h3
        className={`mt-2 font-semibold leading-snug text-foreground ${
          project.featured ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
        }`}
      >
        {project.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{project.summary}</p>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ul className="mt-5 space-y-3 border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground">
              {project.details.map((d) => (
                <li key={d} className="flex gap-3">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-xs text-secondary-foreground"
          >
            {t}
          </span>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="mt-6 inline-flex items-center gap-2 self-start text-sm font-medium text-primary transition-colors hover:text-foreground"
      >
        {open ? "Réduire" : "Voir le détail"}
        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
    </motion.article>
  )
}

export function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="projects" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projets"
          title="Réalisations phares"
          description="Trois projets représentatifs de mes compétences en architecture de sécurité, SOC et DevSecOps."
        />
        <div ref={ref} className="grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
