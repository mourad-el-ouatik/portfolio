export interface SkillCategory {
  category: string
  icon: "grc" | "cloud" | "devsecops" | "tools" | "intel" | "network" | "monitor" | "code" | "crypto" | "web" | "mobile"
  tools: string[]
}

export interface Vlan {
  id: string
  name: string
  icon: "grc" | "soc" | "cloud" | "dev" | "crypto"
  categories: SkillCategory[]
}

export const vlans: Vlan[] = [
  {
    id: "grc",
    name: "VLAN GRC",
    icon: "grc",
    categories: [
      { category: "Cyber GRC & Conformité", icon: "grc", tools: ["ISO 27001", "ISO 27035", "NIST CSF", "NIST SP 800-207", "DGSSI", "Data Privacy"] },
    ],
  },
  {
    id: "soc",
    name: "VLAN Sécurité / SOC",
    icon: "soc",
    categories: [
      { category: "Outils de sécurité", icon: "tools", tools: ["Suricata", "Snort", "Proxmox", "Honeypots", "Wazuh", "Forensics", "Zeek", "Splunk"] },
      { category: "Threat Intelligence", icon: "intel", tools: ["RTIR", "Cortex", "IRIS", "SOAR", "OpenCTI", "MISP", "TheHive", "Ollama"] },
      { category: "Supervision & logs", icon: "monitor", tools: ["Grafana", "Prometheus", "InfluxDB", "ELK Stack", "Telegraf", "SIEM"] },
    ],
  },
  {
    id: "cloud",
    name: "VLAN Cloud & DevSecOps",
    icon: "cloud",
    categories: [
      { category: "Cloud & Infrastructure", icon: "cloud", tools: ["Azure", "Terraform", "Docker", "Kubernetes", "OpenStack"] },
      { category: "DevSecOps", icon: "devsecops", tools: ["GitLab CI/CD", "Jenkins", "GitHub Actions", "Trivy", "SonarQube", "SAST/DAST"] },
    ],
  },
  {
    id: "dev",
    name: "VLAN Développement",
    icon: "dev",
    categories: [
      { category: "Programmation", icon: "code", tools: ["Python", "Java", "C", "JavaScript", "PHP", "Bash", "PowerShell"] },
      { category: "Développement web", icon: "web", tools: ["HTML", "CSS", "Tailwind", "JavaScript", "PHP", "React"] },
      { category: "Développement mobile", icon: "mobile", tools: ["XML", "Gradle", "Java", "PHP", "SQL", "AndroidManifest"] },
    ],
  },
  {
    id: "crypto",
    name: "VLAN Crypto & Réseau",
    icon: "crypto",
    categories: [
      { category: "Cryptographie", icon: "crypto", tools: ["Post-Quantum Crypto", "Kyber", "Dilithium", "AES", "RSA", "PKI"] },
      { category: "Réseau & VPN", icon: "network", tools: ["VPN", "RBAC", "Firewalls", "DNS", "SSH", "FTP"] },
    ],
  },
]
