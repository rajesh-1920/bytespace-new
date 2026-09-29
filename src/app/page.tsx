import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-primary-50/50 via-white to-white">
          <Container className="text-center flex flex-col items-center">
            <Badge variant="accent" size="md" className="mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Phase 0 Foundation Ready
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold font-poppins text-neutral-950 tracking-tight max-w-3xl leading-tight mb-6">
              Ignite Your Tech Journey with{" "}
              <span className="text-primary-800 underline decoration-accent-400 decoration-4 underline-offset-8">
                ByteSpace
              </span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl font-satoshi mb-8 leading-relaxed">
              Design system, Tailwind Figma tokens, typography, and atomic layout components initialized.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                variant="filled"
                colorScheme="primary"
                size="lg"
                href="/courses"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Courses
              </Button>
              <Button
                variant="outlined"
                colorScheme="neutral"
                size="lg"
                href="/login"
              >
                Sign In
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl w-full text-left">
              <div className="p-6 rounded-2xl border border-neutral-200 bg-white shadow-sm">
                <CheckCircle2 className="w-6 h-6 text-primary-800 mb-3" />
                <h3 className="font-semibold text-neutral-900 font-poppins mb-1">Tailwind Design Tokens</h3>
                <p className="text-xs text-neutral-600">Full color palette: Electric Blue, Electric Lime & Neutral scales.</p>
              </div>

              <div className="p-6 rounded-2xl border border-neutral-200 bg-white shadow-sm">
                <CheckCircle2 className="w-6 h-6 text-primary-800 mb-3" />
                <h3 className="font-semibold text-neutral-900 font-poppins mb-1">Figma Typography Scale</h3>
                <p className="text-xs text-neutral-600">Poppins semi-bold headings & Satoshi / Inter body fonts.</p>
              </div>

              <div className="p-6 rounded-2xl border border-neutral-200 bg-white shadow-sm">
                <CheckCircle2 className="w-6 h-6 text-primary-800 mb-3" />
                <h3 className="font-semibold text-neutral-900 font-poppins mb-1">Grid & Layout</h3>
                <p className="text-xs text-neutral-600">1200px max-width content container & 12-column responsive layout.</p>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
