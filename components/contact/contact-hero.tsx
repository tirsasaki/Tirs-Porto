"use client"

import { motion } from "framer-motion"
import { Mail, MessageSquare } from "lucide-react"

export default function ContactHero() {
  return (
    <div className="text-center space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-block p-3 rounded-full bg-[#44475a]/30"
      >
        <Mail className="w-6 h-6 text-[#ff79c6]" />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold"
      >
        Let's{" "}
        <span className="bg-gradient-to-r from-[#ff79c6] to-[#bd93f9] bg-clip-text text-transparent">
          Connect
        </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-[#6272a4] max-w-2xl mx-auto"
      >
        Have a project in mind or just want to chat? I'd love to hear from you. 
        Let's create something amazing together.
      </motion.p>
    </div>
  )
}
