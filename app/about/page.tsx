import Experience from "@/components/about/experience"
import Skills from "@/components/about/skills"
import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
  return (
    <div className="container py-12 animate-fade-in">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
        I'm a passionate developer with a focus on creating elegant solutions to complex problems. My journey in tech
        has allowed me to work on diverse projects and expand my skill set.
      </p>

      <Separator className="my-12" />

      <Experience />

      <Separator className="my-12" />

      <Skills />
    </div>
  )
}

