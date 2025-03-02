import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function ProjectsLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="bg-[#44475a]/20 rounded-lg overflow-hidden animate-pulse"
        >
          <div className="aspect-video bg-[#44475a]/40" />
          <div className="p-4 space-y-3">
            <div className="h-6 bg-[#44475a]/40 rounded w-3/4" />
            <div className="h-4 bg-[#44475a]/40 rounded w-full" />
            <div className="h-4 bg-[#44475a]/40 rounded w-5/6" />
            <div className="flex gap-2 pt-2">
              <div className="h-6 bg-[#44475a]/40 rounded w-16" />
              <div className="h-6 bg-[#44475a]/40 rounded w-16" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

