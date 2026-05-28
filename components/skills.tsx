"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiJavascript,
  SiGit,
  SiGithub,
  SiPostgresql,
} from "react-icons/si"

interface Skill {
  name: string
  level: number
  icon: React.ComponentType<React.ComponentProps<"svg">>
}

interface SkillCategory {
  title: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95, icon: SiReact },
      { name: "TypeScript", level: 88, icon: SiTypescript },
      { name: "JavaScript", level: 95, icon: SiJavascript },
      { name: "Tailwind CSS", level: 92, icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85, icon: SiNodedotjs },
      { name: "Express.js", level: 82, icon: SiExpress },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", level: 85, icon: SiMongodb },
      { name: "PostgreSQL", level: 78, icon: SiPostgresql },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 90, icon: SiGit },
      { name: "GitHub", level: 92, icon: SiGithub },
    ],
  },
]

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const Icon = skill.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:border-accent/50 transition-colors duration-300"
          >
            <Icon className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
          </motion.div>
          <span className="font-mono text-sm tracking-wide text-foreground">{skill.name}</span>
        </div>
        <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-linear-to-r from-accent to-accent/50 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </motion.div>
  )
}

function SkillCard({ category, categoryIndex }: { category: SkillCategory; categoryIndex: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
      className="relative p-6 md:p-8 rounded-2xl bg-white/2 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-colors duration-500"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-accent/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <h3 className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-6 uppercase">{category.title}</h3>

      <div className="space-y-6 relative z-10">
        {category.skills.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24 px-8 md:px-12">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">05 — EXPERTISE</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic">Technical Arsenal</h2>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {skillCategories.map((category, index) => (
          <SkillCard key={category.title} category={category} categoryIndex={index} />
        ))}
      </div>

      {/* Decorative Element */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mt-16 h-px bg-linear-to-r from-transparent via-white/20 to-transparent origin-left"
      />
    </section>
  )
}
