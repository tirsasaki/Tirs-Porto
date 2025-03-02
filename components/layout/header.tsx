"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Code2 } from "lucide-react"
import { cn } from "@/lib/utils"

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
          </nav>
        </div>
      )}
    </header>
  )
}

