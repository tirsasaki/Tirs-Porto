import Hero from "@/components/home/hero"
import ProjectHighlights from "@/components/home/project-highlights"
import Stats from "@/components/home/stats"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#282a36]">
      <div className="container py-16 animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-transparent opacity-50 pointer-events-none" />
          <div className="relative">
            <Hero />
            <Separator className="my-16" />
            <Stats />
            <Separator className="my-16" />
            <ProjectHighlights />
          </div>
      </div>
    </div>
  )
}

