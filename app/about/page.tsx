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
      <div className="px-4 md:px-8 lg:px-16 py-8 md:py-12 animate-fade-in">
        <div className="bg-gradient-to-b from-[#0d1117]/90 to-[#44475a]/90 rounded-xl p-6 md:p-8 lg:p-12 shadow-lg shadow-purple-500/5 relative overflow-hidden backdrop-blur-xl backdrop-saturate-150">
          <AboutHero />
          <Separator className="my-16" />
          <Skills />
          <Separator className="my-16" />
          <Journey />
        </div>
      </div>
    </div>
  )
}

