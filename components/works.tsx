"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  title: string
  description: string
  tags: string[]
  image: string
  year: string
  liveUrl: string
  githubUrl: string
  features: string[]
}

const projects: Project[] = [
  {
    title: "FitQuest",
    description: "AI-powered fitness application that creates personalized workout and diet plans using machine learning algorithms.",
    tags: ["React", "Node.js", "MongoDB", "AI/ML"],
    image: "/abstract-neural-network-visualization-dark-theme.jpg",
    year: "2024",
    liveUrl: "#",
    githubUrl: "#",
    features: ["Personalized workout plans", "AI diet recommendations", "Progress tracking", "Social features"],
  },
  {
    title: "Bella Vista",
    description: "Elegant restaurant website featuring online reservations, menu showcase, and seamless user experience.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    image: "/futuristic-data-dashboard-dark-minimal.jpg",
    year: "2024",
    liveUrl: "#",
    githubUrl: "#",
    features: ["Online reservations", "Interactive menu", "Gallery showcase", "Contact integration"],
  },
  {
    title: "Task Manager",
    description: "Full-featured productivity application with CRUD operations, categories, and responsive design.",
    tags: ["React", "TypeScript", "Tailwind", "LocalStorage"],
    image: "/abstract-memory-storage-visualization.jpg",
    year: "2023",
    liveUrl: "#",
    githubUrl: "#",
    features: ["Task CRUD operations", "Category management", "Due date reminders", "Search and filter"],
  },
  {
    title: "Password Manager",
    description: "Secure password management application with encryption, password generation, and cloud sync capabilities.",
    tags: ["React", "Node.js", "MongoDB", "Encryption"],
    image: "/sound-wave-visualization-dark-theme.jpg",
    year: "2023",
    liveUrl: "#",
    githubUrl: "#",
    features: ["AES encryption", "Password generator", "Secure vault", "Cross-device sync"],
  },
]

// Get all unique tags for filtering
const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)))

export function Works() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  const filteredProjects = activeFilter
    ? projects.filter((p) => p.tags.includes(activeFilter))
    : projects

  return (
    <section id="works" className="relative py-32 px-8 md:px-12 md:py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">04 — SELECTED WORKS</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic mb-8">Project Showcase</h2>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveFilter(null)}
            className={`px-4 py-2 rounded-full font-mono text-xs tracking-wider transition-all duration-300 ${
              activeFilter === null
                ? "bg-white text-black"
                : "border border-white/20 text-muted-foreground hover:border-white/40"
            }`}
          >
            All
          </motion.button>
          {allTags.map((tag) => (
            <motion.button
              key={tag}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 rounded-full font-mono text-xs tracking-wider transition-all duration-300 ${
                activeFilter === tag
                  ? "bg-white text-black"
                  : "border border-white/20 text-muted-foreground hover:border-white/40"
              }`}
            >
              {tag}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Projects List */}
      <div className="relative">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative border-t border-white/10 py-8 md:py-12"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                data-cursor-hover
                className="group flex flex-col gap-6"
              >
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {/* Year */}
                  <span className="font-mono text-xs text-muted-foreground tracking-widest order-1 md:order-none">
                    {project.year}
                  </span>

                  {/* Title */}
                  <motion.h3
                    className="font-sans text-4xl md:text-6xl lg:text-7xl font-light tracking-tight group-hover:text-white/70 transition-colors duration-300 flex-1"
                    animate={{
                      x: hoveredIndex === filteredProjects.indexOf(project) ? 20 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {project.title}
                  </motion.h3>

                  {/* Tags */}
                  <div className="flex gap-2 flex-wrap order-2 md:order-none">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] tracking-wider px-3 py-1 border border-white/20 rounded-full text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description - shows on hover or always on mobile */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: hoveredIndex === filteredProjects.indexOf(project) ? "auto" : 0,
                    opacity: hoveredIndex === filteredProjects.indexOf(project) ? 1 : 0,
                  }}
                  className="overflow-hidden md:block"
                >
                  <p className="font-sans text-muted-foreground text-sm md:text-base max-w-2xl mb-4">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="font-mono text-[10px] tracking-wider text-accent"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      data-cursor-hover
                      className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-foreground hover:text-accent transition-colors duration-300"
                    >
                      Live Demo <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href={project.githubUrl}
                      data-cursor-hover
                      className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-foreground hover:text-accent transition-colors duration-300"
                    >
                      GitHub <Github className="w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Bottom Border */}
      <div className="border-t border-white/10" />
    </section>
  )
}
