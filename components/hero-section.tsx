import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Star, ShieldCheck, AlertTriangle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero-boiler.jpg"
          alt="Professional boiler installation"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          {/* Emergency badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-300/50 bg-red-500/20 px-4 py-1.5 text-sm font-semibold text-red-100">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-300 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-200" />
            </span>
            24/7 Emergency Plumbing Available
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            <span className="block">Boiler Problem?</span>
            <span className="mt-2 block text-secondary">We have it covered!</span>
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/90 leading-relaxed">
            Book your boiler in for a repair or service with Swiftfix Plumbing Ltd. Our Gas Safe registered engineers are available 24/7 for all your plumbing, heating, and gas needs across London.
          </p>

          {/* Trust signals */}
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-primary-foreground/70">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-secondary" />
              Gas Safe Registered
            </span>
            <span className="flex items-center gap-1.5">
              <AlertTriangle className="h-4 w-4 text-red-300" />
              Emergency Call Out: £70
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="h-4 w-4 text-secondary" />
              Fast Response
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            {/* Emergency CTA */}
            <a
              href="tel:07767848827"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-red-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-red-500 active:scale-95"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
              </span>
              Emergency? Call Now
              <Phone className="h-5 w-5" />
            </a>
            {/* General CTA */}
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              asChild
            >
              <Link href="#contact">Free Estimate</Link>
            </Button>
          </div>

          {/* Review Snippet */}
          <div className="mt-12 rounded-lg bg-card p-6 shadow-lg">
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
              ))}
            </div>
            <p className="text-foreground italic leading-relaxed">
              &quot;SwiftFix provided excellent communication before and during the visit. They also made a courtesy follow-up to ensure everything was working perfectly.&quot;
            </p>
            <p className="mt-3 text-sm font-semibold text-primary">— Sarah M, London</p>
          </div>
        </div>
      </div>
    </section>
  )
}
