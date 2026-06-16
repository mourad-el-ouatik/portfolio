"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Github, ExternalLink, Shield, Globe, GitBranch, Database, Eye, Network, Atom, GraduationCap, Landmark, ShieldCheck, Box, Smartphone, Mail } from "lucide-react"

const categories = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI" },
  { id: "devsecops", label: "DevSecOps" },
  { id: "cloud", label: "Cloud Security" },
  { id: "soc", label: "SOC" },
  { id: "crypto", label: "Cryptography" },
  { id: "web", label: "Web Development" },
]

const projects = [
  {
    title: "AI-Enhanced APK Security Analysis Platform",
    period: "May 2026 – June 2026",
    description: "Android application security analysis platform combining JADX reverse engineering, automated static analysis, and AI-assisted malware detection using Quark Engine.",    tech: ["Java", "JADX", "Quark Engine", "Python", "Bash", "HTML", "Android Security", ],
    category: ["soc", "ai"],
    highlight: "Automated APK reverse engineering and AI-assisted mobile threat analysis",
    icon: Smartphone,
    github: "https://github.com/mourad-el-ouatik/secure-apk-analyzer",
  },
  {
    title: "AI-Driven Multi-Tenant SOC Architecture",
    period: "March 2026 – April 2026",
    description: "AI-enhanced SOC architecture integrating Wazuh SIEM, Ollama-based alert analysis, automated SOAR response workflows, and real-time threat intelligence visualization.",    tech: ["Wazuh", "Ollama", "SOAR", "VPN", "SSH", "Threat Intelligence",],
    category: ["soc", "ai"],
    highlight: "AI-assisted detection, automated incident response, and real-time SOC orchestration",
    icon: Shield,
    github: "https://github.com/mourad-el-ouatik/AI-based-incident-analyser",
  },
  {
    title: "SOC Architecture — Client ↔ MSSP",
    period: "Feb 2026 - Mar 206",
    description: "Designed a full multi-tenant SOC architecture with a 3-node Wazuh SIEM cluster, RTIR + Cortex integration for automated artifact enrichment and incident response.",
    tech: ["Wazuh", "RTIR", "Cortex", "MISP", "OpenCTI", "SOAR"],
    category: ["soc"],
    highlight: "End-to-end detection & threat intel pipeline",
    icon: Shield,
    github: "https://github.com/mourad-el-ouatik",
  },
  {
    title: "AISEC 2026 — Conference Website",
    period: "Mar 2026",
    description: "Designed and developed the official website for the AISEC 2026 international cybersecurity conference hosted at UCA.",
    tech: ["HTML/CSS", "JavaScript", "Responsive Design", "Web Security"],
    category: ["web"],
    highlight: "Pending deployment at aisec.uca.ma",
    icon: Globe,
    link: "https://aisec.uca.ma",
    github: "https://aisec.uca.ma",
  },
  {
    title: "Secure CI/CD Pipeline",
    period: "Jan - Mar 2026",
    description: "DevSecOps pipeline with automated security testing (SAST/DAST) and vulnerability scanning. Deployed on OCI infrastructure using Terraform.",
    tech: ["GitLab CI/CD", "Docker", "Trivy", "SonarQube", "Terraform"],
    category: ["devsecops", "cloud"],
    highlight: "60% faster deployments",
    icon: GitBranch,
    github: "https://github.com/mourad-el-ouatik",
  },
  {
    title: "Folyo — Secure Order Platform",
    period: "Jan 2026",
    description: "Full-stack secure order management system with security-by-design. Includes CI/CD pipelines with SAST/DAST, Dockerized infrastructure, and RBAC-enforced access.",
    tech: ["Docker", "CI/CD", "SAST/DAST", "RBAC", "DevSecOps", "PHP", "SQL"],
    category: ["devsecops", "web"],
    highlight: "Full-stack secure platform — built solo",
    icon: Box,
    github: "https://github.com/mourad-el-ouatik",
  },
  {
    title: "Real-Time Big Data Architecture",
    period: "Dec 2025",
    description: "Streaming data pipeline processing 10K+ events per second for anomaly detection. Real-time metrics visualization with automated alerting.",
    tech: ["Kafka", "Spark", "StreamLit", "Python"],
    category: ["cloud"],
    highlight: "10K+ events/sec",
    icon: Database,
    github: "https://github.com/mourad-el-ouatik/Real-Time-Big-Data-Architecture",
  },

  {
    title: "AI-Powered Gmail Phishing Detection System",
    period: "Jan 2026",
    description: "Real-time Gmail phishing detection using machine learning-based email analysis, dynamic risk scoring, and malicious URL identification.",
    tech: ["Python", "Machine Learning", "TF-IDF", "Scikit-learn", "Kafka", "Spark", "Streamlit", "Email Security",],
    category: ["ai"],
    highlight: "Real-time AI-driven phishing detection and email threat scoring",
    icon: Mail,
    github: "https://github.com/mourad-el-ouatik/-Smart-Phishing-Detector-for-Gmail",
  },
      
  {
    title: "Enterprise IDS Architecture",
    period: "Jun - Aug 2025",
    description: "Deployed intrusion detection system analyzing 5000+ security events daily with centralized logging and custom Grafana dashboards.",
    tech: ["Suricata", "InfluxDB", "Grafana", "Telegraf"],
    category: ["soc"],
    highlight: "40% reduced false positives",
    icon: Eye,
    github: "https://github.com/mourad-el-ouatik",
  },
  {
    title: "Multi-Service Honeypot Environment",
    period: "Sep - Nov 2025",
    description: "Containerized honeypot infrastructure capturing 200+ intrusion attempts daily with behavioral analysis for threat intelligence gathering.",
    tech: ["Docker", "Cowrie", "Conpot", "ELK Stack"],
    category: ["soc"],
    highlight: "200+ intrusions/day captured",
    icon: Eye,
    github: "https://github.com/mourad-el-ouatik",
  },
  {
    title: "Dynamic SDN Firewall",
    period: "Nov - Dec 2025",
    description: "Software-Defined Networking firewall with dynamic traffic control and self-programmable security rules using OpenFlow protocol.",
    tech: ["OpenFlow", "Python", "Ryu", "NameSpaces"],
    category: ["devsecops", "soc"],
    highlight: "Dynamic rule programming",
    icon: Network,
    github: "https://github.com/mourad-el-ouatik",
  },
  {
    title: "Quantum-Resistant Authentication",
    period: "Feb - Apr 2025",
    description: "Authentication system using post-quantum algorithms (Kyber & Dilithium) to ensure security against quantum computer attacks.",
    tech: ["Kyber", "Dilithium", "Python", "C"],
    category: ["crypto"],
    highlight: "Quantum-resistant",
    icon: Atom,
    github: "https://github.com/mourad-el-ouatik",
  },
  {
    title: "Learn Bridge Academy",
    period: "Mar - May 2025",
    description: "Intuitive platform for managing exams, grades, and student tracking. Simplifies academic evaluation with streamlined user experience.",
    tech: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
    category: ["web"],
    highlight: "Education Management",
    icon: GraduationCap,
    github: "https://github.com/mourad-el-ouatik/School_management",
  },
  {
    title: "MUN ENSA Marrakech Website",
    period: "Jan - Feb 2025",
    description: "Official website for MUN club at ENSA Marrakech, showcasing events and facilitating registration.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    category: ["web"],
    highlight: "Event Management",
    icon: Landmark,
    github: "https://github.com/mourad-el-ouatik/MUN-ENSA_M-website",
  },
  {
    title: "Cyprotect Platform",
    period: "Nov - Dec 2024",
    description: "Comprehensive cybersecurity services platform offering certificate generation, encryption algorithm implementation, and security tools.",
    tech: ["PHP", "JavaScript", "OpenSSL", "MySQL"],
    category: ["crypto", "web"],
    highlight: "Security Services Suite",
    icon: ShieldCheck,
    github: "https://github.com/mourad-el-ouatik/CyProtect",
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [filter, setFilter] = useState("all")

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category.includes(filter))

  return (
    <section id="projects" className="py-24 lg:py-32 px-6 lg:px-12 bg-card/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="font-mono text-sm text-primary tracking-wider">PROJECTS</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-4">Featured Projects</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Real-world security solutions and research implementations
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                filter === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                className="group bg-background border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                {/* Card Header */}
                <div className="p-6 pb-4 flex items-start justify-between">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="px-6 pb-6">
                  <span className="text-xs font-mono text-muted-foreground">{project.period}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-2 mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-mono bg-secondary text-secondary-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-0.5 text-xs font-mono text-muted-foreground">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Highlight */}
                  <div className="flex items-center gap-2 text-xs text-primary">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {project.highlight}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/mourad-el-ouatik"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Github className="w-4 h-4" />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
