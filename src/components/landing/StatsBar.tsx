import React from "react";
import { STATS } from "@/lib/data";
import { Container } from "@/components/ui/Container";

/**
 * Social proof strip. Sits directly under the hero so the credibility claim
 * lands before any scrolling, and repeats the platform metrics that appear in
 * structured data.
 */
export function StatsBar() {
  return (
    <section
      aria-label="ByteSpace by the numbers"
      className="relative bg-neutral-950 text-white overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-96 h-96 bg-primary-800/30 rounded-full blur-[100px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-400/20 rounded-full blur-[100px] pointer-events-none"
      />

      <Container>
        <dl className="relative grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/10 border border-white/10 rounded-2xl overflow-hidden bg-neutral-900/50 backdrop-blur-sm">
          {STATS.map((stat) => (
            <div key={stat.label} className="p-6 sm:p-8 text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-3xl sm:text-4xl font-extrabold font-poppins text-accent-400">
                  {stat.value}
                </span>
                <span className="mt-1 block text-xs text-neutral-300 font-medium">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
