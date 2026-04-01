"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { Phone, CheckCircle2, ChevronDown, AlertTriangle } from "lucide-react"
import { services, type Service } from "@/lib/services-data"

function ServiceCircle({
  service,
  isActive,
  onClick,
}: {
  service: Service
  isActive: boolean
  onClick: () => void
}) {
  const isEmergency = service.id === "emergency"

  return (
    <button
      onClick={onClick}
      aria-expanded={isActive}
      className="group flex flex-col items-center gap-3 focus:outline-none"
    >
      {/* Circle */}
      <div
        className={`
          relative h-28 w-28 sm:h-32 sm:w-32 rounded-full overflow-hidden border-4 transition-all duration-300
          ${isEmergency
            ? isActive
              ? "border-red-500 shadow-[0_0_24px_rgba(239,68,68,0.6)] scale-105"
              : "border-red-500/50 shadow-[0_0_12px_rgba(239,68,68,0.3)] group-hover:border-red-400 group-hover:scale-105"
            : isActive
            ? "border-[#00e676] shadow-[0_0_24px_rgba(0,230,118,0.5)] scale-105"
            : "border-border/60 group-hover:border-[#00e676]/70 group-hover:shadow-[0_0_14px_rgba(0,230,118,0.25)] group-hover:scale-105"
          }
        `}
      >
        {service.images.length > 0 ? (
          <Image
            src={service.images[0]}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="128px"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-red-950">
            <AlertTriangle className="h-12 w-12 text-red-400" />
          </div>
        )}
        {/* Overlay tint when active */}
        {isActive && (
          <div className={`absolute inset-0 ${isEmergency ? "bg-red-500/20" : "bg-[#00e676]/10"}`} />
        )}
      </div>

      {/* Label */}
      <span
        className={`text-center text-sm font-medium leading-tight transition-colors
          ${isActive
            ? isEmergency ? "text-red-400" : "text-[#00e676]"
            : "text-foreground/80 group-hover:text-foreground"
          }
        `}
      >
        {service.title}
      </span>

      {/* Chevron indicator */}
      <ChevronDown
        className={`h-4 w-4 transition-all duration-300
          ${isActive ? "rotate-180 opacity-100" : "opacity-0 group-hover:opacity-60"}
          ${isActive
            ? isEmergency ? "text-red-400" : "text-[#00e676]"
            : "text-foreground/60"
          }
        `}
      />
    </button>
  )
}

function ExpandedPanel({ service, onClose }: { service: Service; onClose: () => void }) {
  const isEmergency = service.id === "emergency"
  const accent = isEmergency ? "text-red-400" : "text-[#00e676]"
  const borderAccent = isEmergency ? "border-red-500/30" : "border-[#00e676]/30"
  const bgAccent = isEmergency ? "bg-red-950/30" : "bg-[#00e676]/5"

  return (
    <div className="mt-2 overflow-hidden rounded-2xl border border-border/50 bg-card shadow-xl">
      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className={`text-xs font-semibold uppercase tracking-widest ${accent}`}>
              {isEmergency ? "24/7 Available" : "Our Services"}
            </span>
            <h3 className="mt-1 text-2xl font-bold text-foreground sm:text-3xl">
              {service.subtitle}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 rounded-full border border-border/60 p-2 text-foreground/60 transition hover:border-foreground/40 hover:text-foreground"
            aria-label="Close"
          >
            <ChevronDown className="h-5 w-5 rotate-180" />
          </button>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          {/* Left column — description + included + CTA */}
          <div className="space-y-6">
            {/* Description */}
            <div className="space-y-3">
              {service.description.map((para, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Included */}
            <div className={`rounded-xl border ${borderAccent} ${bgAccent} p-5`}>
              <h4 className={`text-sm font-semibold uppercase tracking-wider ${accent} mb-3`}>
                {isEmergency ? "Why call us" : "What's included"}
              </h4>
              <ul className="space-y-2">
                {service.included.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className={`h-4 w-4 flex-shrink-0 mt-0.5 ${accent}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ideal for */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">
                {isEmergency ? "We respond to" : "Ideal for"}
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.idealFor.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border/60 bg-muted px-3 py-1 text-xs text-foreground/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3 sm:flex-row">
              {isEmergency ? (
                <a
                  href="tel:07767848827"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-500 active:scale-95"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
                  </span>
                  <Phone className="h-5 w-5" />
                  Call Now — 07767 848827
                </a>
              ) : (
                <>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#00e676] to-[#a8ff35] px-6 py-3 font-semibold text-black transition hover:opacity-90 active:scale-95"
                  >
                    {service.ctaText}
                  </a>
                  <a
                    href="tel:07767848827"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-border/60 px-6 py-3 text-sm font-medium text-foreground/80 transition hover:border-foreground/40 hover:text-foreground"
                  >
                    <Phone className="h-4 w-4" />
                    07767 848827
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Right column — image gallery */}
          {service.images.length > 0 && (
            <div>
              {/* Main image */}
              <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                <Image
                  src={service.images[0]}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Thumbnail strip */}
              {service.images.length > 1 && (
                <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
                  {service.images.slice(1).map((img, i) => (
                    <div
                      key={i}
                      className="relative h-20 w-28 flex-shrink-0 overflow-hidden rounded-lg border border-border/40"
                    >
                      <Image
                        src={img}
                        alt={`${service.title} ${i + 2}`}
                        fill
                        className="object-cover"
                        sizes="112px"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Why choose us */}
              {service.whyChooseUs.length > 0 && (
                <div className="mt-5">
                  <h4 className="text-sm font-semibold text-foreground mb-3">
                    {isEmergency ? "Pricing" : "Why choose us"}
                  </h4>
                  <ul className="space-y-1.5">
                    {service.whyChooseUs.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${isEmergency ? "bg-red-400" : "bg-[#00e676]"}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Emergency — right side (no images, show why choose us full width) */}
          {service.images.length === 0 && (
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">Pricing</h4>
              <ul className="space-y-2">
                {service.whyChooseUs.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export function ServicesSection() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  function handleServiceClick(id: string) {
    if (activeId === id) {
      setActiveId(null)
      return
    }
    setActiveId(id)
    // Smooth scroll to panel after state update
    setTimeout(() => {
      panelRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" })
    }, 50)
  }

  const activeService = services.find((s) => s.id === activeId) ?? null

  return (
    <section id="services" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tap any service to learn more. We provide comprehensive plumbing, heating, and gas services across London.
          </p>
        </div>

        {/* Circular service icons */}
        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 lg:grid-cols-4 place-items-center">
          {services.map((service) => (
            <ServiceCircle
              key={service.id}
              service={service}
              isActive={activeId === service.id}
              onClick={() => handleServiceClick(service.id)}
            />
          ))}
        </div>

        {/* Expanded detail panel */}
        <div ref={panelRef} className="mt-6">
          {activeService && (
            <div
              className="transition-all duration-300 ease-in-out"
              style={{ animation: "expandIn 0.25s ease-out" }}
            >
              <ExpandedPanel
                service={activeService}
                onClose={() => setActiveId(null)}
              />
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes expandIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
