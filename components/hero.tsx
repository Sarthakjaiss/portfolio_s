"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { SentientSphere } from "./sentient-sphere"
import { Github, Linkedin, Twitter, ChevronDown } from "lucide-react"

const roles = [
  "MERN Stack Developer",
  "Full Stack Developer",
  "Frontend Developer",
  "React Developer",
]

const socialLinks = [
  { icon: Github, href: "https://github.com/Sarthakjaiss", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sarthak-jaiswal-a0321a244", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
]

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  // Typing effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    const typingSpeed = isDeleting ? 30 : 80
    const pauseTime = 2000

    if (!isDeleting && displayedText === currentRole) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && displayedText === "") {
      setIsDeleting(false)
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
      return
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1))
      } else {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1))
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentRoleIndex])

  const scrollToProjects = () => {
    const element = document.getElementById("works")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#050505] pt-16 md:pt-20"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.03), transparent 25%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.02), transparent 15%)",
      }}
    >
      {/* 3D Sphere Background - constrained to right half on larger screens */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 pointer-events-none opacity-70">
        <SentientSphere />
      </div>

      {/* Typography Overlay (two-column on md+) */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 h-full grid grid-cols-1 md:grid-cols-2 items-center p-8 md:p-12 md:px-12 md:py-20 gap-6"
      >
        {/* Top Left - Name & Role */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-6 md:mb-0"
        >
          <p className="font-mono text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] text-muted-foreground mb-2">HELLO, I&apos;M</p>
          <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-balance mb-4">
            <span className="bg-linear-to-r from-white via-white to-accent bg-clip-text text-transparent">
              Sarthak Jaiswal
            </span>
          </h1>
          <div className="font-mono text-sm md:text-base text-muted-foreground h-6">
            <span className="text-accent">&gt; </span>
            {displayedText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
              className="inline-block w-2 h-4 bg-accent ml-1"
            />
          </div>
        </motion.div>

        {/* Center - CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col md:flex-row gap-4 mt-6 md:mt-8 self-center md:self-start mb-8 md:mb-0 z-20"
        >
          <motion.button
            data-cursor-hover
            onClick={scrollToProjects}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-4 border border-white/20 rounded-full font-mono text-sm tracking-widest uppercase bg-transparent backdrop-blur-sm hover:bg-white hover:text-black transition-colors duration-500"
          >
            View Projects
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse" />
          </motion.button>
          <motion.a
            href="/resume-sarthak-jaiswal.pdf"
            download
            data-cursor-hover
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-black rounded-full font-mono text-sm tracking-widest uppercase hover:bg-accent transition-colors duration-500 text-center"
          >
            Download Resume
          </motion.a>
        </motion.div>

        {/* Bottom Right - Discipline */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-center md:items-end text-center md:text-right self-center"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-2">CRAFT</p>
          <h2 className="font-sans text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-balance leading-tight">
            MERN STACK
            <br />
            <span className="italic">DEVELOPER</span>
          </h2>
        </motion.div>

        {/* Social Media Icons - Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute left-8 md:left-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              data-cursor-hover
              whileHover={{ scale: 1.2, x: 5 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}
