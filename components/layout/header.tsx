"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Code2, Coffee } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#6272a4]/40 bg-[#282a36]/95 backdrop-blur supports-[backdrop-filter]:bg-[#282a36]/60">
      <div className="container flex h-16 items-center justify-between md:justify-center relative">
        {/* Logo - Left on mobile, centered on desktop */}
        <Link href="/" className="flex items-center space-x-2 md:absolute md:left-4">
          <Code2 className="h-6 w-6 text-primary animate-pulse-slow" />
          <span className="font-bold inline-block text-lg">Tirsasaki</span>
        </Link>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#ff79c6]",
                pathname === link.href ? "text-[#ff79c6]" : "text-[#6272a4]"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Ko-fi Button - Right */}
        <div className="md:absolute md:right-4">
          <Button
            variant="ghost"
            size="sm"
            className="hidden md:flex items-center gap-2 text-[#6272a4] hover:text-[#ff79c6] transition-colors"
            asChild
          >
            <a
              href="https://ko-fi.com/tirsasaki"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Coffee className="h-4 w-4" />
              <span className="text-sm">Buy me a coffee</span>
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 md:hidden"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-[#6272a4]" />
          ) : (
            <Menu className="h-6 w-6 text-[#6272a4]" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#282a36] border-b animate-fade-in">
          <nav className="container py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[#ff79c6] py-2",
                  pathname === link.href ? "text-[#ff79c6]" : "text-[#6272a4]"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Ko-fi Button in Mobile Menu */}
            <a
              href="https://ko-fi.com/tirsasaki"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-[#6272a4] hover:text-[#ff79c6] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Coffee className="h-4 w-4" />
              Buy me a coffee
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

