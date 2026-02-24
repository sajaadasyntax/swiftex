import { Flame, Wrench, Droplets, ThermometerSun, ShieldCheck, Clock } from "lucide-react"

const services = [
  {
    icon: Flame,
    title: "Boiler Installation",
    description: "Expert installation of new boilers from trusted brands including Worcester Bosch, Vaillant, and Baxi.",
  },
  {
    icon: Wrench,
    title: "Boiler Repairs",
    description: "Fast, reliable repairs for all boiler makes and models. No fix, no fee guarantee.",
  },
  {
    icon: ThermometerSun,
    title: "Central Heating",
    description: "Full central heating installations, radiator fitting, and system upgrades.",
  },
  {
    icon: Droplets,
    title: "Plumbing Services",
    description: "Complete plumbing solutions from leak repairs to bathroom installations.",
  },
  {
    icon: ShieldCheck,
    title: "Gas Safety Checks",
    description: "Annual gas safety inspections and landlord certificates. CP12 certified.",
  },
  {
    icon: Clock,
    title: "Emergency Callouts",
    description: "24/7 emergency service for urgent heating and gas problems. Fast response times.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our experienced engineers make difficult work look easy. We provide comprehensive plumbing, heating, and gas services across London.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-border/60 bg-card p-8 shadow-sm transition-all hover:shadow-emerald-500/20 hover:shadow-lg hover:border-emerald-400/40 hover:-translate-y-0.5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-gradient-to-r group-hover:from-[#00e676] group-hover:to-[#a8ff35] group-hover:text-black transition-all">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
