"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Cloud, GitBranch, Shield, Bug, Radio, LineChart, Code, Lock, Globe } from "lucide-react"

const skills = [
  {
    category: "Cloud & Infrastructure",
    icon: Cloud,
    tools: ["Azure", "Terraform", "Docker", "Kubernetes", "OpenStack"],
    level: 65,
  },
  {
    category: "DevSecOps",
    icon: GitBranch,
    tools: ["GitLab CI/CD", "Jenkins", "GitHub Actions", "Trivy", "SonarQube", "SAST/DAST"],
    level: 70,
  },
  {
    category: "Security Tools",
    icon: Shield,
    tools: ["Suricata", "Snort", "Proxmox", "Honeypots", "Wazuh", "Forensics", "Zeek", "Splunk"],
    level: 98,
  },
  {
    category: "Threat Intelligence",
    icon: Bug,
    tools: ["RTIR", "Cortex", "IRIS", "SOAR", "OpenCTI", "MISP", "TheHive", "Ollama"],
    level: 88,
  },
  {
    category: "Networking & VPN",
    icon: Radio,
    tools: ["VPN", "RBAC", "Firewalls", "DNS", "SSH", "FTP"],
    level: 98,
  },
  {
    category: "Monitoring & Logs",
    icon: LineChart,
    tools: ["Grafana", "Prometheus", "InfluxDB", "ELK Stack", "Telegraf", "SIEM"],
    level: 100,
  },
  {
    category: "Programming",
    icon: Code,
    tools: ["Python", "Java", "C", "JavaScript", "PHP", "Bash", "PowerShell"],
    level: 98,
  },
  {
    category: "Cryptography",
    icon: Lock,
    tools: ["Post-Quantum Crypto", "Kyber", "Dilithium", "AES", "RSA", "PKI"],
    level: 85,
  },
  {
    category: "Web Development",
    icon: Globe,
    tools: ["HTML", "CSS", "Tailwind", "JavaScript", "PHP", "React"],
    level: 100,
  },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-primary tracking-wider">SKILLS</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-4">Technical Arsenal</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Technologies and tools I leverage to build secure, scalable solutions
          </p>
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
                className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
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
                          className="px-2 py-0.5 text-xs font-mono bg-secondary text-secondary-foreground rounded"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                    {/* Progress Bar */}
                    <div className="h-1 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                      />
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
