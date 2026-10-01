import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnnouncementBar } from "@/components/landing/AnnouncementBar";
import { Hero } from "@/components/landing/Hero";
import { StatsBar } from "@/components/landing/StatsBar";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { CategoryGrid } from "@/components/landing/CategoryGrid";
import { FeaturedCourses } from "@/components/landing/FeaturedCourses";
import { FeatureGrid } from "@/components/landing/FeatureGrid";
import { MentorSpotlight } from "@/components/landing/MentorSpotlight";
import { PricingPreview } from "@/components/landing/PricingPreview";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { FinalCta } from "@/components/landing/FinalCta";
import { StickyMobileCta } from "@/components/landing/StickyMobileCta";
import { COURSES, FAQS, STATS } from "@/lib/data";

const SITE_URL = "https://bytespace.example.com";

const TITLE = "ByteSpace - Learn Software Engineering, AI & Design From Mentors Who Ship";
const DESCRIPTION =
  "Project-driven online courses in web development, AI, data science, and UI/UX design. Learn from verified industry mentors, build portfolio-grade work, and earn certificates you can verify. 70+ courses, 12,000+ learners.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "learn to code online",
    "project-based coding courses",
    "AI courses for developers",
    "UI/UX design courses",
    "data science courses",
    "online mentor-led courses",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "ByteSpace",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

/**
 * Structured data for the landing page. Kept as a plain JSON-LD script so the
 * page stays a server component and the rich result stays in the initial HTML.
 */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": `${SITE_URL}/#organization`,
      name: "ByteSpace",
      url: SITE_URL,
      description: DESCRIPTION,
      sameAs: ["https://twitter.com", "https://github.com", "https://linkedin.com"],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: STATS.find((stat) => stat.label === "Average Rating")?.value.replace("/5", ""),
        bestRating: "5",
        reviewCount: "2800",
      },
    },
    {
      "@type": "ItemList",
      name: "Popular ByteSpace courses",
      itemListElement: COURSES.map((course, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Course",
          name: course.title,
          description: `${course.lessonsCount} lessons of ${course.category} taught by ${course.creator.name}.`,
          url: `${SITE_URL}/courses/${course.id}`,
          provider: { "@id": `${SITE_URL}/#organization` },
          offers: {
            "@type": "Offer",
            category: "Paid",
            price: course.price,
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
        },
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <AnnouncementBar />
      <Navbar />

      <main className="flex-1">
        <Hero />
        <StatsBar />
        <HowItWorks />
        <CategoryGrid />
        <FeaturedCourses />
        <FeatureGrid />
        <MentorSpotlight />
        <PricingPreview />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>

      <Footer />

      {/* Leaves room for the fixed bar so the footer's last row stays reachable. */}
      <div className="md:hidden h-16" aria-hidden="true" />
      <StickyMobileCta />
    </div>
  );
}
