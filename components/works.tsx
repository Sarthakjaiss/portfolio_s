"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github } from "lucide-react"

interface Project {
  title: string
  description: string
  tags: string[]
  image: string
  year: string
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
    githubUrl: "#",
    features: ["Personalized workout plans", "AI diet recommendations", "Progress tracking", "Social features"],
  },
  {
    title: "Bella Vista",
    description: "Elegant restaurant website featuring online reservations, menu showcase, and seamless user experience.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    image: "/futuristic-data-dashboard-dark-minimal.jpg",
    year: "2024",
    githubUrl: "#",
    features: ["Online reservations", "Interactive menu", "Gallery showcase", "Contact integration"],
  },
  {
    title: "Task Manager",
    description: "Full-featured productivity application with CRUD operations, categories, and responsive design.",
    tags: ["React", "TypeScript", "Tailwind", "LocalStorage"],
    image: "/abstract-memory-storage-visualization.jpg",
    year: "2023",
    githubUrl: "#",
    features: ["Task CRUD operations", "Category management", "Due date reminders", "Search and filter"],
  },
  {
    title: "Password Manager",
    description: "Secure password management application with encryption, password generation, and cloud sync capabilities.",
    tags: ["React", "Node.js", "MongoDB", "Encryption"],
    image: "/sound-wave-visualization-dark-theme.jpg",
    year: "2023",
    githubUrl: "#",
    features: ["AES encryption", "Password generator", "Secure vault", "Cross-device sync"],
  },
]

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)))

export function Works() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  const filteredProjects = activeFilter
    ? projects.filter((p) => p.tags.includes(activeFilter))
    : projects

  return (
    <section id="works" className="relative py-24 px-8 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">04 — SELECTED WORKS</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic mb-6">Project Showcase</h2>

        <div className="flex flex-wrap gap-2">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
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
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
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

      <div className="grid gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8 transition-all duration-300"
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2">
                  <span className="font-mono text-xs text-muted-foreground tracking-widest">{project.year}</span>
                  <h3 className="font-sans text-3xl md:text-4xl font-light tracking-tight text-foreground">{project.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] tracking-wider px-3 py-1 rounded-full border border-white/20 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-sm md:text-base text-muted-foreground max-w-3xl leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.features.map((feature) => (
                  <span
                    key={feature}
                    className="font-mono text-[10px] tracking-wider text-accent"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <div className="mt-4">
                <a
                  href={project.githubUrl}
                  data-cursor-hover
                  className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-foreground hover:text-accent transition-colors duration-300"
                >
                  GitHub <Github className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="border-t border-white/10 mt-10" />
    </section>
  )
}
