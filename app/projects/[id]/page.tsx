"use client"

import { motion } from "framer-motion"
import { Github, ChevronLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getProjectById } from "@/lib/projects"
import { useParams } from "next/navigation"
import { notFound } from "next/navigation"

export default function ProjectDetail() {
  const params = useParams()
  const id = params.id as string
  const project = getProjectById(id)

  if (!project) {
    notFound()
  }

  return (
    <main className="bg-[#050505] text-white min-h-screen">
      {/* Header with Back Button */}
      <div className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 md:px-12 py-6 flex items-center justify-between">
          <Link
            href="/#works"
            className="flex items-center gap-2 font-mono text-sm tracking-widest uppercase hover:text-accent transition-colors duration-300"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Works
          </Link>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-sm tracking-widest uppercase px-4 py-2 border border-white/20 rounded-full hover:border-accent hover:text-accent transition-colors duration-300"
          >
            <Github className="w-4 h-4" />
            View on GitHub
          </a>
        </div>
      </div>

      {/* Project Header */}
      <section className="py-12 md:py-24 px-8 md:px-12 border-b border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <span className="font-mono text-xs text-muted-foreground tracking-widest">{project.year}</span>
          <h1 className="font-sans text-5xl md:text-7xl font-light tracking-tight mt-4 mb-6">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs tracking-wider px-3 py-1 rounded-full border border-white/20 text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Project Gallery */}
      <section className="py-24 px-8 md:px-12 border-b border-white/10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="font-sans text-3xl md:text-4xl font-light italic mb-12">Project Gallery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-64 md:h-72 rounded-2xl overflow-hidden border border-white/10 hover:border-accent/50 transition-colors duration-300"
              >
                <div className="relative w-full h-full bg-gradient-to-br from-white/5 to-white/1 flex items-center justify-center">
                  <div className="w-full h-full bg-white/5 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Image {index + 1}</p>
                      <p className="text-xs text-muted-foreground mt-1">Add your project screenshot here</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground mt-8 p-4 bg-white/5 border border-white/10 rounded-lg">
            💡 Replace the image paths in <code className="bg-white/10 px-2 py-1 rounded text-accent">lib/projects.ts</code> with your actual project screenshot URLs.
          </p>
        </motion.div>
      </section>

      {/* About Project */}
      <section className="py-24 px-8 md:px-12 border-b border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="font-sans text-3xl md:text-4xl font-light italic mb-8">About This Project</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {project.about}
              </p>
              <p className="text-sm text-muted-foreground italic">
                Word count: {project.about.split(" ").length} / 100 words
              </p>
            </div>

            <div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="font-sans text-xl font-light mb-6">Features</h3>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-accent mt-1">✓</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h2 className="font-sans text-3xl md:text-4xl font-light mb-8">Interested in this project?</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Check out the source code on GitHub or get in touch to discuss collaboration opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/20 rounded-full font-mono text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <Github className="w-4 h-4" />
              View Source Code
            </a>
            <Link
              href="/#contact"
              className="px-8 py-4 bg-white text-black rounded-full font-mono text-sm tracking-widest uppercase hover:bg-white/90 transition-all duration-300 flex items-center justify-center"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
