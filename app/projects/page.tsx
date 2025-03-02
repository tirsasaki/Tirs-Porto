import { Suspense } from "react"
import ProjectsList from "@/components/projects/projects-list"
import ProjectsLoading from "@/components/projects/projects-loading"
import GithubStats from "@/components/projects/github-stats"
import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: "Projects | Tirsasaki",
  description: "Explore my portfolio of projects and GitHub repositories",
}

export default function ProjectsPage() {
  return (
    <div className="container py-12 animate-fade-in">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
        Browse through my latest projects and GitHub repositories. Each project represents a unique challenge and
        solution I've worked on.
      </p>

      <GithubStats />

      <Separator className="my-12" />

      <Suspense fallback={<ProjectsLoading />}>
        <ProjectsList />
      </Suspense>
    </div>
  )
}

