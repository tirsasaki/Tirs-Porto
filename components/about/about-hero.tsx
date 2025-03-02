"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Github, Twitter } from "lucide-react"
import Link from "next/link"

export default function AboutHero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Badge className="bg-[#ff79c6]/10 text-[#ff79c6] mb-4 hover:bg-[#ff79c6]/20">About Me</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#ff79c6] to-[#bd93f9] bg-clip-text text-transparent">
          Passionate Frontend Developer
        </h1>
        <div className="space-y-4 text-[#6272a4]">
          <p>
            Hello! I'm Tirsasaki, a frontend developer based in Indonesia. I specialize in building modern web applications with a focus on user experience and performance.
          </p>
          <p>
            My journey in web development started in 2022, and since then, I've been constantly learning and adapting to new technologies. I believe in writing clean, maintainable code and creating intuitive user interfaces.
          </p>
          <p>
            When I'm not coding, you'll find me reading about new technologies, contributing to open-source projects, or enjoying a cup of coffee while solving coding challenges.
          </p>
          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <Link 
              href="https://github.com/tirsasaki" 
              target="_blank"
              className="text-[#6272a4] hover:text-[#ff79c6] transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link 
              href="https://twitter.com/tirsasaki" 
              target="_blank"
              className="text-[#6272a4] hover:text-[#ff79c6] transition-colors"
            >
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative aspect-square w-full max-w-md mx-auto lg:ml-auto rounded-2xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-[#ff79c6] to-[#bd93f9] rounded-2xl transform rotate-6 scale-95 opacity-30" />
        <Image
          src="/about/profile.jpg"
          alt="Profile"
          fill
          className="object-cover rounded-2xl"
          priority
        />
      </motion.div>
    </div>
  )
}
