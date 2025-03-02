"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Copy, Check, Github, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export default function Hero() {
  const [copied, setCopied] = useState(false)

  const copyGithub = () => {
    navigator.clipboard.writeText("github.com/tirsasaki")
    setCopied(true)
    toast.success("GitHub username copied!")
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative">
      <div className="pt-12 pb-8 md:pt-20 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-6"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl p-4 mb-8"
          >
            <Code2 className="w-full h-full text-primary" />
          </motion.div>

          {/* Title & Subtitle */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                Hi, I'm Tirsasaki
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                Frontend Developer
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Building modern web experiences with attention to detail and performance
            </p>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center pt-8"
          >
            <Button 
              size="lg" 
              className="group font-medium bg-[#ff79c6] hover:bg-[#ff79c6]/90" 
              asChild
            >
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
              </a>
            </Button>

            <Button 
              variant="outline" 
              size="lg" 
              className="group relative font-medium border-[#6272a4] hover:bg-[#44475a]/50"
              onClick={copyGithub}
            >
              <Github className="mr-2 h-5 w-5" />
              github.com/tirsasaki
              {copied ? (
                <Check className="ml-2 h-4 w-4 text-[#50fa7b]" />
              ) : (
                <Copy className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition" />
              )}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

