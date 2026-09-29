"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Search, Menu, X, Sparkles, BookOpen, Users, Compass } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Mentors", href: "/creator/1" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100 transition-all">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-primary-800 flex items-center justify-center text-white font-bold shadow-md shadow-primary-800/20 group-hover:scale-105 transition-transform">
              <span className="text-xl font-poppins">B</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-400 -ml-0.5 mt-2"></span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold font-poppins text-neutral-950 tracking-tight flex items-center gap-1">
                Byte<span className="text-primary-800">Space</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary-800 relative py-1",
                    isActive
                      ? "text-primary-800 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary-800 after:rounded-full"
                      : "text-neutral-700"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Search & Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/courses"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-xs text-neutral-500 transition-all w-48"
            >
              <Search className="w-3.5 h-3.5 text-neutral-400" />
              <span>Search courses...</span>
            </Link>

            <div className="h-6 w-px bg-neutral-200 mx-1"></div>

            <Button
              variant="outlined"
              colorScheme="neutral"
              size="sm"
              href="/login"
            >
              Sign In
            </Button>
            <Button
              variant="filled"
              colorScheme="primary"
              size="sm"
              href="/register"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-100 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-neutral-800 hover:bg-neutral-50 rounded-lg"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2">
                <Button
                  variant="outlined"
                  colorScheme="neutral"
                  className="w-full justify-center"
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </Button>
                <Button
                  variant="filled"
                  colorScheme="primary"
                  className="w-full justify-center"
                  href="/register"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
