import { ArrowUpRight } from "lucide-react"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative">
      <a href="mailto:sarthakjaiswal91@gmail.com" className="group relative block overflow-hidden">
        <div className="absolute inset-0 bg-[#2563eb] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />

        <div className="relative py-16 md:py-24 px-8 md:px-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <h2 className="font-sans text-4xl md:text-6xl lg:text-8xl font-light tracking-tight text-center md:text-left text-white transition-colors duration-300 group-hover:text-black">
              Let's <span className="italic">Collaborate</span>
            </h2>

            <div className="transition-transform duration-300 group-hover:rotate-45 text-white group-hover:text-black">
              <ArrowUpRight className="w-12 h-12 md:w-16 md:h-16" />
            </div>
          </div>
        </div>
      </a>

      <div className="px-8 md:px-12 py-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs tracking-widest text-muted-foreground">
            <span className="mr-2">LOCAL TIME</span>
            <span className="text-white tabular-nums">{year}</span>
          </div>

          <div className="flex gap-8">
            <a
              href="https://github.com/Sarthakjaiss/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="font-mono text-xs tracking-widest text-muted-foreground hover:text-white transition-colors duration-300"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sarthak-jaiswal-a0321a244/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="font-mono text-xs tracking-widest text-muted-foreground hover:text-white transition-colors duration-300"
            >
              LinkedIn
            </a>
          </div>

          <p className="font-mono text-xs tracking-widest text-muted-foreground">© {year}</p>
        </div>
      </div>
    </footer>
  )
}
