"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

export default function MinimalContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Handle form submission
    setTimeout(() => setIsSubmitting(false), 1000)
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="space-y-6 max-w-xl mx-auto"
    >
      <Input
        type="email"
        placeholder="Your email"
        required
        className="bg-[#282a36] border-none text-[#f8f8f2] text-lg p-6"
      />
      <Textarea
        placeholder="Your message"
        required
        className="min-h-[200px] bg-[#282a36] border-none text-[#f8f8f2] text-lg p-6 resize-none"
      />
      <Button 
        type="submit"
        className="w-full bg-[#bd93f9] hover:bg-[#bd93f9]/90 text-lg py-6"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          "Sending..."
        ) : (
          <span className="flex items-center justify-center gap-2">
            Send Message
            <Send className="w-5 h-5" />
          </span>
        )}
      </Button>
    </motion.form>
  )
}
