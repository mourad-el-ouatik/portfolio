"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, ExternalLink, Clock, CheckCircle, Smartphone, ShieldCheck, Network, Cloud, Server} from "lucide-react"
import Image from "next/image"

const certifications = [
  {
    name: "Mobile Programming",
    issuer: "MLIAEdu",
    date: "Mai 2026",
    status: "verified",
    icon: Smartphone,
    badgeUrl: null, // No badge available
  },
  {
    name: "Fortinet Certified Associate Cybersecurity",
    issuer: "Fortinet",
    date: "December 2025",
    status: "verified",
    icon: ShieldCheck,
    badgeUrl: "https://www.credly.com/badges/ea29b4f1-b0b8-4e32-bdde-bc2838616cad/public_url",
  },
  {
    name: "FCA - FortiGate 7.6 Operator",
    issuer: "Fortinet",
    date: "December 2025",
    status: "verified",
    icon: Network,
    badgeUrl: "https://www.credly.com/badges/53c8d5cb-fdc6-4d78-9326-4d86d16adc1f/public_url",
  },
  {
    name: "Fortinet NSE 3 Certified in Cybersecurity",
    issuer: "Fortinet",
    date: "Expires Dec 31, 2027",
    status: "verified",
    icon: ShieldCheck,
    badgeUrl: "https://www.credly.com/badges/03f5945d-b591-4cc6-beb6-dec540bc578d/public_url",
  },
  {
    name: "Oracle Cloud Infrastructure Certified Foundations Associate",
    issuer: "Oracle",
    date: "Issued Aug 8, 2026",
    status: "verified",
    icon: Cloud,
    badgeUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=F36F760015F03DE6A98F380C8FBB329C67BC91D7396DBF996595025BC41E9539",
  },
  {
    name: "Oracle Cloud Infrastructure Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "Issued Aug 8, 2026",
    status: "verified",
    icon: Server,
    badgeUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=31EAB8CBDE5DEDE1428F6A14A98D2BEF922DB0FA73C50796DD423B3368B5C322",
  },
]

export function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certifications" className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-primary tracking-wider">CERTIFICATIONS</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-4">Professional Certifications</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Industry-recognized credentials validating expertise
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-card border border-border rounded-xl text-center hover:border-primary/50 transition-all duration-300"
              >
                {cert.badgeUrl ? (
                  <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <Image
                      src={cert.badgeUrl}
                      alt={cert.name}
                      width={80}
                      height={80}
                      className="rounded-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                )}
                <h3 className="font-semibold text-foreground mb-2 min-h-[3rem] flex items-center justify-center">
                  {cert.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-1">{cert.issuer}</p>
                <p className="text-muted-foreground text-sm mb-4">{cert.date}</p>
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs ${
                  cert.status === "verified"
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "bg-secondary text-muted-foreground"
                }`}>
                  {cert.status === "verified" ? (
                    <>
                      <CheckCircle className="w-3 h-3" />
                      Verified
                    </>
                  ) : (
                    <>
                      <Clock className="w-3 h-3" />
                      Soon
                    </>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="https://www.credly.com/users/mourad-el-ouatik"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Award className="w-4 h-4" />
            View All on Credly
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
