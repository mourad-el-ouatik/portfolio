"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Cloud, GitBranch, Shield, Bug, Radio, LineChart, Code, Lock, Globe, ClipboardCheck } from "lucide-react"

const skills = [
  {
    category: "Cyber GRC & Conformité",
    icon: ClipboardCheck,
    tools: ["ISO 27001", "ISO 27035", "NIST CSF", "NIST SP 800-207", "DGSSI", "Data Privacy"],
  },
  {
    category: "Cloud & Infrastructure",
    icon: Cloud,
    tools: ["Azure", "Terraform", "Docker", "Kubernetes", "OpenStack"],
  },
  {
    category: "DevSecOps",
    icon: GitBranch,
    tools: ["GitLab CI/CD", "Jenkins", "GitHub Actions", "Trivy", "SonarQube", "SAST/DAST"],
  },
  {
    category: "Security Tools",
    icon: Shield,
    tools: ["Suricata", "Snort", "Proxmox", "Honeypots", "Wazuh", "Forensics", "Zeek", "Splunk"],
  },
  {
    category: "Threat Intelligence",
    icon: Bug,
    tools: ["RTIR", "Cortex", "IRIS", "SOAR", "OpenCTI", "MISP", "TheHive", "Ollama"],
  },
  {
    category: "Networking & VPN",
    icon: Radio,
    tools: ["VPN", "RBAC", "Firewalls", "DNS", "SSH", "FTP"],
  },
  {
    category: "Monitoring & Logs",
    icon: LineChart,
    tools: ["Grafana", "Prometheus", "InfluxDB", "ELK Stack", "Telegraf", "SIEM"],
  },
  {
    category: "Programming",
    icon: Code,
    tools: ["Python", "Java", "C", "JavaScript", "PHP", "Bash", "PowerShell"],
  },
  {
    category: "Cryptography",
    icon: Lock,
    tools: ["Post-Quantum Crypto", "Kyber", "Dilithium", "AES", "RSA", "PKI"],
  },
  {
    category: "Web Development",
    icon: Globe,
    tools: ["HTML", "CSS", "Tailwind", "JavaScript", "PHP", "React"],
  },
  {
    category: "Mobile Development",
    icon: Globe,
    tools: ["XML", "Gradle", "Java", "PHP", "SQL", "AndroidManifest"],
  },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl lg:mb-16"
        >
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">Compétences</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Compétences & Référentiels</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">Référentiels de gouvernance, outils et technologies que je mobilise pour piloter des chantiers de conformité et de sécurité.</p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 bg-card border border-border rounded-2xl hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-3">{skill.category}</h3>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {skill.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 text-xs bg-secondary text-secondary-foreground rounded"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
