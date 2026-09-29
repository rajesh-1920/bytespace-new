"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CourseCard } from "@/components/modules/CourseCard";
import { CategoryCard } from "@/components/modules/CategoryCard";
import { CATEGORIES, COURSES, TESTIMONIALS, STATS } from "@/lib/data";
import {
  Search,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Star,
  Users,
  Award,
  PlayCircle,
  Flame,
  GraduationCap,
} from "lucide-react";

const TABS = [
  "Featured",
  "UI/UX Design",
  "Web Development",
  "AI & Machine Learning",
  "Marketing",
  "Animation",
  "Data Science",
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("Featured");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses =
    activeTab === "Featured"
      ? COURSES
      : COURSES.filter((c) => c.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* =========================================
            1. HERO SECTION
        ========================================= */}
        <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-gradient-to-b from-primary-50/40 via-white to-white">
          {/* Subtle background glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-primary-100/50 blur-[120px] rounded-full pointer-events-none -z-10" />

          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Copy & Search */}
              <div className="lg:col-span-7 flex flex-col items-start">
                <Badge variant="accent" size="md" className="mb-4 gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
                  <span>Next-Gen Learning Platform</span>
                </Badge>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-poppins text-neutral-950 tracking-tight leading-[1.15] mb-6">
                  Get Access to{" "}
                  <span className="text-primary-800 relative inline-block">
                    Hundreds
                    <svg
                      className="absolute -bottom-2 left-0 w-full text-accent-400 fill-current -z-10"
                      viewBox="0 0 250 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 9C60 3 180 3 247 9"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>{" "}
                  Courses Available
                </h1>

                <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed mb-8 max-w-xl">
                  Unlock your creativity, gain valuable knowledge, and grow your career or business with our wide range of expert-led courses.
                </p>

                {/* Hero Search Box */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (searchQuery) {
                      window.location.href = `/courses?q=${encodeURIComponent(searchQuery)}`;
                    }
                  }}
                  className="w-full max-w-xl p-2 rounded-2xl bg-white border border-neutral-200 shadow-lg shadow-neutral-200/50 flex flex-col sm:flex-row items-center gap-2 mb-8"
                >
                  <div className="flex items-center gap-3 flex-1 px-3 w-full">
                    <Search className="w-5 h-5 text-neutral-400 shrink-0" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Course, topic, or creator..."
                      className="w-full text-sm text-neutral-900 placeholder-neutral-400 bg-transparent focus:outline-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="filled"
                    colorScheme="primary"
                    size="md"
                    className="w-full sm:w-auto px-6 font-semibold"
                  >
                    Search
                  </Button>
                </form>

                {/* Quick Trust Badges */}
                <div className="flex flex-wrap items-center gap-6 text-xs text-neutral-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary-800" />
                    <span>Lifetime Access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary-800" />
                    <span>Verified Mentors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary-800" />
                    <span>Certificate on Completion</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Showcase Visual */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Main Hero Card */}
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-neutral-200/80 shadow-2xl shadow-primary-950/10 bg-neutral-900">
                    <Image
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80"
                      alt="Students learning together"
                      fill
                      priority
                      className="object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent-400 mb-1 block">
                        Trending Workshop
                      </span>
                      <h3 className="text-lg font-bold font-poppins">
                        Full-Stack AI Application Development 2026
                      </h3>
                    </div>
                  </div>

                  {/* Floating Stat Card 1 */}
                  <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl border border-neutral-100 shadow-xl shadow-neutral-900/5 flex items-center gap-3 animate-pulse">
                    <div className="w-10 h-10 rounded-xl bg-accent-400 flex items-center justify-center text-neutral-950 font-bold">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 font-medium">Enrolled This Week</p>
                      <p className="text-sm font-bold text-neutral-950 font-poppins">1,250+ Students</p>
                    </div>
                  </div>

                  {/* Floating Stat Card 2 */}
                  <div className="absolute -bottom-6 -right-4 bg-white p-4 rounded-2xl border border-neutral-100 shadow-xl shadow-neutral-900/5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-800 flex items-center justify-center text-white">
                      <Star className="w-5 h-5 fill-accent-400 text-accent-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-bold text-neutral-950 font-poppins">4.9 / 5.0</span>
                        <span className="text-xs text-neutral-400">(2.8k reviews)</span>
                      </div>
                      <p className="text-xs text-neutral-500 font-medium">Top Rated Platform</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* =========================================
            2. FEATURED CATEGORIES
        ========================================= */}
        <section className="py-20 bg-white">
          <Container>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-primary-800 mb-2 font-poppins">
                  Innovative Paths to Knowledge
                </p>
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-neutral-950">
                  Featured Categories
                </h2>
              </div>
              <Button
                variant="outlined"
                colorScheme="neutral"
                size="sm"
                href="/courses"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                View More Categories
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
              {CATEGORIES.map((cat) => (
                <CategoryCard key={cat.id} category={cat} />
              ))}
            </div>
          </Container>
        </section>

        {/* =========================================
            3. STATS & DISCOVERY BANNER (Figma Frame 15)
        ========================================= */}
        <section className="py-16 bg-neutral-950 text-white relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-800/30 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-400/20 rounded-full blur-[100px] pointer-events-none" />

          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <Badge variant="accent" size="sm" className="mb-4 text-neutral-950 font-bold">
                  Accelerate Your Future
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-white leading-tight mb-4">
                  Your Path to Professional Growth Starts Here!
                </h2>
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-xl">
                  Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills or embark on a new path entirely, we have the resources you need.
                </p>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                {STATS.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex flex-col justify-center"
                  >
                    <span className="text-3xl sm:text-4xl font-extrabold font-poppins text-accent-400 mb-1">
                      {stat.value}
                    </span>
                    <span className="text-xs text-neutral-400 font-medium">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* =========================================
            4. TABBED COURSE SHOWCASE (Figma Frame 8)
        ========================================= */}
        <section className="py-24 bg-neutral-50/50">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-xs font-bold uppercase tracking-wider text-primary-800 mb-2 font-poppins">
                Explore Diverse Learning Paths
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-poppins text-neutral-950 mb-4">
                Popular & Trending Courses
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Handpicked, high-impact courses designed by experienced industry mentors to help you build real-world portfolio projects.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar justify-start md:justify-center">
              {TABS.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? "bg-primary-800 text-white shadow-md shadow-primary-800/20"
                        : "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.slice(0, 6).map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>

            {/* View All CTA */}
            <div className="mt-14 text-center">
              <Button
                variant="filled"
                colorScheme="neutral"
                size="lg"
                href="/courses"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Browse All 70+ Courses
              </Button>
            </div>
          </Container>
        </section>

        {/* =========================================
            5. CREATOR CTA SECTION (Figma CTA_Frame)
        ========================================= */}
        <section className="py-20 bg-white">
          <Container>
            <div className="relative rounded-3xl bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 p-8 sm:p-12 lg:p-16 text-white overflow-hidden shadow-2xl">
              {/* Visual circles */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-400/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-2xl">
                <Badge variant="accent" size="sm" className="mb-4 text-neutral-950 font-bold">
                  For Creators & Mentors
                </Badge>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins text-white leading-tight mb-6">
                  Unlock Your Potential as a Creator with{" "}
                  <span className="text-accent-400">ByteSpace</span>
                </h2>
                <p className="text-neutral-200 text-sm sm:text-base leading-relaxed mb-8">
                  Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international mentors. Showcase your expertise by publishing your finest course.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    variant="filled"
                    colorScheme="accent"
                    size="lg"
                    href="/creator/1"
                    className="font-bold text-neutral-950"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Join as Creator
                  </Button>
                  <Button
                    variant="outlined"
                    colorScheme="white"
                    size="lg"
                    href="/courses"
                  >
                    Learn How It Works
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* =========================================
            6. TESTIMONIALS (Figma Testimonials_Frame)
        ========================================= */}
        <section className="py-20 bg-neutral-50 border-t border-neutral-200/60">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-xs font-bold uppercase tracking-wider text-primary-800 mb-2 font-poppins">
                Community Stories
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-poppins text-neutral-950 mb-3">
                Discover What Our Community Is Saying
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Hear directly from enthusiastic learners and accomplished creators about their transformative journey on ByteSpace.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="p-8 rounded-2xl bg-white border border-neutral-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    {/* 5 Stars */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <p className="text-neutral-700 text-sm italic leading-relaxed mb-6 font-satoshi">
                      {testimonial.content}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-neutral-200 shrink-0">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 font-poppins">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-neutral-500 font-medium">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
