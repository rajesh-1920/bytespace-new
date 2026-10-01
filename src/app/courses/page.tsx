"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CourseCard } from "@/components/modules/CourseCard";
import { COURSES, CATEGORIES } from "@/lib/data";
import { labelIncludes } from "@/lib/utils";
import {
  Search,
  Filter,
  SlidersHorizontal,
  ChevronDown,
  X,
  Star,
  BookOpen,
  ArrowUpDown,
  RotateCcw,
} from "lucide-react";

const LEVELS = ["All Levels", "Beginner", "Intermediate", "Advanced"];
const SORT_OPTIONS = [
  { label: "Most Relevant", value: "relevant" },
  { label: "Highest Rated", value: "rating" },
  { label: "Most Popular", value: "popular" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
];

function CourseSearchContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || searchParams.get("cat") || "all";
  const initialQuery = searchParams.get("q") || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [minRating, setMinRating] = useState<number>(0);
  const [sortBy, setSortBy] = useState<string>("relevant");
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);

  const toggleLevel = (level: string) => {
    setSelectedLevels((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedLevels([]);
    setMinRating(0);
    setSortBy("relevant");
  };

  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      // Search query filter
      if (
        searchQuery &&
        !labelIncludes(course.title, searchQuery) &&
        !labelIncludes(course.creator.name, searchQuery) &&
        !labelIncludes(course.category, searchQuery)
      ) {
        return false;
      }

      // Category filter. Normalised so a slug like `ui-ux-design` still
      // matches the `UI/UX Design` courses it is meant to select.
      if (selectedCategory !== "all" && !labelIncludes(course.category, selectedCategory)) {
        return false;
      }

      // Level filter
      if (selectedLevels.length > 0 && !selectedLevels.includes(course.level)) {
        return false;
      }

      // Rating filter
      if (minRating > 0 && course.rating < minRating) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "popular") return b.enrolledStudents - a.enrolledStudents;
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      return 0;
    });
  }, [searchQuery, selectedCategory, selectedLevels, minRating, sortBy]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 py-10 bg-neutral-50/50">
        <Container>
          {/* Header & Search Bar */}
          <div className="mb-10 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold font-poppins text-neutral-950 tracking-tight">
                  Find Your Next Course
                </h1>
                <p className="text-sm text-neutral-600 mt-1">
                  Explore over 70+ industry-crafted courses designed to boost your skills.
                </p>
              </div>

              {/* Mobile Filter Toggle Button */}
              <div className="flex items-center gap-3 md:hidden">
                <Button
                  variant="outlined"
                  colorScheme="neutral"
                  size="sm"
                  className="w-full justify-center"
                  onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                  leftIcon={<SlidersHorizontal className="w-4 h-4" />}
                >
                  Filters
                </Button>
              </div>
            </div>

            {/* Global Search & Sort Toolbar */}
            <div className="flex flex-col sm:flex-row items-center gap-4 p-2 bg-white rounded-2xl border border-neutral-200 shadow-sm">
              <div className="flex items-center gap-3 flex-1 px-3 w-full">
                <Search className="w-5 h-5 text-neutral-400 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search course title, mentor, or keyword..."
                  className="w-full text-sm text-neutral-900 placeholder-neutral-400 bg-transparent focus:outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="p-1 rounded-full hover:bg-neutral-100 text-neutral-400 hover:text-neutral-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto px-2">
                <span className="text-xs text-neutral-500 font-medium whitespace-nowrap hidden lg:inline">
                  Sort By:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full sm:w-auto text-xs font-semibold py-2 px-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-800 focus:outline-none focus:border-primary-500 cursor-pointer"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Category Horizontal Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === "all"
                  ? "bg-primary-800 text-white shadow-sm"
                  : "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
              }`}
            >
              All Categories
            </button>
            {CATEGORIES.map((cat) => {
              const isActive =
                selectedCategory.toLowerCase() === cat.slug.toLowerCase() ||
                selectedCategory.toLowerCase() === cat.name.toLowerCase();
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(isActive ? "all" : cat.slug)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-primary-800 text-white shadow-sm"
                      : "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Main Layout: Filter Sidebar + Course Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar Filters */}
            <aside
              className={`lg:col-span-3 bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm space-y-6 ${
                mobileFilterOpen ? "block" : "hidden lg:block"
              }`}
            >
              <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-primary-800" />
                  <h3 className="text-sm font-bold font-poppins text-neutral-900">
                    Filter Courses
                  </h3>
                </div>
                <button
                  onClick={clearAllFilters}
                  className="text-xs text-primary-800 hover:underline flex items-center gap-1 font-semibold"
                >
                  <RotateCcw className="w-3 h-3" />
                  Reset
                </button>
              </div>

              {/* Filter 1: Level */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-700 mb-3 font-poppins">
                  Difficulty Level
                </h4>
                <div className="space-y-2">
                  {LEVELS.map((lvl) => (
                    <label
                      key={lvl}
                      className="flex items-center gap-2.5 text-xs text-neutral-700 cursor-pointer hover:text-neutral-950 font-medium"
                    >
                      <input
                        type="checkbox"
                        checked={selectedLevels.includes(lvl)}
                        onChange={() => toggleLevel(lvl)}
                        className="w-4 h-4 rounded border-neutral-300 text-primary-800 focus:ring-primary-500 cursor-pointer"
                      />
                      <span>{lvl}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Filter 2: Minimum Rating */}
              <div className="pt-4 border-t border-neutral-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-700 mb-3 font-poppins">
                  Minimum Rating
                </h4>
                <div className="space-y-2">
                  {[4.8, 4.5, 4.0].map((rate) => (
                    <label
                      key={rate}
                      className="flex items-center gap-2.5 text-xs text-neutral-700 cursor-pointer hover:text-neutral-950 font-medium"
                    >
                      <input
                        type="radio"
                        name="rating"
                        checked={minRating === rate}
                        onChange={() => setMinRating(minRating === rate ? 0 : rate)}
                        className="w-4 h-4 text-primary-800 focus:ring-primary-500 cursor-pointer"
                      />
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        {rate} & above
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Filter 3: Category Checkbox list */}
              <div className="pt-4 border-t border-neutral-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-700 mb-3 font-poppins">
                  Categories
                </h4>
                <div className="space-y-2">
                  {CATEGORIES.map((cat) => (
                    <label
                      key={cat.id}
                      className="flex items-center justify-between text-xs text-neutral-700 cursor-pointer hover:text-neutral-950 font-medium"
                    >
                      <span className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={
                            selectedCategory.toLowerCase() === cat.slug.toLowerCase() ||
                            selectedCategory.toLowerCase() === cat.name.toLowerCase()
                          }
                          onChange={() =>
                            setSelectedCategory(
                              selectedCategory.toLowerCase() === cat.slug.toLowerCase()
                                ? "all"
                                : cat.slug
                            )
                          }
                          className="w-4 h-4 rounded border-neutral-300 text-primary-800 focus:ring-primary-500 cursor-pointer"
                        />
                        {cat.name}
                      </span>
                      <span className="text-[11px] text-neutral-400">
                        ({cat.coursesCount})
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            {/* Course Results Grid */}
            <div className="lg:col-span-9">
              {/* Result Meta Bar */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-xs sm:text-sm text-neutral-600 font-medium">
                  Showing <span className="font-bold text-neutral-900">{filteredCourses.length}</span>{" "}
                  courses found
                </p>

                {(searchQuery || selectedCategory !== "all" || selectedLevels.length > 0 || minRating > 0) && (
                  <button
                    onClick={clearAllFilters}
                    className="text-xs text-primary-800 font-semibold hover:underline"
                  >
                    Clear Active Filters
                  </button>
                )}
              </div>

              {filteredCourses.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-2xl border border-neutral-200 p-8">
                  <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mx-auto mb-4 text-neutral-400">
                    <Search className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-poppins text-neutral-900 mb-1">
                    No courses match your criteria
                  </h3>
                  <p className="text-xs text-neutral-500 max-w-sm mx-auto mb-6">
                    Try adjusting your search terms or clearing active filters to view available courses.
                  </p>
                  <Button
                    variant="filled"
                    colorScheme="primary"
                    size="sm"
                    onClick={clearAllFilters}
                  >
                    Reset All Filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              )}

              {/* Pagination */}
              {filteredCourses.length > 0 && (
                <div className="mt-12 flex items-center justify-center gap-2">
                  <button className="px-4 py-2 rounded-xl text-xs font-semibold bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50 disabled:opacity-50">
                    Previous
                  </button>
                  <button className="w-9 h-9 rounded-xl text-xs font-bold bg-primary-800 text-white shadow-sm">
                    1
                  </button>
                  <button className="w-9 h-9 rounded-xl text-xs font-semibold bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50">
                    2
                  </button>
                  <button className="w-9 h-9 rounded-xl text-xs font-semibold bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50">
                    3
                  </button>
                  <button className="px-4 py-2 rounded-xl text-xs font-semibold bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50">
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <CourseSearchContent />
    </Suspense>
  );
}
