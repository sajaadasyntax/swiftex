import { Phone, AlertTriangle, Clock, Shield, Zap } from "lucide-react"

const emergencyItems = [
  "Burst pipes",
  "Severe water leaks",
  "Ceiling leaks",
  "Flooding properties",
  "No water supply",
  "Overflowing toilets",
  "Major boiler leaks",
  "Urgent landlord call-outs",
]

export function EmergencyBanner() {
  return (
    <section id="emergency" className="py-16 bg-white border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">

          {/* Left — headline + details */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-sm font-semibold text-red-600">
              <AlertTriangle className="h-4 w-4 animate-pulse" />
              Available 24 Hours a Day, 7 Days a Week
            </div>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Plumbing Emergency?{" "}
              <span className="text-red-600">We&apos;re Here Now.</span>
            </h2>

            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              When a plumbing emergency happens, every minute counts. We provide rapid-response emergency plumbing services across London — day or night. We act quickly to isolate the problem, stop the leak, and prevent further property damage.
            </p>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-red-500" />
                Fast response time
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-red-500" />
                Fully insured &amp; Gas Safe
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="h-4 w-4 text-red-500" />
                Damage limitation focus
              </div>
            </div>

            {/* Pricing */}
            <div className="mt-6 inline-block rounded-lg border border-border bg-muted px-5 py-3 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Standard Call Out: £70</span> (1-hour minimum) &nbsp;·&nbsp; Out-of-hours rates apply &nbsp;·&nbsp; Transparent pricing
            </div>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:07767848827"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-red-600 px-6 py-3 text-base font-semibold text-white shadow-md transition hover:bg-red-500 active:scale-95"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
                </span>
                <Phone className="h-5 w-5" />
                Call Now — 07767 848827
              </a>
              <a
                href="mailto:info@swiftfixplumbing.uk"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-base font-medium text-foreground transition hover:bg-muted"
              >
                info@swiftfixplumbing.uk
              </a>
            </div>
          </div>

          {/* Right — emergency situations grid */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-red-600 mb-5">
              We respond to
            </p>
            <div className="grid grid-cols-2 gap-3">
              {emergencyItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-border bg-muted/50 px-4 py-3 text-sm text-foreground/80"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-red-500" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-border bg-muted/50 p-5 text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Ideal for landlords &amp; estate agents.</span> We understand urgency and tenant coordination — our engineers are dispatched promptly to minimise property damage and disruption.
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
