export type ResearchStatus = "done" | "ongoing" | "planned"

export const statusLabel: Record<ResearchStatus, string> = {
  done: "Terminé",
  ongoing: "En cours",
  planned: "Planifié",
}

export const topics: { type: string; title: string; description: string; status: ResearchStatus }[] = [
  {
    type: "Axe de recherche",
    title: "AI-Assisted Mobile Application Security Analysis",
    description:
      "Étude de techniques d'analyse de sécurité intelligente d'applications Android, combinant rétro-ingénierie statique, inspection comportementale et détection de malwares assistée par IA pour identifier vulnérabilités, schémas malveillants et menaces mobiles dans les environnements APK.",
    status: "done",
  },
  {
    type: "Axe de recherche",
    title: "AI-Driven SOC Automation & Intelligent Threat Analysis",
    description:
      "Exploration de l'intégration de modèles d'IA tels qu'Ollama dans des environnements SOC pour améliorer l'analyse des alertes, automatiser la classification des menaces et orchestrer des workflows de réponse à incident intelligents dans des architectures de sécurité multi-tenant.",
    status: "ongoing",
  },
  {
    type: "Axe de recherche",
    title: "AI-Powered Threat Detection in IT Environments",
    description:
      "Exploration d'approches de machine learning pour la détection d'anomalies et la réponse automatisée aux menaces dans les architectures IT.",
    status: "planned",
  },
]

export const conference = {
  name: "AISEC 2026",
  role: "Intervenant",
  organization: "UCA - Université Cadi Ayyad",
  description: "Participation en tant qu'intervenant à une conférence, sur les plateformes SOC et leur architecture.",
  image: "/aisec.jpg",
  imageAlt: "Panel de la conférence internationale AISEC 2026 sur l'intelligence artificielle et la cybersécurité",
}

export const goals = {
  title: "Objectifs de recherche",
  text: "À la recherche d'opportunités pour contribuer à des publications académiques en cybersécurité et en IA. Intéressé par des projets de recherche collaboratifs autour de la cryptographie post-quantique, de l'automatisation de la threat intelligence et des architectures cloud sécurisées.",
  cta: "Discuter d'une collaboration de recherche",
}
