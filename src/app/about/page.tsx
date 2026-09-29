import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Sparkles, Users, Award, BookOpen, ArrowRight, Target, Shield, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 pb-20">
        {/* Header */}
        <section className="bg-neutral-950 text-white py-20 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-primary-800/20 blur-[120px] rounded-full pointer-events-none" />

          <Container className="text-center flex flex-col items-center">
            <Badge variant="accent" size="md" className="mb-4 text-neutral-950 font-bold">
              Our Mission & Story
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-poppins text-white leading-tight mb-6 max-w-3xl">
              Empowering the Next Generation of{" "}
              <span className="text-accent-400">Digital Creators</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl font-satoshi leading-relaxed">
              At ByteSpace, we bring you closer to life-changing knowledge. We curate interactive, project-based courses across technology, design, and AI to help you build real-world skills.
            </p>
          </Container>
        </section>

        {/* Pillars */}
        <section className="py-20 bg-neutral-50/50">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-800 flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-poppins text-neutral-900">
                  Practical Project-First Learning
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  No passive lecture watching. Every course includes hands-on capstone assignments and downloadable design tokens to build an industry-ready portfolio.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-xl bg-accent-400/20 text-neutral-950 flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-poppins text-neutral-900">
                  World-Class Mentors
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Learn directly from verified designers, software architects, and creators who build products at top-tier global companies.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-xl bg-neutral-100 text-neutral-800 flex items-center justify-center">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-poppins text-neutral-900">
                  Vibrant Global Community
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Join over 12,000+ passionate students and creators. Share feedback, participate in design critiques, and collaborate on real projects.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-16">
          <Container>
            <div className="text-center max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold font-poppins text-neutral-950">
                Ready to Start Your Journey?
              </h2>
              <p className="text-sm text-neutral-600">
                Explore our catalog of top-rated courses and start learning today.
              </p>
              <Button
                variant="filled"
                colorScheme="primary"
                size="lg"
                href="/courses"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Browse All Courses
              </Button>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
