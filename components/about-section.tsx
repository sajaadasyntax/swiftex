import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

const whyChooseUs = [
  {
    title: "Quality Assured",
    description: "All work is carried out to the highest standards by fully qualified and Gas Safe registered engineers.",
  },
  {
    title: "Excellent Reputation",
    description: "We build our reputation through honest work, reliability, and customer satisfaction.",
  },
  {
    title: "Highly Experienced",
    description: "Years of hands-on experience in domestic plumbing and gas systems across London.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/engineer.jpg"
                alt="Swiftfix Plumbing engineer at work"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 rounded-xl bg-primary p-6 text-primary-foreground shadow-lg hidden sm:block">
              <p className="text-4xl font-bold">10+</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">About Us</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Swiftfix Plumbing Ltd — London&apos;s Trusted Plumbing & Gas Experts
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              We are a local plumbing and gas company based in London, with over a decade of combined industry experience. At Swiftfix Plumbing Ltd, we pride ourselves on delivering excellent customer service alongside high-quality workmanship on every job we undertake.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every visit is handled professionally and efficiently, reflecting our experience, attention to detail, and commitment to safety. We believe that trust, reliability, and clear communication are just as important as technical skill.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We are passionate about our trade and always aim to provide smart, reliable, and energy-efficient solutions for every repair, installation, or upgrade carried out in your property.
            </p>

            {/* Why Choose Us */}
            <div className="mt-8 space-y-4">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground">{item.title}</span>
                    <p className="text-sm text-muted-foreground mt-0.5">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild className="mt-8 bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link href="#services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
