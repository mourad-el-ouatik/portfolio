export type DiagramKind = "topology" | "pipeline" | "apk"

export interface Project {
  id: string
  title: string
  period: string
  summary: string
  details: string[]
  tech: string[]
  github?: string
  featured?: boolean
  diagram: DiagramKind
  caption: string
}

export const projects: Project[] = [
  {
    id: "zt-soc",
    title: "Zero Trust & AI-Driven SOC Architecture",
    period: "Juillet – Septembre 2026",
    summary:
      "Architecture Zero Trust alignée sur le NIST SP 800-207 et SOC hybride assisté par IA, déployés sur un cluster de 9 nœuds répartis sur 5 VLAN.",
    details: [
      "Cluster Docker Swarm (3 managers, 6 workers) sur infrastructure Proxmox VE en haute disponibilité.",
      "Contrôle d'accès, authentification, gestion des accès privilégiés et des secrets (Keycloak, HashiCorp Vault, Teleport), segmentation réseau et isolation des environnements.",
      "Chaîne SOC : Wazuh, Zeek, TheHive, Cortex, OpenCTI, MISP, orchestration SOAR avec n8n.",
      "Moteur d'analyse d'incidents basé sur un LLM local (Ollama) et RAG : enrichissement contextuel et qualification des alertes sans sortie des données de l'infrastructure.",
    ],
    tech: ["Docker Swarm", "Proxmox", "Wazuh", "Ollama", "RAG", "Keycloak", "Vault", "NIST SP 800-207"],
    featured: true,
    diagram: "topology",
    caption: "Topologie : 3 nœuds managers, 6 workers, 5 VLAN.",
  },
  {
    id: "food-rescue",
    title: "Food Rescue — Risk Management & Secure Platform",
    period: "Septembre – Décembre 2026",
    summary:
      "Analyse transversale des risques et développement d'une plateforme de gestion des invendus alimentaires, intégrant une démarche DevSecOps et des contrôles de sécurité automatisés.",
    details: [
      "Analyse des risques cyber, juridiques, financiers, opérationnels et organisationnels à travers une matrice Probabilité × Impact.",
      "Identification des risques et définition de mesures de traitement adaptées aux enjeux de la plateforme.",
      "Développement d'une plateforme numérique de gestion des invendus alimentaires.",
      "Intégration d'un pipeline CI/CD avec GitHub Actions pour automatiser les contrôles de sécurité.",
      "Analyse statique du code avec SonarQube et scan de vulnérabilités des images Docker avec Trivy.",
      "Intégration de contrôles de sécurité en cohérence avec les recommandations OWASP Top 10.",
    ],
    tech: ["Risk Management", "Risk Matrix", "Java JEE", "GitHub Actions", "Docker", "SonarQube", "Trivy", "OWASP Top 10"],
    github: "https://github.com/mourad-el-ouatik/food-rescue-platform",
    diagram: "pipeline",
    caption: "Pipeline CI/CD : GitHub Actions, SonarQube, Trivy.",
  },
  {
    id: "apk",
    title: "AI-Enhanced APK Security Analysis Platform",
    period: "Mai – Juin 2026",
    summary:
      "Plateforme d'analyse de sécurité d'applications Android combinant rétro-ingénierie, analyse statique automatisée et détection de malwares assistée par IA.",
    details: [
      "Décompilation et inspection des APK avec JADX.",
      "Détection de comportements malveillants avec Quark Engine, orchestrée par des scripts Python et Bash.",
      "Restitution des résultats sous forme de rapport HTML pour l'analyste.",
    ],
    tech: ["Java", "JADX", "Quark Engine", "Python", "Bash"],
    github: "https://github.com/mourad-el-ouatik/secure-apk-analyzer",
    diagram: "apk",
    caption: "Flux : JADX, Quark Engine, rapport HTML.",
  },
]

const countWords = ["Zéro", "Un", "Deux", "Trois", "Quatre", "Cinq", "Six", "Sept", "Huit", "Neuf", "Dix"]
export const projectCountWord = countWords[projects.length] ?? String(projects.length)
