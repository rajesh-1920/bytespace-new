import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Check, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

const PLANS = [
  {
    name: "Individual Course",
    price: "$25",
    period: "one-time payment",
    description: "Full lifetime access to any single comprehensive masterclass.",
    features: [
      "Lifetime access to selected course",
      "All downloadable starter files & assets",
      "Certificate of Completion",
      "Q&A discussion forum access",
      "Mobile and desktop access",
    ],
    highlighted: false,
    ctaText: "Browse Courses",
    href: "/courses",
  },
  {
    name: "ByteSpace All-Access Pro",
    price: "$19",
    period: "per month, billed annually",
    description: "Unlimited access to all 70+ courses, masterclasses, and future releases.",
    features: [
      "Unlimited access to all 70+ courses",
      "All future course updates & additions",
      "Direct 1-on-1 mentor office hours",
      "Exclusive Discord Pro community",
      "Verified course certificates",
      "Offline lesson downloads",
    ],
    highlighted: true,
    ctaText: "Start 7-Day Free Trial",
    href: "/register",
  },
  {
    name: "Team & Enterprise",
    price: "$49",
    period: "per user / month",
    description: "Dedicated learning pathways and admin analytics for tech teams.",
    features: [
      "Everything in All-Access Pro",
      "Team progress tracking dashboard",
      "Custom skill assessment paths",
      "Dedicated account manager",
      "SSO & Google Workspace integration",
    ],
    highlighted: false,
    ctaText: "Contact Sales",
    href: "/register",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 pb-20">
        {/* Header */}
        <section className="bg-neutral-950 text-white py-20 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-primary-800/20 blur-[120px] rounded-full pointer-events-none" />

          <Container className="text-center flex flex-col items-center">
            <Badge variant="accent" size="md" className="mb-4 text-neutral-950 font-bold">
              Simple & Transparent Pricing
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-poppins text-white leading-tight mb-6 max-w-3xl">
              Invest in Your Future with{" "}
              <span className="text-accent-400">ByteSpace</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl font-satoshi leading-relaxed">
              Choose the plan that fits your career goals. Cancel anytime with a 30-day money-back guarantee.
            </p>
          </Container>
        </section>

        {/* Pricing Cards Grid */}
        <section className="py-20 bg-neutral-50/50">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {PLANS.map((plan, idx) => (
                <div
                  key={idx}
                  className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-neutral-950 text-white border-2 border-primary-500 shadow-2xl scale-105 relative z-10"
                      : "bg-white text-neutral-900 border border-neutral-200/90 shadow-sm hover:shadow-md"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 rounded-full bg-accent-400 text-neutral-950 font-bold text-xs uppercase tracking-wider shadow-md">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-bold font-poppins mb-2">
                      {plan.name}
                    </h3>
                    <p
                      className={`text-xs mb-6 leading-relaxed ${
                        plan.highlighted ? "text-neutral-300" : "text-neutral-500"
                      }`}
                    >
                      {plan.description}
                    </p>

                    <div className="flex items-baseline gap-2 mb-8">
                      <span className="text-4xl font-extrabold font-poppins">
                        {plan.price}
                      </span>
                      <span
                        className={`text-xs ${
                          plan.highlighted ? "text-neutral-400" : "text-neutral-500"
                        }`}
                      >
                        /{plan.period}
                      </span>
                    </div>

                    <div className="space-y-3 pt-6 border-t border-neutral-100/20 mb-8 text-xs sm:text-sm">
                      <p
                        className={`font-bold uppercase tracking-wider text-[11px] font-poppins ${
                          plan.highlighted ? "text-accent-400" : "text-primary-800"
                        }`}
                      >
                        Plan Features:
                      </p>
                      {plan.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <Check
                            className={`w-4 h-4 shrink-0 ${
                              plan.highlighted ? "text-accent-400" : "text-primary-800"
                            }`}
                          />
                          <span
                            className={
                              plan.highlighted ? "text-neutral-200" : "text-neutral-700"
                            }
                          >
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="filled"
                    colorScheme={plan.highlighted ? "accent" : "primary"}
                    size="lg"
                    href={plan.href}
                    className={`w-full justify-center text-sm font-bold shadow-md ${
                      plan.highlighted ? "text-neutral-950" : ""
                    }`}
                  >
                    {plan.ctaText}
                  </Button>
                </div>
              ))}
            </div>

            {/* Money back guarantee badge */}
            <div className="mt-16 flex items-center justify-center gap-3 text-xs text-neutral-500">
              <ShieldCheck className="w-5 h-5 text-primary-800" />
              <span>30-Day Money-Back Guarantee • Secure 256-Bit SSL Encryption • Cancel Anytime</span>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
