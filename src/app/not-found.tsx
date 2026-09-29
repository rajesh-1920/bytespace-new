import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowLeft, Home, Search, BookOpen, Compass, HelpCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-20 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary-50 blur-[100px] rounded-full pointer-events-none -z-10" />

        <Container className="text-center flex flex-col items-center">
          <Badge variant="accent" size="md" className="mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Error 404
          </Badge>

          {/* Large Stylized 404 Display */}
          <div className="relative mb-6 select-none">
            <span className="text-8xl sm:text-9xl md:text-[180px] font-extrabold font-poppins text-neutral-100 tracking-tighter leading-none block">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl sm:text-7xl md:text-8xl font-black font-poppins text-primary-800 tracking-tight">
                4<span className="text-accent-400">0</span>4
              </span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins text-neutral-950 tracking-tight mb-4 max-w-xl">
            The page you are looking for doesn’t exist
          </h1>

          <p className="text-neutral-600 text-sm sm:text-base max-w-md mb-8 leading-relaxed font-satoshi">
            Try to use a correct URL or go back to the homepage to start exploring courses again.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <Button
              variant="filled"
              colorScheme="primary"
              size="lg"
              href="/"
              leftIcon={<Home className="w-4 h-4" />}
            >
              Back to Home
            </Button>
            <Button
              variant="outlined"
              colorScheme="neutral"
              size="lg"
              href="/courses"
              leftIcon={<Search className="w-4 h-4" />}
            >
              Browse Courses
            </Button>
          </div>

          {/* Quick Helpful Links */}
          <div className="pt-8 border-t border-neutral-100 w-full max-w-md">
            <p className="text-xs uppercase font-bold tracking-wider text-neutral-400 mb-4">
              Or Explore Popular Destinations
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-xs">
              <Link
                href="/courses"
                className="px-3.5 py-2 rounded-xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-neutral-700 font-medium transition-colors flex items-center gap-1.5"
              >
                <BookOpen className="w-3.5 h-3.5 text-primary-800" />
                Featured Courses
              </Link>
              <Link
                href="/creator/1"
                className="px-3.5 py-2 rounded-xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-neutral-700 font-medium transition-colors flex items-center gap-1.5"
              >
                <Compass className="w-3.5 h-3.5 text-primary-800" />
                Top Mentors
              </Link>
              <Link
                href="/login"
                className="px-3.5 py-2 rounded-xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-neutral-700 font-medium transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
