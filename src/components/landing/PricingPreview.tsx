import React from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/landing/SectionHeading";

const PRO_FEATURES = [
  "Unlimited access to all 70+ courses",
  "Every future course and update",
  "1-on-1 mentor office hours",
  "Verified certificates + offline downloads",
];

const INCLUDED = ["No annual lock-in", "Cancel in one click", "14-day refund on any course"];

export function PricingPreview() {
  return (
    <section id="pricing" className="py-20 md:py-24 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="One subscription, every course"
          description="Or buy a single course outright and keep it forever. Both options include the same certificates and community access."
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-3xl border border-primary-200 bg-gradient-to-br from-primary-50 via-white to-accent-50/60 p-8 sm:p-10 shadow-xl shadow-primary-950/5 overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute -top-20 -right-16 w-64 h-64 bg-accent-300/40 blur-3xl rounded-full"
            />

            <div className="relative flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-8">
              <div>
                <Badge variant="accent" size="sm" className="mb-3 text-neutral-950 font-bold">
                  Most popular
                </Badge>
                <h3 className="text-2xl font-extrabold font-poppins text-neutral-950 mb-1.5">
                  ByteSpace All-Access Pro
                </h3>
                <p className="text-sm text-neutral-600 max-w-sm">
                  Every course, every track, and every future release in one place.
                </p>
              </div>

              <div className="shrink-0 sm:text-right">
                <div className="flex items-baseline gap-1.5 sm:justify-end">
                  <span className="text-5xl font-extrabold font-poppins text-neutral-950 leading-none">
                    $19
                  </span>
                  <span className="text-sm text-neutral-600">/month</span>
                </div>
                <p className="text-xs text-neutral-600 mt-1.5">billed annually</p>
              </div>
            </div>

            <ul className="relative grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {PRO_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-neutral-800">
                  <span className="w-5 h-5 rounded-full bg-primary-800 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" aria-hidden="true" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-6 border-t border-neutral-200/80">
              <Button
                variant="filled"
                colorScheme="primary"
                size="lg"
                href="/register"
                className="w-full sm:w-auto font-semibold"
                rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
              >
                Start 7-day free trial
              </Button>
              <Button
                variant="outlined"
                colorScheme="neutral"
                size="lg"
                href="/pricing"
                className="w-full sm:w-auto font-semibold"
              >
                Compare all plans
              </Button>
            </div>

            <ul className="relative flex flex-wrap items-center gap-x-5 gap-y-2 mt-5">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-center gap-1.5 text-xs text-neutral-600">
                  <Sparkles className="w-3.5 h-3.5 text-accent-600 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
