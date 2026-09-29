"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { COURSES } from "@/lib/data";
import {
  Star,
  ThumbsUp,
  MessageSquare,
  Filter,
  CheckCircle,
  ArrowLeft,
  Sparkles,
  Send,
} from "lucide-react";

interface ReviewItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  timeAgo: string;
  content: string;
  likes: number;
}

const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "1",
    name: "PurePearl Studio",
    role: "UI/UX Designer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    timeAgo: "2 weeks ago",
    content:
      "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my day-to-day workflow. Highly recommended for beginners and intermediate creators!",
    likes: 34,
  },
  {
    id: "2",
    name: "Albert Flores",
    role: "Product Designer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    timeAgo: "1 month ago",
    content:
      "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world portfolio capstone made it a truly enriching experience. Excited to implement what I've learned!",
    likes: 21,
  },
  {
    id: "3",
    name: "Cody Fisher",
    role: "Front-End Developer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    rating: 4,
    timeAgo: "2 months ago",
    content:
      "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
    likes: 18,
  },
  {
    id: "4",
    name: "Brooklyn Simmons",
    role: "Design Lead",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    timeAgo: "3 months ago",
    content:
      "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
    likes: 29,
  },
];

const RATING_BREAKDOWN = [
  { stars: 5, count: 720, percentage: 81 },
  { stars: 4, count: 120, percentage: 13 },
  { stars: 3, count: 21, percentage: 3 },
  { stars: 2, count: 12, percentage: 1.5 },
  { stars: 1, count: 16, percentage: 1.5 },
];

export default function CourseReviewsPage() {
  const params = useParams();
  const courseId = params?.id as string;
  const course = COURSES.find((c) => c.id === courseId) || COURSES[0];

  const [reviews, setReviews] = useState<ReviewItem[]>(REVIEWS_DATA);
  const [selectedRatingFilter, setSelectedRatingFilter] = useState<number | null>(null);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newRating, setNewRating] = useState(5);
  const [newReviewText, setNewReviewText] = useState("");
  const [newName, setNewName] = useState("");

  const filteredReviews = selectedRatingFilter
    ? reviews.filter((r) => r.rating === selectedRatingFilter)
    : reviews;

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewText || !newName) return;

    const newReview: ReviewItem = {
      id: Date.now().toString(),
      name: newName,
      role: "Student",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
      rating: newRating,
      timeAgo: "Just now",
      content: newReviewText,
      likes: 0,
    };

    setReviews([newReview, ...reviews]);
    setNewName("");
    setNewReviewText("");
    setShowReviewModal(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 pb-20">
        {/* Header Bar */}
        <section className="bg-neutral-950 text-white pt-12 pb-16 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-primary-800/20 blur-[120px] rounded-full pointer-events-none" />

          <Container>
            <div className="flex items-center gap-2 text-xs text-neutral-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
              <span>/</span>
              <Link href={`/courses/${course.id}`} className="hover:text-white transition-colors">{course.title}</Link>
              <span>/</span>
              <span className="text-accent-400 font-medium">Reviews</span>
            </div>

            <div className="max-w-3xl">
              <Badge variant="accent" size="sm" className="mb-4 text-neutral-950 font-bold">
                Student Feedback & Ratings
              </Badge>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-poppins text-white leading-tight mb-4">
                What Learners Are Saying
              </h1>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-satoshi">
                Discover what our community has to say about their experience with {course.title}. Read authentic reviews from students who mastered digital asset creation.
              </p>
            </div>
          </Container>
        </section>

        {/* Subnav */}
        <div className="sticky top-20 z-40 bg-white border-b border-neutral-200 shadow-sm">
          <Container>
            <div className="flex items-center gap-8 py-4 text-sm font-semibold">
              <Link href={`/courses/${course.id}`} className="text-neutral-600 hover:text-neutral-950 transition-colors">
                About Course
              </Link>
              <Link href={`/courses/${course.id}/learn`} className="text-neutral-600 hover:text-primary-800 transition-colors">
                Lessons Workspace
              </Link>
              <span className="text-primary-800 border-b-2 border-primary-800 pb-4 -mb-4">
                Student Reviews ({reviews.length})
              </span>
            </div>
          </Container>
        </div>

        {/* Main Content: Rating Breakdown & Reviews List */}
        <section className="pt-12">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Rating Score & Breakdown Bar (4 cols) */}
              <div className="lg:col-span-4 p-8 rounded-3xl bg-neutral-50 border border-neutral-200/90 shadow-sm space-y-6">
                <h3 className="text-lg font-bold font-poppins text-neutral-950">
                  Overall Rating
                </h3>

                <div className="flex items-center gap-4">
                  <span className="text-5xl font-black font-poppins text-neutral-950">
                    4.8
                  </span>
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <span className="text-xs text-neutral-500 font-medium">
                      Based on 889 verified reviews
                    </span>
                  </div>
                </div>

                {/* Bars */}
                <div className="space-y-2.5 pt-4 border-t border-neutral-200">
                  {RATING_BREAKDOWN.map((item) => (
                    <button
                      key={item.stars}
                      onClick={() =>
                        setSelectedRatingFilter(
                          selectedRatingFilter === item.stars ? null : item.stars
                        )
                      }
                      className={`w-full flex items-center gap-3 text-xs hover:opacity-80 transition-opacity cursor-pointer ${
                        selectedRatingFilter === item.stars ? "font-bold text-primary-800" : "text-neutral-600"
                      }`}
                    >
                      <span className="w-12 text-left font-medium">{item.stars} Stars</span>
                      <div className="flex-1 h-2 rounded-full bg-neutral-200 overflow-hidden">
                        <div
                          className="h-full bg-amber-400 rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                      <span className="w-8 text-right text-neutral-400 font-mono">{item.count}</span>
                    </button>
                  ))}
                </div>

                <div className="pt-4 border-t border-neutral-200">
                  <Button
                    variant="filled"
                    colorScheme="primary"
                    size="md"
                    className="w-full justify-center text-xs font-bold"
                    onClick={() => setShowReviewModal(true)}
                  >
                    Write a Review
                  </Button>
                </div>
              </div>

              {/* Right Column: Reviews List & Filters (8 cols) */}
              <div className="lg:col-span-8 space-y-6">
                {/* Filter bar */}
                <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                  <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                    <button
                      onClick={() => setSelectedRatingFilter(null)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                        selectedRatingFilter === null
                          ? "bg-primary-800 text-white"
                          : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                      }`}
                    >
                      All Ratings
                    </button>
                    {[5, 4, 3, 2, 1].map((star) => (
                      <button
                        key={star}
                        onClick={() => setSelectedRatingFilter(star)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer flex items-center gap-1 ${
                          selectedRatingFilter === star
                            ? "bg-primary-800 text-white"
                            : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                        }`}
                      >
                        <span>{star}</span>
                        <Star className="w-3 h-3 fill-current" />
                      </button>
                    ))}
                  </div>

                  <span className="text-xs text-neutral-500 font-medium">
                    Showing {filteredReviews.length} reviews
                  </span>
                </div>

                {/* Review Cards List */}
                <div className="space-y-4">
                  {filteredReviews.map((review) => (
                    <div
                      key={review.id}
                      className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-3"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-neutral-200 shrink-0">
                            <Image
                              src={review.avatar}
                              alt={review.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold font-poppins text-neutral-900 flex items-center gap-1.5">
                              {review.name}
                              <CheckCircle className="w-3.5 h-3.5 text-primary-800" />
                            </h4>
                            <p className="text-xs text-neutral-500">{review.role}</p>
                          </div>
                        </div>

                        <span className="text-xs text-neutral-400">{review.timeAgo}</span>
                      </div>

                      {/* Stars */}
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>

                      {/* Content */}
                      <p className="text-sm text-neutral-700 leading-relaxed font-satoshi">
                        {review.content}
                      </p>

                      {/* Helpful action */}
                      <div className="pt-2 flex items-center gap-4 text-xs text-neutral-400">
                        <button className="flex items-center gap-1 hover:text-primary-800 transition-colors">
                          <ThumbsUp className="w-3.5 h-3.5" />
                          <span>Helpful ({review.likes})</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Modal: Write a Review */}
        {showReviewModal && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="max-w-md w-full rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-neutral-100 animate-in zoom-in-95 duration-150">
              <h3 className="text-xl font-bold font-poppins text-neutral-900 mb-2">
                Write a Student Review
              </h3>
              <p className="text-xs text-neutral-500 mb-6">
                Share your learning experience and help other students choose the best courses.
              </p>

              <form onSubmit={handleAddReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold font-poppins uppercase tracking-wider text-neutral-700 mb-1">
                    Your Rating
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewRating(star)}
                        className="p-1 cursor-pointer focus:outline-none"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= newRating
                              ? "fill-amber-400 text-amber-400"
                              : "text-neutral-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold font-poppins uppercase tracking-wider text-neutral-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="e.g. Alex Johnson"
                    required
                    className="w-full py-2.5 px-3.5 text-xs rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold font-poppins uppercase tracking-wider text-neutral-700 mb-1">
                    Your Feedback
                  </label>
                  <textarea
                    rows={4}
                    value={newReviewText}
                    onChange={(e) => setNewReviewText(e.target.value)}
                    placeholder="What did you like most about this course?"
                    required
                    className="w-full py-2.5 px-3.5 text-xs rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-primary-500"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outlined"
                    colorScheme="neutral"
                    size="sm"
                    onClick={() => setShowReviewModal(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="filled"
                    colorScheme="primary"
                    size="sm"
                    rightIcon={<Send className="w-3.5 h-3.5" />}
                  >
                    Submit Review
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
