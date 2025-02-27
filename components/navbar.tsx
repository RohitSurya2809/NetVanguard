"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/#features" },
  { name: "Block Diagram", href: "/#block-diagram" },
  { name: "Tools", href: "/#tools" },
  { name: "Use Cases", href: "/#use-cases" },
  { name: "Technology", href: "/#technology" },
  { name: "Contact", href: "/#contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogOut = () => {
    setIsLoggedIn(false)
    setUsername("")
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="md:hidden" />
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="font-bold text-primary-foreground">N</span>
            </div>
            <span className="font-poppins font-bold text-xl">NetVanguard</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <span>Welcome, {username}</span>
              <Button onClick={handleLogOut}>Log Out</Button>
            </>
          ) : (
            <Button onClick={() => alert('Please implement auth first')}>Sign In</Button>
          )}
          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md shadow-md p-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors p-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button className="mt-2">Get Started</Button>
          </nav>
        </div>
      )}
    </header>
  )
}
