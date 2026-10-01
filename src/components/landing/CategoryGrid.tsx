import React from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CategoryCard } from "@/components/modules/CategoryCard";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { CATEGORIES } from "@/lib/data";

export function CategoryGrid() {
  return (
    <section id="categories" className="py-20 md:py-24 bg-neutral-50">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            align="left"
            eyebrow="Browse by subject"
            title="Featured categories"
            description="Six tracks, each with a clear beginner-to-advanced route and projects that build on each other."
            className="mb-0"
          />
          <Button
            variant="outlined"
            colorScheme="neutral"
            size="sm"
            href="/courses"
            className="shrink-0 self-start md:self-auto font-semibold"
            rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
          >
            View full catalog
          </Button>
        </div>

        {/* 3 columns keeps cards at a readable ~380px instead of squeezing
            six into a 1240px row. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}
