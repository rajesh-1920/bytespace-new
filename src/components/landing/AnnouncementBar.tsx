import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";

/**
 * Thin promotional strip above the navbar. Rendered as plain markup so it
 * costs no client JS and collapses naturally on narrow screens.
 */
export function AnnouncementBar() {
  return (
    <div className="relative z-50 bg-neutral-950 text-white">
      <Container>
        <div className="flex items-center justify-center gap-x-3 gap-y-1 py-2.5 text-center text-xs sm:text-sm">
          <span className="hidden sm:inline-flex items-center gap-1.5 font-semibold text-accent-400 uppercase tracking-wide">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            New
          </span>
          <span className="text-neutral-300">
            {/* Shorter phrasing below sm so the bar never wraps to three lines. */}
            <span className="sm:hidden">7-day free trial, then $19/mo.</span>
            <span className="hidden sm:inline">
              All-Access Pro is 7 days free, then $19/month. Cancel anytime.
            </span>
          </span>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1 font-semibold text-white underline decoration-accent-400 decoration-2 underline-offset-4 hover:text-accent-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 rounded-sm whitespace-nowrap"
          >
            Start free trial
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </div>
  );
}
