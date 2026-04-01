import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Star, AlertTriangle, ShieldCheck } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[650px] overflow-hidden bg-linear-to-b from-[#0a120e] to-[#080b09]">
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
          {/* Emergency badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-4 py-1.5 text-sm font-semibold text-red-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
            </span>
            24/7 Emergency Plumbing Available
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
            <span className="block text-white/90">Boiler Problem?</span>
            <span className="mt-2 block bg-linear-to-r from-[#00e676] to-[#a8ff35] bg-clip-text text-transparent">
              We have it covered!
            </span>
          </h1>
          <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
            Book your boiler in for a repair or service with SwiftFix. Our Gas Safe registered engineers are available 24/7 for all your plumbing, heating, and gas needs across London.
          </p>

          {/* Trust signals */}
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-[#00e676]" />
              Gas Safe Registered
            </span>
            <span className="flex items-center gap-1.5">
              <AlertTriangle className="h-4 w-4 text-red-400" />
              Emergency Call Out: £70
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="h-4 w-4 text-[#00e676]" />
              Fast Response
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {/* Emergency CTA */}
            <a
              href="tel:07767848827"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-red-900/40 transition hover:bg-red-500 active:scale-95"
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
              className="from-[#00e676] to-[#a8ff35] bg-linear-to-r text-black hover:opacity-90 gap-2"
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
