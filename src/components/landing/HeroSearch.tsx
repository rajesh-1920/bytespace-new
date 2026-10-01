"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/Button";

/**
 * Client island for the hero search field. Navigates client-side so the
 * catalog page mounts without a full document reload.
 */
export function HeroSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = query.trim();
    router.push(trimmed ? `/courses?q=${encodeURIComponent(trimmed)}` : "/courses");
  }

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className="w-full max-w-xl flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-2 rounded-2xl bg-white border border-neutral-200 shadow-lg shadow-neutral-200/50 focus-within:border-primary-400 focus-within:ring-2 focus-within:ring-primary-200 transition"
    >
      <div className="flex items-center gap-3 flex-1 px-3">
        <Search className="w-5 h-5 text-neutral-500 shrink-0" aria-hidden="true" />
        <label htmlFor="hero-course-search" className="sr-only">
          Search courses by topic, title, or creator
        </label>
        <input
          id="hero-course-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Course, topic, or creator..."
          className="w-full py-1.5 text-sm text-neutral-900 placeholder-neutral-500 bg-transparent focus:outline-none"
        />
      </div>
      <Button
        type="submit"
        variant="filled"
        colorScheme="primary"
        size="md"
        className="w-full sm:w-auto px-6 font-semibold shrink-0"
      >
        Search
      </Button>
    </form>
  );
}
