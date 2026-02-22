import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Star } from "lucide-react"

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
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            <span className="block">Boiler Problem?</span>
            <span className="mt-2 block text-secondary">We have it covered!</span>
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/90 leading-relaxed">
            Book your boiler in for a repair or service with SwiftFix. Our Gas Safe registered engineers are available 24/7 for all your plumbing, heating, and gas needs.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2" asChild>
              <a href="tel:07767848827">
                <Phone className="h-5 w-5" />
                Call Us Now
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent" asChild>
              <a href="#contact">Free Estimate</a>
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
