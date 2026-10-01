import React from "react";
import Image from "next/image";
import { CheckCircle, Star, Users, ArrowRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { HeroSearch } from "@/components/landing/HeroSearch";
import { COURSES } from "@/lib/data";
import { formatCompactNumber } from "@/lib/utils";

const TRUST_POINTS = ["Lifetime access", "Verified mentors", "Certificate on completion"];

export function Hero() {
  const showcase = COURSES[1];

  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-white">
      {/* Decorative glows */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-primary-100/60 blur-[120px] rounded-full pointer-events-none -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-24 w-[420px] h-[420px] bg-accent-300/40 blur-[120px] rounded-full pointer-events-none -z-10"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
          {/* ---------- Copy column ---------- */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <Badge variant="accent" size="md" className="mb-5 gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-800 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary-800" />
              </span>
              <span>12,000+ learners building real projects</span>
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-poppins text-neutral-950 tracking-tight leading-[1.08] mb-6 text-balance">
              Get access to{" "}
              {/* `pb-2` gives the hand-drawn underline its own space inside the
                  line box, so the stroke cannot cross the next line of text. */}
              <span className="text-primary-800 relative inline-block pb-2">
                hundreds
                <svg
                  className="absolute bottom-0 left-0 w-full text-accent-400 fill-none"
                  viewBox="0 0 250 12"
                  aria-hidden="true"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 9C60 3 180 3 247 9"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              of courses, taught by people who ship
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-8 max-w-xl">
              Project-driven courses across software engineering, AI, and design. Learn the skills
              teams are actually hiring for, ship portfolio work as you go, and get a certificate
              you can verify.
            </p>

            {/* Primary conversion pair */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6 w-full sm:w-auto">
              <Button
                variant="filled"
                colorScheme="primary"
                size="lg"
                href="/register"
                className="w-full sm:w-auto font-semibold"
                rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
              >
                Start learning free
              </Button>
              <Button
                variant="outlined"
                colorScheme="neutral"
                size="lg"
                href="/courses"
                className="w-full sm:w-auto font-semibold"
              >
                Browse the catalog
              </Button>
            </div>

            <p className="flex items-center gap-2 text-xs text-neutral-600 mb-7">
              <ShieldCheck className="w-4 h-4 text-primary-800 shrink-0" aria-hidden="true" />
              No card required. Individual courses start at $22.
            </p>

            <HeroSearch />

            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-neutral-600 mt-6">
              {TRUST_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary-800 shrink-0" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- Showcase column ---------- */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Layered preview card */}
              <div className="relative rounded-3xl bg-white border border-neutral-200 shadow-2xl shadow-primary-950/10 overflow-hidden">
                <div className="relative aspect-[16/11] bg-neutral-100">
                  <Image
                    src={showcase.thumbnail}
                    alt=""
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 40vw"
                    className="object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/20 to-transparent"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-accent-400 mb-1.5">
                      Most popular this week
                    </span>
                    <h2 className="text-lg font-bold font-poppins leading-snug">
                      {showcase.title}
                    </h2>
                    <div className="flex items-center gap-3 mt-2.5 text-xs text-neutral-200">
                      <span className="flex items-center gap-1">
                        <Star
                          className="w-3.5 h-3.5 fill-rating-400 text-rating-400"
                          aria-hidden="true"
                        />
                        <span className="font-bold text-white">{showcase.rating}</span>
                        <span>({showcase.reviewsCount} reviews)</span>
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" aria-hidden="true" />
                        {formatCompactNumber(showcase.enrolledStudents)} students
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 p-4 border-t border-neutral-100">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 border border-neutral-200">
                      <Image
                        src={showcase.creator.avatar}
                        alt=""
                        fill
                        sizes="32px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-neutral-900 truncate">
                        {showcase.creator.name}
                      </p>
                      <p className="text-[11px] text-neutral-600 truncate">
                        {showcase.creator.role}
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0 text-right">
                    {showcase.originalPrice && (
                      <span className="block text-xs text-neutral-500 line-through">
                        ${showcase.originalPrice}
                      </span>
                    )}
                    <span className="text-lg font-bold font-poppins text-primary-800">
                      ${showcase.price}
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating proof chip: enrolment */}
              <div className="hidden sm:flex absolute -top-8 -left-4 lg:-left-10 items-center gap-3 bg-white p-3.5 rounded-2xl border border-neutral-200 shadow-xl shadow-neutral-900/10 animate-float">
                <div className="w-10 h-10 rounded-xl bg-accent-400 flex items-center justify-center text-neutral-950 shrink-0">
                  <Users className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[11px] text-neutral-600 font-medium">Enrolled this week</p>
                  <p className="text-sm font-bold text-neutral-950 font-poppins">1,250+ students</p>
                </div>
              </div>

              {/* Floating proof chip: rating. Sits in the top-right corner so
                  it never covers the price in the card's footer bar. */}
              <div className="hidden sm:flex absolute -top-6 -right-4 lg:-right-8 items-center gap-3 bg-white p-3.5 rounded-2xl border border-neutral-200 shadow-xl shadow-neutral-900/10 animate-float-slow">
                <div className="w-10 h-10 rounded-xl bg-primary-800 flex items-center justify-center text-white shrink-0">
                  <Star className="w-5 h-5 fill-rating-400 text-rating-400" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-sm font-bold text-neutral-950 font-poppins">
                      4.9 / 5.0
                    </span>
                    <span className="text-[11px] text-neutral-600">2.8k reviews</span>
                  </div>
                  <p className="text-[11px] text-neutral-600 font-medium">Across all courses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
