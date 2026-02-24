"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.jpeg"
              alt="SwiftFix Plumbing & Heating & Gas"
              width={160}
              height={60}
              className="h-14 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link href="#services" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              About Us
            </Link>
            <Link href="#vision" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Our Vision
            </Link>
            <Link href="#director" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              From the Director
            </Link>
            <Link href="#contact" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button variant="outline" size="sm" className="gap-2 bg-transparent border-border/60 hover:border-primary/60" asChild>
              <a href="tel:07767848827">
                <Phone className="h-4 w-4" />
                07767 848827
              </a>
            </Button>
            <Button
              size="sm"
              className="from-[#00e676] to-[#a8ff35] bg-gradient-to-r text-black hover:opacity-90"
              asChild
            >
              <Link href="#contact">Free Estimate</Link>
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              <Link href="#services" className="text-sm font-medium text-foreground transition-colors hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                Services
              </Link>
              <Link href="#about" className="text-sm font-medium text-foreground transition-colors hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                About Us
              </Link>
              <Link href="#vision" className="text-sm font-medium text-foreground transition-colors hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                Our Vision
              </Link>
              <Link href="#director" className="text-sm font-medium text-foreground transition-colors hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                From the Director
              </Link>
              <Link href="#contact" className="text-sm font-medium text-foreground transition-colors hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="outline" size="sm" className="w-full gap-2 bg-transparent border-border/60 hover:border-primary/60" asChild>
                  <a href="tel:07767848827">
                    <Phone className="h-4 w-4" />
                    07767 848827
                  </a>
                </Button>
                <Button size="sm" className="w-full from-[#00e676] to-[#a8ff35] bg-gradient-to-r text-black hover:opacity-90" asChild>
                  <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>Free Estimate</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
