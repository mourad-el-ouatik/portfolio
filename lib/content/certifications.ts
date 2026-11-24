export interface Certification {
  name: string
  issuer: string
  date: string
  badge: string
  wide?: boolean
  url: string
  latest?: boolean
}

export const certifications: Certification[] = [
  {
    name: "Governance, Risk, Compliance & Data Privacy",
    issuer: "IBM",
    date: "Septembre 2026",
    badge: "/governance-risk-compliance-and-data-privacy.png",
    url: "https://www.credly.com/badges/2fdd2e33-c158-4a46-ba74-9d1ee496d2b0/public_url",
    latest: true,
  },
  {
    name: "Oracle Cloud Infrastructure Foundations Associate",
    issuer: "Oracle",
    date: "Juillet 2026",
    badge: "/OCI26FNDCFA.jpg",
    wide: true,
    url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=F36F760015F03DE6A98F380C8FBB329C67BC91D7396DBF996595025BC41E9539",
  },
  {
    name: "Fortinet NSE 3 Certified in Cybersecurity",
    issuer: "Fortinet",
    date: "Décembre 2025",
    badge: "/fortinet-nse-3-certified-in-cybersecurity.1.png",
    url: "https://www.credly.com/badges/03f5945d-b591-4cc6-beb6-dec540bc578d/public_url",
  },
]
