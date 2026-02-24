"use client"

import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import type { EmblaOptionsType } from "embla-carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

type Slide = {
  src: string
  alt: string
}

const slides: Slide[] = [
  { src: "/placeholders/boiler.svg", alt: "Boiler installation" },
  { src: "/placeholders/radiator.svg", alt: "Radiator upgrade" },
  { src: "/placeholders/pipe.svg", alt: "Pipework repair" },
  { src: "/placeholders/thermostat.svg", alt: "Thermostat fitting" },
  { src: "/placeholders/wrench.svg", alt: "General plumbing" },
]

const options: EmblaOptionsType = {
  loop: true,
  align: "center",
  dragFree: false,
  skipSnaps: false,
}

export function GalleryCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    onSelect()
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  useEffect(() => {
    if (!emblaApi) return
    const id = setInterval(() => emblaApi.scrollNext(), 5000)
    return () => clearInterval(id)
  }, [emblaApi])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section id="gallery" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Recent Work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A quick look at the kind of jobs we handle every week across London.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y gap-6">
              {slides.map((slide, i) => (
                <div key={slide.src} className="min-w-0 flex-[0_0_85%] sm:flex-[0_0_70%] lg:flex-[0_0_55%]">
                  <div
                    className={cn(
                      "group relative overflow-hidden rounded-2xl border border-border/60 bg-card",
                      "shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20"
                    )}
                  >
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-[#00e676] to-[#a8ff35] blur-[10px] opacity-40" />
                    </div>
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        priority={i === 0}
                        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 70vw, 55vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center justify-between p-4">
                      <p className="text-foreground/90 font-medium">{slide.alt}</p>
                      <span className="text-xs text-foreground/60">
                        {i + 1} / {slides.length}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 hidden items-center justify-between px-2 sm:flex">
            <button
              onClick={scrollPrev}
              aria-label="Previous slide"
              className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur text-foreground hover:bg-white/20 border border-white/15 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next slide"
              className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur text-foreground hover:bg-white/20 border border-white/15 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={cn(
                  "h-2 w-2 rounded-full transition-all",
                  i === selectedIndex
                    ? "bg-gradient-to-r from-[#00e676] to-[#a8ff35] w-6"
                    : "bg-foreground/30 hover:bg-foreground/50"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
