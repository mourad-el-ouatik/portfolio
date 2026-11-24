export interface Phase {
  ticket: string
  label: string
  title: string
  period?: string
  points: string[]
}

export interface Role {
  organization: string
  location: string
  title: string
  period: string
  stamp: string
  context?: string
  phases?: Phase[]
  points?: string[]
  tech: string[]
}

export const roles: Role[] = [
  {
    organization: "Absec Cybersécurité",
    location: "Marrakech",
    title: "Stagiaire Ingénieur Cybersécurité",
    period: "Février – Septembre 2026",
    stamp: "2026-02 → 2026-09",
    context:
      "Startup de conseil et d'ingénierie cybersécurité. Audit ISO/IEC 27001 et ISO/IEC 27035 mené auprès de 12 PME, révélant des carences communes : logs non centralisés, réseau non cloisonné, gestion des privilèges obsolète, exposition au ransomware et aux fuites de données.",
    phases: [
      {
        ticket: "#GRC-01",
        label: "Cadrage GRC",
        title: "Audit ISO 27001 / 27035 de 12 PME",
        period: "Début de stage",
        points: [
          "Collecte, centralisation et analyse des données brutes d'audit pour cartographier les vulnérabilités communes aux 12 PME.",
          "Exploitation de ces constats pour formaliser la matrice des exigences techniques, servant de cahier des charges (segmentation réseau, règles de corrélation SOC, politiques d'accès).",
        ],
      },
      {
        ticket: "#SOC-02",
        label: "Mission 1",
        title: "Détection, réponse et gestion des incidents",
        period: "Février – Avril",
        points: [
          "Déploiement d'une chaîne SOC open-source : Wazuh, Zeek, OpenCTI, TheHive, n8n.",
          "Stockage et exploitation des données de sécurité dans PostgreSQL pour le suivi d'indicateurs opérationnels.",
        ],
      },
      {
        ticket: "#IA-03",
        label: "Mission 2",
        title: "Analyse des alertes assistée par IA",
        period: "Mai – Juillet",
        points: [
          "Intégration d'un LLM local (Ollama) et d'une recherche contextuelle (RAG) dans la chaîne SIEM → SOAR pour enrichir et qualifier les alertes, sans sortie des données hors de l'infrastructure.",
          "Suivi des performances : temps d'analyse d'une alerte, MTTR.",
        ],
      },
      {
        ticket: "#ZT-04",
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
    stamp: "2025-06 → 2025-08",
    points: [
      "Déploiement d'une sonde de détection d'intrusions (Suricata) analysant plus de 5 000 événements par jour, dans le cadre des exigences DGSSI et ISO 27001.",
      "Création de tableaux de bord de suivi sous Grafana / InfluxDB pour l'analyse et le reporting des événements de sécurité.",
    ],
    tech: ["Suricata", "Grafana", "InfluxDB", "DGSSI", "ISO 27001"],
  },
]
