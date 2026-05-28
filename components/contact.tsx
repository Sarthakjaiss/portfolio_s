"use client"

import { useState } from "react"
import { Send, Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", message: "" })

    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    { icon: Mail, label: "Email", value: "sarthakjaiswal91@gmail.com" },
    { icon: MapPin, label: "Location", value: "Lucknow, Uttar Pradesh" },
    { icon: Phone, label: "Phone", value: "+91 9336051527" },
  ]

  return (
    <section id="contact" className="relative py-24 px-8 md:px-12">
      <div className="mb-12">
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">07 — CONNECT</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic">Get In Touch</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        <div className="space-y-8">
          <p className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you. Let&apos;s create something extraordinary together.
          </p>

          <div className="space-y-6">
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-accent/50 transition-colors duration-300">
                  <info.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                </div>
                <div>
                  <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{info.label}</p>
                  <p className="font-sans text-foreground">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label htmlFor="name" className="font-mono text-xs tracking-wider text-muted-foreground uppercase mb-2 block">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-white/20 py-3 font-sans text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none transition-colors duration-300"
              placeholder="Your name"
            />
          </div>

          <div className="relative">
            <label htmlFor="email" className="font-mono text-xs tracking-wider text-muted-foreground uppercase mb-2 block">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-white/20 py-3 font-sans text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none transition-colors duration-300"
              placeholder="your@email.com"
            />
          </div>

          <div className="relative">
            <label htmlFor="message" className="font-mono text-xs tracking-wider text-muted-foreground uppercase mb-2 block">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full bg-transparent border-b border-white/20 py-3 font-sans text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none transition-colors duration-300 resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="relative w-full mt-8 px-8 py-4 border border-white/20 rounded-full font-mono text-sm tracking-widest uppercase bg-transparent hover:bg-white hover:text-black transition duration-300 transform disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 flex items-center justify-center gap-3"
          >
            {isSubmitting ? (
              <>
                <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : isSubmitted ? (
              <span className="text-green-500">Message Sent!</span>
            ) : (
              <>
                Send Message
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>

      <div className="mt-16 h-px bg-linear-to-r from-transparent via-white/20 to-transparent origin-left" />
    </section>
  )
}
