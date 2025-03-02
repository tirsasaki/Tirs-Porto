import { Metadata } from "next"
import AboutHero from "@/components/about/about-hero"
import Skills from "@/components/about/skills"
import Journey from "@/components/about/journey"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "About | Tirsasaki",
  description: "Learn more about my journey, skills, and experiences as a frontend developer",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#282a36]">
      <div className="container py-16 animate-fade-in">
          <AboutHero />
          <Separator className="my-16" />
          <Skills />
          <Separator className="my-16" />
          <Journey />
      </div>
    </div>
  )
}

