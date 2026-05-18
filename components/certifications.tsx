"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award } from "lucide-react"

interface Certification {
  title: string
  issuer: string
  date: string
}

const certifications: Certification[] = [
  {
    title: "Softpro India Computer Technologies Pvt. Ltd.",
    issuer: "Softpro India",
    date: "2024",
  },
  {
    title: "National Unity Day Quiz",
    issuer: "Government of India",
    date: "2023",
  },
  {
    title: "MERN Stack Developer Certification",
    issuer: "Tutedude",
    date: "2023",
  },
]

function CertificationCard({ cert, index }: { cert: Certification; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative min-w-[320px] md:min-w-[400px]"
    >
      <motion.div
        whileHover={{ y: -5 }}
        className="relative p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-accent/30 transition-all duration-500"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 border border-accent/20">
              <Award className="w-6 h-6 text-accent" />
            </div>
            <span className="font-mono text-xs text-muted-foreground">{cert.date}</span>
          </div>

          {/* Title */}
          <h3 className="font-sans text-xl md:text-2xl font-light mb-2 text-foreground group-hover:text-white transition-colors duration-300">
            {cert.title}
          </h3>

          {/* Issuer */}
          <p className="font-mono text-sm text-muted-foreground">{cert.issuer}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Certifications() {
  return (
    <section id="certifications" className="relative py-32 overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-8 md:px-12 mb-12"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">06 — CREDENTIALS</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic">Certifications</h2>
      </motion.div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div className="flex gap-6 px-8 md:px-12 pb-4 overflow-x-auto scrollbar-hide">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.title} cert={cert} index={index} />
          ))}
        </div>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>

      {/* Decorative Element */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mt-24 mx-8 md:mx-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent origin-left"
      />
    </section>
  )
}
