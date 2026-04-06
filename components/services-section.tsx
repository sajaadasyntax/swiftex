"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, CheckCircle2, X, AlertTriangle, ChevronLeft, ChevronRight } from "lucide-react"
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
      aria-label={`View ${service.title} details`}
      className="group flex flex-col items-center gap-3 focus:outline-none"
    >
      {/* Circle */}
      <div
        className={`
          relative h-28 w-28 sm:h-32 sm:w-32 rounded-full overflow-hidden border-4 transition-all duration-300
          ${isEmergency
            ? isActive
              ? "border-red-500 shadow-lg shadow-red-200 scale-105"
              : "border-red-300 group-hover:border-red-500 group-hover:scale-105 group-hover:shadow-md group-hover:shadow-red-100"
            : isActive
            ? "border-primary shadow-lg shadow-primary/20 scale-105"
            : "border-border group-hover:border-primary/60 group-hover:scale-105 group-hover:shadow-md group-hover:shadow-primary/10"
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
          <div className="h-full w-full flex items-center justify-center bg-red-50">
            <AlertTriangle className="h-12 w-12 text-red-500" />
          </div>
        )}
        {isActive && (
          <div className={`absolute inset-0 ${isEmergency ? "bg-red-500/10" : "bg-primary/10"}`} />
        )}
      </div>

      {/* Label */}
      <span
        className={`text-center text-sm font-medium leading-tight transition-colors max-w-[120px]
          ${isActive
            ? isEmergency ? "text-red-600" : "text-primary"
            : "text-foreground/80 group-hover:text-foreground"
          }
        `}
      >
        {service.title}
      </span>
    </button>
  )
}

function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  const [activeIdx, setActiveIdx] = useState(0)
  const isEmergency = service.id === "emergency"
  const accentText = isEmergency ? "text-red-600" : "text-primary"
  const accentBg = isEmergency ? "bg-red-50 border-red-200" : "bg-muted border-border"
  const checkColor = isEmergency ? "text-red-500" : "text-secondary"

  // Close on Escape key
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
  }, [onClose])

  const images = service.images

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      {/* Modal panel */}
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full border border-border bg-background p-2 text-muted-foreground transition hover:text-foreground hover:border-foreground/40"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="mb-6">
            <span className={`text-xs font-semibold uppercase tracking-widest ${accentText}`}>
              {isEmergency ? "24/7 Available" : "Service Details"}
            </span>
            <h3 className="mt-1 text-2xl font-bold text-foreground sm:text-3xl pr-10">
              {service.subtitle}
            </h3>
          </div>

          {/* Body — image left, text right */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">

            {/* Left — image gallery */}
            {images.length > 0 ? (
              <div className="order-1 lg:order-1">
                {/* Main image */}
                <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border">
                  <Image
                    src={images[activeIdx]}
                    alt={`${service.title} — image ${activeIdx + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Prev/Next arrows if multiple images */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={() => setActiveIdx((i) => (i - 1 + images.length) % images.length)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 shadow transition hover:bg-white"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="h-4 w-4 text-foreground" />
                      </button>
                      <button
                        onClick={() => setActiveIdx((i) => (i + 1) % images.length)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 shadow transition hover:bg-white"
                        aria-label="Next image"
                      >
                        <ChevronRight className="h-4 w-4 text-foreground" />
                      </button>
                    </>
                  )}
                </div>
                {/* Thumbnails */}
                {images.length > 1 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIdx(i)}
                        className={`relative h-16 w-20 overflow-hidden rounded-lg border-2 transition-all
                          ${i === activeIdx ? "border-primary shadow-sm" : "border-border hover:border-primary/50"}
                        `}
                        aria-label={`View image ${i + 1}`}
                      >
                        <Image
                          src={img}
                          alt={`${service.title} thumbnail ${i + 1}`}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              /* Emergency — no image, show callout card */
              <div className="order-1 lg:order-1 flex flex-col gap-4">
                <div className="rounded-xl border border-red-200 bg-red-50 p-8 text-center">
                  <AlertTriangle className="mx-auto h-14 w-14 text-red-500 mb-4" />
                  <p className="text-base font-semibold text-red-700">Emergency — Any time, day or night</p>
                  <p className="mt-1 text-sm text-red-600/80">Call us immediately for fast response</p>
                  <a
                    href="tel:07767848827"
                    className="mt-5 inline-flex items-center gap-2 rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-500 transition"
                  >
                    <Phone className="h-4 w-4" />
                    07767 848827
                  </a>
                </div>
              </div>
            )}

            {/* Right — description + lists + CTA */}
            <div className="order-2 lg:order-2 space-y-5">
              <div className="space-y-3">
                {service.description.map((para, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed text-sm sm:text-base">{para}</p>
                ))}
              </div>

              {/* Included */}
              <div className={`rounded-xl border p-4 ${accentBg}`}>
                <h4 className={`text-xs font-semibold uppercase tracking-wider ${accentText} mb-3`}>
                  {isEmergency ? "Why call us" : "What's included"}
                </h4>
                <ul className="space-y-2">
                  {service.included.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className={`h-4 w-4 shrink-0 mt-0.5 ${checkColor}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal for */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/60 mb-3">
                  {isEmergency ? "We respond to" : "Ideal for"}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.idealFor.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Why choose us */}
              {service.whyChooseUs.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/60 mb-2">
                    {isEmergency ? "Pricing" : "Why choose us"}
                  </h4>
                  <ul className="space-y-1.5">
                    {service.whyChooseUs.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${isEmergency ? "bg-red-400" : "bg-secondary"}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA */}
              <div className="flex flex-col gap-3 sm:flex-row pt-2">
                {isEmergency ? (
                  <a
                    href="tel:07767848827"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-500 active:scale-95"
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
                    <Link
                      href="#contact"
                      onClick={onClose}
                      className="inline-flex items-center justify-center gap-2 rounded-md bg-secondary px-6 py-3 font-semibold text-secondary-foreground transition hover:bg-secondary/90 active:scale-95"
                    >
                      {service.ctaText}
                    </Link>
                    <a
                      href="tel:07767848827"
                      className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground/80 transition hover:border-foreground/40 hover:text-foreground"
                    >
                      <Phone className="h-4 w-4" />
                      07767 848827
                    </a>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export function ServicesSection() {
  const [activeId, setActiveId] = useState<string | null>(null)

  function handleServiceClick(id: string) {
    setActiveId(id)
  }

  function handleClose() {
    setActiveId(null)
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
        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 place-items-center">
          {services.map((service) => (
            <ServiceCircle
              key={service.id}
              service={service}
              isActive={activeId === service.id}
              onClick={() => handleServiceClick(service.id)}
            />
          ))}
        </div>
      </div>

      {/* Modal popup */}
      {activeService && (
        <ServiceModal service={activeService} onClose={handleClose} />
      )}
    </section>
  )
}
