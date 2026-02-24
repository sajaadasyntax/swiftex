import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[650px] overflow-hidden bg-gradient-to-b from-[#0a120e] to-[#080b09]">
      <div className="absolute inset-0">
        <Image
          src="/hero-boiler.jpg"
          alt="Professional boiler installation"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_10%,#00e67633,transparent_60%),radial-gradient(500px_circle_at_80%_0%,#a8ff3533,transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
            <span className="block text-white/90">Boiler Problem?</span>
            <span className="mt-2 block bg-gradient-to-r from-[#00e676] to-[#a8ff35] bg-clip-text text-transparent">
              We have it covered!
            </span>
          </h1>
          <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
            Book your boiler in for a repair or service with SwiftFix. Our Gas Safe registered engineers are available 24/7 for all your plumbing, heating, and gas needs.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="from-[#00e676] to-[#a8ff35] bg-gradient-to-r text-black hover:opacity-90 gap-2"
              asChild
            >
              <a href="tel:07767848827">
                <Phone className="h-5 w-5" />
                Call Us Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border/70 text-foreground hover:bg-white/5 bg-transparent"
              asChild
            >
              <a href="#contact">Free Estimate</a>
            </Button>
          </div>

          <div className="mt-12 rounded-lg bg-white/5 p-6 shadow-lg backdrop-blur border border-white/10">
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
              ))}
            </div>
            <p className="text-foreground/90 italic leading-relaxed">
              &quot;SwiftFix provided excellent communication before and during the visit. They also made a courtesy follow-up to ensure everything was working perfectly.&quot;
            </p>
            <p className="mt-3 text-sm font-semibold text-primary">— Sarah M, London</p>
          </div>
        </div>
      </div>
    </section>
  )
}
