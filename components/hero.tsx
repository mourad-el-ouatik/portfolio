"use client"

import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  Award,
  ArrowDown,
  Download,
  MapPin,
  ExternalLink,
} from "lucide-react"
import { useEffect } from "react"

const stats = [
  { value: "38+", label: "Security Projects" },
  { value: "3", label: "Certifications" },
  { value: "2", label: "Scientific Articles" },
  { value: "4", label: "Leadership Roles" },
]

const techStack = [
  "Docker",
  "Terraform",
  "Kubernetes",
  "Python",
  "Linux",
  "Wazuh",
  "Ollama",
]

const badges = [
  {
    id: "03f5945d-b591-4cc6-beb6-dec540bc578d",
    title: "NSE 3 Certified",
    issuer: "Fortinet",
  },
  {
    id: "ea29b4f1-b0b8-4e32-bdde-bc2838616cad",
    title: "Fortinet Certified Associate",
    issuer: "Fortinet",
  },
  {
    id: "53c8d5cb-fdc6-4d78-9326-4d86d16adc1f",
    title: "Fortinet NSE 3 Exam",
    issuer: "Fortinet",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function Hero() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="//cdn.credly.com/assets/utilities/embed.js"]'
    )

    if (!existingScript) {
      const script = document.createElement("script")
      script.src = "//cdn.credly.com/assets/utilities/embed.js"
      script.async = true
      script.type = "text/javascript"
      document.body.appendChild(script)
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 lg:px-12 pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.25_0.01_250)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.25_0.01_250)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.08] pointer-events-none" />

      <div className="absolute -top-48 -right-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-[1fr,1fr] gap-16 xl:gap-24 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-10"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-3 px-4 py-2.5 bg-primary/10 border border-primary/25 rounded-full backdrop-blur-sm shadow-[0_0_30px_rgba(0,255,210,0.05)]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
                </span>
                <span className="text-sm text-primary font-medium tracking-wide">
                  Available for PFE Internship
                </span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-3">
              <p className="text-muted-foreground font-mono text-sm tracking-[0.2em] uppercase">
                Cybersecurity Engineering Student
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-foreground">Mourad</span>{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                  EL OUATIK
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              I design and implement resilient cybersecurity solutions,
              specializing in{" "}
              <span className="text-foreground font-medium">
                DevSecOps automation
              </span>
              ,{" "}
              <span className="text-foreground font-medium">
                cloud security architecture
              </span>
              , and{" "}
              <span className="text-foreground font-medium">
                AI-powered threat detection
              </span>
              .
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <div className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-primary/25"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 border border-border bg-background/50 text-foreground font-medium rounded-xl hover:bg-secondary hover:border-primary/30 transition-all duration-200 backdrop-blur-sm"
              >
                <Mail className="w-4 h-4" />
                Get In Touch
              </a>
              <a
                href="./CV_Mourad_EL_OUATIK_COMPLET_FR.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3.5 text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-8 pt-2"
            >
              <a
                href="https://github.com/mourad-el-ouatik"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mourad-el-ouatik"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.credly.com/users/mourad-el-ouatik"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Credly Profile"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Award className="w-5 h-5" />
              </a>
              <span className="h-5 w-px bg-border" />
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Marrakech, Morocco
              </span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2.5 pt-2"
            >
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 text-xs font-mono font-medium bg-secondary/70 text-secondary-foreground rounded-full border border-border/50 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full"
          >
            <div className="rounded-3xl border border-primary/15 bg-card/40 backdrop-blur-xl p-8 shadow-2xl shadow-primary/5 hover:border-primary/30 transition-all duration-500 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="text-center space-y-2">
                  <p className="text-xs uppercase tracking-[0.3em] text-primary font-mono font-medium">
                    Certifications
                  </p>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    Verified Credly Badges
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                    Industry-recognized cybersecurity certifications validated
                    through Credly.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {badges.map((badge) => (
                    <motion.div
                      key={badge.id}
                      whileHover={{
                        y: -8,
                        scale: 1.04,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                      className="rounded-2xl border border-border/50 bg-background/50 p-4 shadow-lg hover:border-primary/40 hover:shadow-[0_0_40px_rgba(0,255,210,0.12)] transition-all duration-300 relative group/badge backdrop-blur-sm"
                    >
                      <div
                        data-iframe-width="150"
                        data-iframe-height="270"
                        data-share-badge-id={badge.id}
                        data-share-badge-host="https://www.credly.com"
                        className="mx-auto w-fit"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-8 text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href="https://www.credly.com/users/mourad-el-ouatik"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View all certifications on Credly"
                    className="inline-flex items-center gap-2.5 px-6 py-3 bg-primary/10 text-primary font-medium rounded-xl hover:bg-primary/20 transition-all duration-200 border border-primary/20 hover:border-primary/40 group/btn"
                  >
                    <Award className="w-4 h-4" />
                    <span>View all certifications on Credly</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover/btn:opacity-100 transition-opacity" />
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="flex flex-col items-center gap-2.5 text-muted-foreground hover:text-primary transition-colors duration-200 group"
        >
          <span className="text-xs font-mono tracking-[0.2em] uppercase">
            Scroll
          </span>
          <ArrowDown className="w-4 h-4 group-hover:animate-bounce transition-all" />
        </a>
      </motion.div>
    </section>
  )
}
