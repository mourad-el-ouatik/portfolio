"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Award, ExternalLink, CheckCircle2, ShieldCheck, type LucideIcon } from "lucide-react"
import Image from "next/image"
import { SectionHeading } from "@/components/section-heading"

interface Certification {
  name: string
  issuer: string
  date: string
  icon: LucideIcon
  badge?: string
  url?: string
}

const certifications: Certification[] = [
  {
    name: "Governance, Risk, Compliance & Data Privacy",
    issuer: "IBM",
    date: "Septembre 2026",
    icon: ShieldCheck,
  },
  {
    name: "Oracle Cloud Infrastructure Foundations Associate",
    issuer: "Oracle",
    date: "Juillet 2026",
    icon: ShieldCheck,
    badge: "/OCI26FNDCFA.jpg",
    url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=F36F760015F03DE6A98F380C8FBB329C67BC91D7396DBF996595025BC41E9539",
  },
  {
    name: "Fortinet NSE 3 Certified in Cybersecurity",
    issuer: "Fortinet",
    date: "Décembre 2025",
    icon: ShieldCheck,
    badge: "/fortinet-nse-3-certified-in-cybersecurity.1.png",
    url: "https://www.credly.com/badges/03f5945d-b591-4cc6-beb6-dec540bc578d/public_url",
  },
]

export function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="certifications" className="bg-card/30 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Certifications professionnelles"
          description="Gouvernance, conformité, cloud et cybersécurité."
        />

        <div ref={ref} className="grid gap-6 md:grid-cols-3">
          {certifications.map((c, i) => {
            const Icon = c.icon
            const Wrapper = c.url ? "a" : "div"
            return (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Wrapper
                  {...(c.url ? { href: c.url, target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card/60 p-6 transition-colors hover:border-primary/40 sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    {c.badge ? (
                      <Image
                        src={c.badge}
                        alt={`Badge ${c.name}`}
                        width={72}
                        height={72}
                        className="h-[72px] w-[72px] rounded-lg object-contain"
                      />
                    ) : (
                      <div className="flex h-[72px] w-[72px] items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    )}
                    {c.url && (
                      <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                    )}
                  </div>

                  <p className="mt-6 text-xs font-medium uppercase tracking-[0.16em] text-primary">{c.issuer}</p>
                  <h3 className="mt-2 text-base font-semibold leading-snug text-foreground sm:text-lg">{c.name}</h3>

                  <div className="mt-auto flex items-center justify-between gap-3 pt-6 text-sm">
                    <span className="text-muted-foreground">Délivrée en {c.date}</span>
                    <CheckCircle2 aria-label="Vérifiée" className="h-4 w-4 text-emerald-500" />
                  </div>
                </Wrapper>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-10">
          <a
            href="https://www.credly.com/users/mourad-el-ouatik"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground"
          >
            <Award className="h-4 w-4" />
            Voir tous les badges sur Credly
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
