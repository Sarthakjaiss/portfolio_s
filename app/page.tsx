import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Works } from "@/components/works"
import { Certifications } from "@/components/certifications"
import { Contact } from "@/components/contact"
import { TechMarquee } from "@/components/tech-marquee"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"
import { SectionBlend } from "@/components/section-blend"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <SectionBlend />
        <section id="about">
          <About />
        </section>
        <Skills />
        <Works />
        <Certifications />
        <TechMarquee />
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  )
}
