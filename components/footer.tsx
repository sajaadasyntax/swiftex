import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card text-foreground border-t border-border/40">
      <div className="h-1 w-full bg-gradient-to-r from-[#00e676] to-[#a8ff35]" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Image
              src="/logo.jpeg"
              alt="SwiftFix Plumbing & Heating & Gas"
              width={140}
              height={50}
              className="h-12 w-auto"
            />
            <p className="mt-4 text-foreground/80 max-w-md leading-relaxed">
              SwiftFix is a Gas Safe registered company providing professional plumbing, heating, and gas services across London. Available 24/7 for all your emergency needs.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#services" className="text-foreground/80 hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#vision" className="text-foreground/80 hover:text-foreground transition-colors">
                  Our Vision
                </Link>
              </li>
              <li>
                <Link href="#director" className="text-foreground/80 hover:text-foreground transition-colors">
                  From the Director
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#services" className="text-foreground/80 hover:text-foreground transition-colors">
                  Boiler Installation
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-foreground/80 hover:text-foreground transition-colors">
                  Boiler Repairs
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-foreground/80 hover:text-foreground transition-colors">
                  Central Heating
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-foreground/80 hover:text-foreground transition-colors">
                  Gas Safety Checks
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} SwiftFix Plumbing & Heating & Gas. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
