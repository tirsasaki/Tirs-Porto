import Hero from "@/components/home/hero"
import ProjectHighlights from "@/components/home/project-highlights"
import Stats from "@/components/home/stats"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#282a36]">
      <div className="container py-16 animate-fade-in">
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

