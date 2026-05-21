"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Server, Cloud, Network, ExternalLink, Clock, CheckCircle } from "lucide-react"

const certifications = [
  {
    name: "Mobile Programming",
    issuer: "MLIAEdu",
    date: "Mai 2026",
    status: "verified",
    icon: Smartphone,
  },
  {
    name: "FCA - FortiGate 7.6 Operator",
    issuer: "Fortinet",
    date: "December 2025",
    status: "verified",
    icon: Network,
  },
  {
    name: "Mobile app security",
    issuer: "MLIAEdu",
    date: "June 2026",
    status: "verified",
    icon: ShieldCheck,
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
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
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
