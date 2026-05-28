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
  {
    title: "Web Development Course",
    issuer: "Udemy",
    date: "2024",
  },
]

function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <div className="group relative h-full">
      <div className="relative flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/2 p-6 md:p-8 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4 gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 border border-accent/20">
              <Award className="w-6 h-6 text-accent" />
            </div>
            <span className="font-mono text-xs text-muted-foreground">{cert.date}</span>
          </div>

          <h3 className="font-sans text-xl md:text-2xl font-light mb-2 text-foreground group-hover:text-white transition-colors duration-300">
            {cert.title}
          </h3>
          <p className="font-mono text-sm text-muted-foreground">{cert.issuer}</p>
        </div>
      </div>
    </div>
  )
}

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
      <div className="px-8 md:px-12 mb-10">
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">06 — CREDENTIALS</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic">Certifications</h2>
      </div>

      <div className="grid gap-6 px-8 md:px-12 md:grid-cols-2 xl:grid-cols-3">
        {certifications.map((cert) => (
          <CertificationCard key={cert.title} cert={cert} />
        ))}
      </div>

      <div className="mt-16 mx-8 md:mx-12 h-px bg-linear-to-r from-transparent via-white/20 to-transparent origin-left" />
    </section>
  )
}
