"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Mail, Check } from "lucide-react";
import { TwitterIcon, GithubIcon, LinkedinIcon, YoutubeIcon } from "@/components/ui/Icons";

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-neutral-950 text-white pt-16 pb-12 mt-auto border-t border-neutral-900">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-primary-800 flex items-center justify-center text-white font-bold shadow-md shadow-primary-800/20">
                <span className="text-lg font-poppins">B</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent-400 -ml-0.5 mt-2"></span>
              </div>
              <span className="text-xl font-bold font-poppins text-white tracking-tight">
                Byte<span className="text-accent-400">Space</span>
              </span>
            </Link>
            <p className="text-neutral-400 text-sm max-w-sm leading-relaxed">
              Empowering the next generation of engineers, creators, and designers with interactive project-driven learning.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 hover:bg-primary-800 hover:text-white text-neutral-400 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 hover:bg-primary-800 hover:text-white text-neutral-400 flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 hover:bg-primary-800 hover:text-white text-neutral-400 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 hover:bg-primary-800 hover:text-white text-neutral-400 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 1: Courses */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold font-poppins text-white tracking-wider uppercase">
              Courses
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-neutral-400">
              <li>
                <Link href="/courses?cat=frontend" className="hover:text-accent-400 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/courses?cat=uiux" className="hover:text-accent-400 transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/courses?cat=ai" className="hover:text-accent-400 transition-colors">
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/courses?cat=backend" className="hover:text-accent-400 transition-colors">
                  Backend & Cloud
                </Link>
              </li>
              <li>
                <Link href="/courses?cat=mobile" className="hover:text-accent-400 transition-colors">
                  Mobile Apps
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Platform */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold font-poppins text-white tracking-wider uppercase">
              Platform
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-neutral-400">
              <li>
                <Link href="/courses" className="hover:text-accent-400 transition-colors">
                  Browse Catalog
                </Link>
              </li>
              <li>
                <Link href="/creator/1" className="hover:text-accent-400 transition-colors">
                  Become a Mentor
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-accent-400 transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-accent-400 transition-colors">
                  Student Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold font-poppins text-white tracking-wider uppercase">
              Stay Updated
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Get the latest courses, tutorials, and tech trends straight to your inbox.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-primary-900/50 border border-primary-700 text-accent-400 text-xs font-medium">
                <Check className="w-4 h-4" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2 pt-1">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full pl-3 pr-8 py-2 text-xs rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-primary-500"
                  />
                  <Mail className="w-3.5 h-3.5 text-neutral-500 absolute right-3 top-2.5" />
                </div>
                <Button
                  type="submit"
                  variant="filled"
                  colorScheme="accent"
                  size="sm"
                  className="w-full justify-center text-neutral-950 font-semibold"
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} ByteSpace Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-neutral-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-neutral-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-neutral-300 transition-colors">
              Cookie Settings
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
