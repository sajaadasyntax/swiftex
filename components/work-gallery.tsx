"use client"

import * as Dialog from "@radix-ui/react-dialog"
import Image from "next/image"
import { X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const workImages = [
  "WhatsApp Image 2026-02-24 at 22.04.33.jpeg",
  "WhatsApp Image 2026-02-24 at 22.04.34.jpeg",
  "WhatsApp Image 2026-02-24 at 22.04.34 (1).jpeg",
  "WhatsApp Image 2026-02-24 at 22.04.34 (2).jpeg",
  "WhatsApp Image 2026-02-24 at 22.04.35.jpeg",
  "WhatsApp Image 2026-02-24 at 22.04.35 (1).jpeg",
  "WhatsApp Image 2026-02-24 at 22.04.35 (2).jpeg",
  "WhatsApp Image 2026-02-24 at 22.04.36.jpeg",
  "WhatsApp Image 2026-02-24 at 22.04.36 (1).jpeg",
  "WhatsApp Image 2026-02-24 at 22.04.37.jpeg",
  "WhatsApp Image 2026-02-24 at 22.04.37 (1).jpeg",
  "WhatsApp Image 2026-02-24 at 22.04.37 (2).jpeg",
]

function altFromName(name: string) {
  return name
    .replace(/WhatsApp Image \d{4}-\d{2}-\d{2} at \d{2}\.\d{2}\.\d{2}/, "Work photo")
    .replace(/\(\d+\)/, "")
    .replace(/\.\w+$/, "")
    .trim()
}

export function WorkGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="work" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Project Gallery
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Real jobs completed by our engineers. Click any photo to view larger.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {workImages.map((name, i) => {
            const src = `/work/${name}`
            return (
              <button
                key={src}
                className={cn(
                  "group relative overflow-hidden rounded-xl border border-border/60 bg-card",
                  "shadow-sm transition-all hover:shadow-lg hover:shadow-emerald-500/20"
                )}
                onClick={() => setOpenIndex(i)}
                aria-label={`Open ${altFromName(name)}`}
              >
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute -inset-[2px] rounded-xl bg-gradient-to-r from-[#00e676] to-[#a8ff35] blur-[10px] opacity-40" />
                </div>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={src}
                    alt={altFromName(name)}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <Dialog.Root open={openIndex !== null} onOpenChange={(o) => !o && setOpenIndex(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
          {openIndex !== null && (
            <Dialog.Content
              className={cn(
                "fixed left-1/2 top-1/2 z-[60] w-[92vw] max-w-5xl -translate-x-1/2 -translate-y-1/2",
                "rounded-2xl border border-white/10 bg-card p-2 shadow-xl"
              )}
            >
              <button
                className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-foreground hover:bg-white/20 border border-white/15"
                onClick={() => setOpenIndex(null)}
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="relative aspect-[4/3]">
                <Image
                  src={`/work/${workImages[openIndex]}`}
                  alt={altFromName(workImages[openIndex])}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 92vw, 1200px"
                  priority
                />
              </div>
            </Dialog.Content>
          )}
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  )
}

