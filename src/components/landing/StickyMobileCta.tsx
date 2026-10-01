import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Mobile-only conversion bar. Hidden from pointer devices and from the
 * accessibility tree on wide viewports where the hero CTAs are already
 * visible, so it never duplicates an in-page control.
 */
export function StickyMobileCta() {
  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-neutral-200 bg-white/95 backdrop-blur-md px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-[11px] text-neutral-600 font-medium truncate">All-Access Pro</p>
          <p className="text-sm font-bold font-poppins text-neutral-950 leading-tight">
            7 days free, then $19/mo
          </p>
        </div>
        <Link
          href="/register"
          className="inline-flex items-center gap-1.5 shrink-0 px-5 py-2.5 rounded-xl bg-primary-800 text-white text-sm font-semibold shadow-sm shadow-primary-800/25 active:bg-primary-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
        >
          Start free
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
