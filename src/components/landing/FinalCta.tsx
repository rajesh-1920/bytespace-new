import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const REASSURANCE = [
  "No card required to start",
  "7-day free trial on Pro",
  "14-day refund on any course",
];

export function FinalCta() {
  return (
    <section className="pb-20 md:pb-28 bg-white">
      <Container>
        <div className="relative rounded-3xl bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 p-8 sm:p-12 lg:p-16 text-white overflow-hidden shadow-2xl">
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-400/10 rounded-full blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-16 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl"
          />

          <div className="relative z-10 max-w-2xl">
            <Badge variant="accent" size="sm" className="mb-5 text-neutral-950 font-bold">
              Free to start
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins text-white leading-[1.1] mb-5 text-balance">
              Stop watching tutorials. <br />
              Start shipping <span className="text-accent-400">this week.</span>
            </h2>

            <p className="text-neutral-200 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
              Join 12,000+ learners building portfolio-grade projects with mentors who still do the
              work. Pick a track, start the free trial, and have something to show by Friday.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button
                variant="filled"
                colorScheme="accent"
                size="lg"
                href="/register"
                className="w-full sm:w-auto font-bold text-neutral-950"
                rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
              >
                Create your free account
              </Button>
              <Button
                variant="outlined"
                colorScheme="white"
                size="lg"
                href="/courses"
                className="w-full sm:w-auto font-semibold"
              >
                Explore courses first
              </Button>
            </div>

            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-7">
              {REASSURANCE.map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs text-neutral-200">
                  <CheckCircle className="w-4 h-4 text-accent-400 shrink-0" aria-hidden="true" />
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
