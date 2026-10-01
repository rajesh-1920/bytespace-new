import React from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { CourseTabs } from "@/components/landing/CourseTabs";

export function FeaturedCourses() {
  return (
    <section id="courses" className="py-20 md:py-24 bg-white">
      <Container>
        <SectionHeading
          eyebrow="Popular right now"
          title={
            <>
              Courses learners are <span className="text-primary-800">finishing this week</span>
            </>
          }
          description="Every track below ends in a shipped project. Filter by subject to see what fits your goals."
        />

        <CourseTabs />

        <div className="mt-14 text-center">
          <Button
            variant="filled"
            colorScheme="neutral"
            size="lg"
            href="/courses"
            className="font-semibold"
            rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
          >
            Browse all 70+ courses
          </Button>
        </div>
      </Container>
    </section>
  );
}
