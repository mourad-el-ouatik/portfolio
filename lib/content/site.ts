import {
  Home, UserRound, Briefcase, GraduationCap, FolderGit2, BadgeCheck, Layers, Users, FlaskConical, Mail,
  type LucideIcon,
} from "lucide-react"

export interface SectionMeta {
  id: string
  index: number
  label: string
  icon: LucideIcon
  hue: number
}

export const sections: SectionMeta[] = [
  { id: "hero", index: 1, label: "Accueil", icon: Home, hue: 255 },
  { id: "about", index: 2, label: "À propos", icon: UserRound, hue: 270 },
  { id: "experience", index: 3, label: "Expérience", icon: Briefcase, hue: 240 },
  { id: "education", index: 4, label: "Formation", icon: GraduationCap, hue: 215 },
  { id: "projects", index: 5, label: "Projets", icon: FolderGit2, hue: 250 },
  { id: "certifications", index: 6, label: "Certifications", icon: BadgeCheck, hue: 200 },
  { id: "skills", index: 7, label: "Compétences", icon: Layers, hue: 265 },
  { id: "leadership", index: 8, label: "Engagement", icon: Users, hue: 230 },
  { id: "research", index: 9, label: "Recherche", icon: FlaskConical, hue: 190 },
  { id: "contact", index: 10, label: "Contact", icon: Mail, hue: 255 },
]

export const mobileShortcuts = ["hero", "experience", "projects", "skills", "contact"] as const
export const mobileShortcutLabels: Record<(typeof mobileShortcuts)[number], string> = {
  hero: "Accueil",
  experience: "Parcours",
  projects: "Projets",
  skills: "Compétences",
  contact: "Contact",
}

export const nodeNumber = (index: number) => `N·${String(index).padStart(2, "0")}`

export const profile = {
  name: "Mourad EL OUATIK",
  firstName: "Mourad",
  lastName: "EL OUATIK",
  monogram: "ME",
  title: "Étudiant Ingénieur Cybersécurité | Cyber GRC | IT Risk GRC",
  location: "Marrakech, Maroc",
  email: "mouradelouatik04@gmail.com",
  phone: "+212 623-189074",
  phoneHref: "tel:+212623189074",
  cv: "/CV_Mourad_EL_OUATIK_Consultant_GRC.pdf",
  availabilityShort: "Dispo dès fév. 2027",
  availability: "Disponible pour un stage de fin d'études — Conseil Cybersécurité & GRC",
  availabilityDetail: "PFE de 6 mois · Conseil Cybersécurité & GRC · disponible dès février 2027",
}

export const links = {
  github: "https://github.com/mourad-el-ouatik",
  linkedin: "https://www.linkedin.com/in/mourad-el-ouatik",
  credly: "https://www.credly.com/users/mourad-el-ouatik",
}

export const heroContent = {
  lede: [
    "Je recherche un stage de fin d'études de 6 mois en conseil Cybersécurité & GRC. Mon parcours technique (Architectures, IAM, Zero Trust) associé à une expertise en ",
    "gouvernance et protection des données",
    " (certifié IBM GRC & Data Privacy) me permet de piloter des chantiers de ",
    "conformité ISO 27001 et NIST CSF",
    " avec une vision concrète et pragmatique.",
  ],
  stats: [
    { parts: [{ to: 12 }], label: "PME auditées ISO 27001 / 27035" },
    { parts: [{ to: 9 }, { sep: " · " }, { to: 5 }], label: "Nœuds Zero Trust · VLAN" },
    { parts: [{ to: 5000, suffix: "+" }], label: "Événements / jour analysés" },
    { parts: [{ to: 3 }], label: "Certifications" },
  ],
  techStack: ["ISO 27001", "NIST CSF", "IAM", "Zero Trust", "GRC", "Wazuh", "Python"],
  floating: ["ISO 27001", "9 nœuds · 5 VLAN", "5 000+ événements/jour"],
} as const
