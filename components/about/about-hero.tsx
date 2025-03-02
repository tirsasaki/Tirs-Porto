"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Github, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutHero() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/tirsasaki",
      icon: Github,
      style: "bg-[#282a36] hover:bg-[#44475a] text-white"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/tirsasaki",
      icon: Twitter,
      style: "bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 text-[#1DA1F2]"
    }
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="space-y-2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#ff79c6] to-[#bd93f9] bg-clip-text text-transparent"
          >
            Hi, I'm Tirsasaki
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-[#6272a4]"
          >
            Frontend Developer & UI/UX Enthusiast
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="prose prose-dracula max-w-none space-y-4 text-[#6272a4]"
        >
          <p>
            👋 Welcome! I'm a passionate frontend developer from Indonesia, focused on creating beautiful and functional web experiences.
          </p>
          <p>
            🚀 With {new Date().getFullYear() - 2018}+ years of experience, I specialize in React, Next.js, and modern web technologies.
          </p>
          <p>
            💻 I love building user-friendly interfaces and solving complex problems with clean, efficient code.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex gap-4"
        >
          {socialLinks.map((link) => (
            <Button
              key={link.name}
              variant="ghost"
              size="lg"
              className={`${link.style} rounded-xl group`}
              asChild
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Follow on {link.name}</span>
              </a>
            </Button>
          ))}
        </motion.div>
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
