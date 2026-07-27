"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, GraduationCap, Shield, Building, Code, GitBranch, Sparkles } from "lucide-react"

const education = [
  {
    title: "Engineering Cycle",
    organization: "ENSA Marrakech",
    subtitle: "Cyber Defense & Embedded Telecommunications",
    period: "2024 - 2027",
    description: "Specializing in cybersecurity, cryptography, and secure systems design. Active in leadership roles as President of Self-Dev Club and Co-founder/Vice-President of MUN ENSA.",
    icon: GraduationCap,
    type: "education",
  },
  {
    title: "Preparatory Classes",
    organization: "ENSA Marrakech",
    subtitle: "Integrated Preparatory Program",
    period: "2022 - 2024",
    description: "Intensive program in mathematics, physics, and computer science fundamentals, preparing for engineering specialization.",
    icon: GraduationCap,
    type: "education",
  },
]

const experience = [
  {
    title: "Cybersecurity Architect — Zero Trust & AI-Driven SOC (Internship)",
    organization: "ABsec Cybersecurity",
    period: "July 2026 - September 2026",
    description: [
      "Designed and deployed a Zero Trust architecture compliant with NIST SP 800-207, incorporating network segmentation, centralized identity management (RBAC), and secure secrets management.",
      "Architected and orchestrated an AI-driven hybrid SOC based on a Docker Swarm cluster distributed across a high-availability Proxmox infrastructure.",
      "Integrated a comprehensive cybersecurity ecosystem comprising Wazuh, TheHive, Cortex, OpenCTI, MISP, Zeek, Keycloak, HashiCorp Vault, Traefik, Teleport, Loki, and FleetDM.",
      "Developed an incident analysis engine based on local LLMs (Ollama), enhanced by a RAG architecture and a vector database to automate analysis, contextual enrichment, and support for SOC analysts.",
      "Designed automated SOAR workflows ensuring event correlation, threat intelligence enrichment, security case creation, and AI-assisted incident report generation.",
      "Implemented a secure and scalable infrastructure incorporating high availability, centralized logging, monitoring, automated backups, and DevSecOps best practices.",
    ],
    tech: ["Zero Trust", "NIST 800-207", "Docker Swarm", "Proxmox", "Wazuh", "TheHive", "Cortex", "OpenCTI", "MISP", "Zeek", "Keycloak", "HashiCorp Vault", "Ollama", "RAG", "SOAR", "DevSecOps"],
    icon: Shield,
    type: "work",
  },
  {
    title: "SOC & AI Engineer (Internship)",
    organization: "ABsec Cybersecurity",
    period: "May 2026 - Present",
    description: [
      "Built a fully automated SOC pipeline: Ollama-powered LLM analyses SIEM alerts and delivers verdicts to SOAR for autonomous incident response.",
      "Developed an analyst-facing contextual chatbot to surface threat insights in real time.",
      "Reduced Mean Time to Respond (MTTR) by 85%; all components orchestrated via a centralised PostgreSQL database.",    ],
    tech: ["Ollama", "SOAR", " AI", "chatbot"],
    icon: Sparkles,
    type: "work",
  },
  {
    title: "Security Architect (Internship)",
    organization: "ABsec Cybersecurity",
    period: "February 2026 - May 2026",
    description: [
      "Designed multi-tenant SOC architecture (Client ↔ MSSP) covering detection, incident response, and threat intelligence",
      "Architected 3-node Wazuh cluster for centralized SIEM and real-time alert visualization",
      "Integrated RTIR + Cortex via REST API for automated artifact enrichment",
      "Incorporated MISP + OpenCTI for threat intelligence correlation with MITRE ATT&CK mapping",
    ],
    tech: ["Wazuh", "RTIR", "Cortex", "MISP", "OpenCTI", "SOAR"],
    icon: Shield,
    type: "work",
  },
  {
    title: "Founder & CEO",
    organization: "Folyo",
    period: "January 2026 - Present",
    description: [
      "Designed and developed a secure order management platform from the ground up, applying security-by-design principles",
      "Implemented CI/CD pipelines with automated security testing (SAST/DAST) at every stage",
      "Containerized infrastructure using Docker with least-privilege configurations",
      "Enforced RBAC and set up real-time monitoring for security events",
    ],
    tech: ["Docker", "CI/CD", "SAST/DAST", "RBAC", "DevSecOps"],
    icon: GitBranch,
    type: "work",
  },
  {
    title: "Cybersecurity Analyst (Internship)",
    organization: "Ministry of Equipment and Water, Rabat",
    period: "June - August 2025",
    description: [
      "Deployed Suricata IDS analyzing 5000+ security events daily, reducing false positives by 40%",
      "Centralized security logs and created 8 custom Grafana dashboards",
      "Implemented automated alert system for critical security incidents",
    ],
    tech: ["Suricata", "InfluxDB", "Grafana", "Linux"],
    icon: Building,
    type: "work",
  },
  {
    title: "Cybersecurity Associate (Internship)",
    organization: "Code Alpha & Prodigy Infotech",
    period: "June - August 2024",
    description: [
      "Developed 3 security tools in Python: firewall simulation, image encryption, and password evaluator",
      "MiniGate: Simplified firewall simulation algorithm",
      "PixelShield: Symmetric encryption for images using custom cipher",
      "FortiGate: Password complexity evaluation with entropy calculation",
    ],
    tech: ["Python", "Cryptography", "Network Security"],
    icon: Code,
    type: "work",
  },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 lg:py-32 px-6 lg:px-12 bg-card/50">
      <div className="max-w-4xl mx-auto">
        {/* Education Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <span className="font-mono text-sm text-primary tracking-wider">EDUCATION</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4">Academic Background</h2>
          </div>

          <div className="space-y-6">
            {education.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title + item.period}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 pb-6 border-l border-border last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-2.5 top-0 w-5 h-5 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>

                  <div className="p-6 bg-background border border-border rounded-xl hover:border-primary/50 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="hidden sm:flex w-12 h-12 items-center justify-center bg-primary/10 rounded-lg shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <span className="text-xs font-mono text-muted-foreground">{item.period}</span>
                        <h3 className="text-lg font-semibold text-foreground mt-1">{item.title}</h3>
                        <p className="text-primary font-medium text-sm">{item.organization}</p>
                        {item.subtitle && (
                          <p className="text-muted-foreground text-sm">{item.subtitle}</p>
                        )}
                        <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-center mb-12">
            <span className="font-mono text-sm text-primary tracking-wider">EXPERIENCE</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4">Professional Journey</h2>
          </div>

          <div className="space-y-6">
            {experience.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title + item.period}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="relative pl-8 pb-6 border-l border-border last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-2.5 top-0 w-5 h-5 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>

                  <div className="p-6 bg-background border border-border rounded-xl hover:border-primary/50 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="hidden sm:flex w-12 h-12 items-center justify-center bg-primary/10 rounded-lg shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <span className="text-xs font-mono text-muted-foreground">{item.period}</span>
                        <h3 className="text-lg font-semibold text-foreground mt-1">{item.title}</h3>
                        <p className="text-primary font-medium text-sm">{item.organization}</p>
                        
                        <ul className="mt-3 space-y-2">
                          {item.description.map((desc, i) => (
                            <li key={i} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                              <span className="text-primary mt-1.5 shrink-0">•</span>
                              {desc}
                            </li>
                          ))}
                        </ul>

                        {item.tech && (
                          <div className="flex flex-wrap gap-1.5 mt-4">
                            {item.tech.map((t) => (
                              <span key={t} className="px-2 py-0.5 text-xs font-mono bg-secondary text-secondary-foreground rounded">
                                {t}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
