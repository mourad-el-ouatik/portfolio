export interface LeadershipRole {
  title: string
  period: string
  stamp: string
  description: string
  skills: string[]
}

export interface Organization {
  organization: string
  image: string
  imageAlt: string
  roles: LeadershipRole[]
}

export const leadership: Organization[] = [
  {
    organization: "MUN ENSA Marrakech",
    image: "/bg1.png",
    imageAlt: "MUN ENSA Marrakech — prise de parole lors d'un événement",
    roles: [
      {
        title: "Co-fondateur",
        period: "Mai 2024 · 1 mois",
        stamp: "2024-05",
        description:
          "Co-fondation de la première initiative de Model United Nations de l'ENSA : contribution à la vision, à la structure et à l'orientation stratégique. Rôle clé dans la planification du lancement, la coordination de l'équipe et le développement du concept.",
        skills: ["Construction de vision", "Collaboration stratégique", "Initiative & ownership"],
      },
      {
        title: "Vice-Président",
        period: "Juin 2024 – Avril 2025 · 11 mois",
        stamp: "2024-06 → 2025-04",
        description:
          "Pilotage de la stratégie organisationnelle et de l'exécution opérationnelle du programme phare de simulation diplomatique de l'ENSA. Supervision de la planification des projets, de la coordination interne et de la gestion des comités.",
        skills: ["Leadership & délégation", "Décision sous pression", "Excellence organisationnelle"],
      },
    ],
  },
  {
    organization: "Club Self-Dev",
    image: "/bg2.png",
    imageAlt: "Club Self-Dev — événement du club",
    roles: [
      {
        title: "Secrétaire général",
        period: "Mai 2023 – Avril 2024 · 1 an",
        stamp: "2023-05 → 2024-04",
        description:
          "Gestion des activités administratives, organisationnelles et de coordination. Rôle central dans la planification des événements, la documentation des activités et la structuration des processus internes.",
        skills: ["Communication efficace", "Sens du détail", "Fiabilité & rigueur"],
      },
      {
        title: "Président",
        period: "Avril 2024 – Mai 2025 · 1 an 2 mois",
        stamp: "2024-04 → 2025-05",
        description:
          "Pilotage de la vision stratégique et du développement à long terme du club. Animation de programmes de développement personnel, d'ateliers et d'initiatives axés sur le leadership, l'état d'esprit et l'esprit critique.",
        skills: ["Leadership inspirant", "Pensée stratégique", "Animation de communauté"],
      },
    ],
  },
]
