// This is a mock implementation for demo purposes
// In a real application, you would use the GitHub API

export interface GithubProject {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string | null
  topics: string[]
  stars: number
  forks: number
  updatedAt: string
  featuredImage: string // Tambahan properti untuk gambar
  isPremium?: boolean
  price?: string
}

export async function fetchGithubProjects(): Promise<GithubProject[]> {
  // In a real implementation, this would fetch from GitHub API
  // For now, we'll return mock data

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return [
    {
      id: 1,
      name: "Kasa Blog Astro",
      description: "Kasa Blog is a modern and minimalistic blog website designed for sharing and distributing content seamlessly.",
      html_url: "https://github.com/tirsasaki/kasa-blog-astro.git",
      homepage: "https://kasa-blog.vercel.app/",
      topics: ["astro-js", "tailwind-css"],
      stars: 45,
      forks: 12,
      updatedAt: "2 weeks ago",
      featuredImage: "/projects/kasa.png",
      isPremium: false
    },
    {
      id: 2,
      name: "Luxury Tirs",
      description: "A modern and elegant personal branding website built with Next.js 14 and styled-components, featuring stunning animations and a responsive design.",
      html_url: "https://github.com/tirsasaki/Luxury-Tirs",
      homepage: "https://luxurytirs.netlify.app",
      topics: ["next-js", "tailwind-css"],
      stars: 32,
      forks: 8,
      updatedAt: "1 month ago",
      featuredImage: "/projects/luxurytirs.png"
    },
    // {
    //   id: 4,
    //   name: "Pro Dashboard",
    //   description: "Premium dashboard template with advanced analytics and admin features",
    //   html_url: "https://github.com/tirsasaki/pro-dashboard",
    //   homepage: "https://pro-dashboard.demo.com",
    //   topics: ["next-js", "typescript", "tailwind", "premium"],
    //   stars: 145,
    //   forks: 32,  
    //   updatedAt: "1 week ago",
    //   featuredImage: "/projects/pro-dashboard.png",
    //   isPremium: true,
    //   price: "$49"
    // }
  ]
}

export async function fetchGithubStats() {
  // In a real implementation, this would fetch from GitHub API
  // For now, we'll return mock data

  return {
    repositories: 40,
    stars: 234,
    forks: 56,
    contributions: 527,
  }
}

