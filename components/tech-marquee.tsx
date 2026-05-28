const techItems = [
  "REACT",
  "TYPESCRIPT",
  "JAVASCRIPT",
  "TAILWIND CSS",
  "NODE.JS",
  "EXPRESS.JS",
  "MONGODB",
  "POSTGRESQL",
  "GIT",
  "GITHUB",
]

const concepts = [
  "FRONTEND",
  "BACKEND",
  "DATABASE",
  "MERN STACK",
  "REST API",
  "RESPONSIVE",
  "UI/UX",
  "VERSION CONTROL",
  "FULL STACK",
  "WEB DEV",
]

function MarqueeRow({ items, direction = "left" }: { items: string[]; direction?: "left" | "right" }) {
  const duplicatedItems = [...items, ...items]

  return (
    <div className="relative overflow-hidden py-4">
      <div
        className={`flex gap-8 ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
        style={{ width: "fit-content" }}
      >
        {duplicatedItems.map((item, index) => (
          <span
            key={index}
            className="font-sans text-5xl md:text-7xl lg:text-8xl font-light tracking-tight whitespace-nowrap cursor-default text-white/30 transition-colors duration-300 hover:text-white"
          >
            {item}
            <span className="mx-8 text-white/20">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export function TechMarquee() {
  return (
    <section className="relative py-24 overflow-hidden md:py-32">
      <div className="px-8 md:px-12 mb-12">
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">05 — TECHNICAL ARSENAL</p>
      </div>

      <div className="space-y-4">
        <MarqueeRow items={techItems} direction="left" />
        <MarqueeRow items={concepts} direction="right" />
      </div>
    </section>
  )
}
