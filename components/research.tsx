"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FileText, BookOpen, Calendar, ArrowRight } from "lucide-react"

const publications = [
  {
    type: "Ongoing Research",
    title: "Post-Quantum Cryptographic Schemes for IoT Authentication",
    description: "Investigating the implementation of lattice-based cryptographic algorithms (Kyber, Dilithium) for resource-constrained IoT devices.",
    status: "In Progress",
  },
  {
    type: "Research Interest",
    title: "AI-Powered Threat Detection in Cloud Environments",
    description: "Exploring machine learning approaches for anomaly detection and automated threat response in multi-cloud architectures.",
    status: "Planned",
  },
  {
    type: "Research Interest",
    title: "Zero-Trust Security Models for MSSP Architectures",
    description: "Designing zero-trust frameworks for managed security service providers handling multi-tenant environments.",
    status: "Planned",
  },
]

const conferences = [
  {
    name: "AISEC 2026",
    role: "Speaker",
    organization: "UCA - Cadi Ayyad University",
    description: "Participated in a conference as a speaker on SOC platforms and their architecture",
    image: "/aisec.jpg",
  },
]

export function Research() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="research" className="py-24 lg:py-32 px-6 lg:px-12 bg-card/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-primary tracking-wider">RESEARCH</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-4">Research & Publications</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Academic research interests and conference participation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Research Topics */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Research Topics</h3>
            </div>

            <div className="space-y-4">
              {publications.map((pub, index) => (
                <motion.div
                  key={pub.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="p-5 bg-background border border-border rounded-xl hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-primary">{pub.type}</span>
                    <span className={`px-2 py-0.5 text-xs rounded-full ${
                      pub.status === "In Progress"
                        ? "bg-primary/10 text-primary"
                        : "bg-secondary text-muted-foreground"
                    }`}>
                      {pub.status}
                    </span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{pub.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pub.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Conferences & Future Plans */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Conferences */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Conference Participation</h3>
              </div>

              <div className="space-y-4">
              {conferences.map((conf, index) => (
                <motion.div
                  key={conf.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group bg-background border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
                >
                  {/* Banner Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={conf.image}
                      alt={conf.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
              
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  </div>
              
                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-muted-foreground">
                        {conf.organization}
                      </span>
              
                      <span className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full">
                        {conf.role}
                      </span>
                    </div>
              
                    <h4 className="font-semibold text-foreground mb-2">
                      {conf.name}
                    </h4>
              
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {conf.description}
                    </p>
                  </div>
                </motion.div>
              ))}
              </div>
            </div>

            {/* Future Goals */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 bg-primary/5 border border-primary/20 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Research Goals</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Actively seeking opportunities to contribute to academic publications in cybersecurity 
                and AI. Interested in collaborating on research projects focusing on post-quantum 
                cryptography, threat intelligence automation, and secure cloud architectures.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
              >
                Discuss Research Collaboration
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
