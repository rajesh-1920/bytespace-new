"use client";

import React, { useMemo, useRef, useState } from "react";
import { Search } from "lucide-react";
import { CourseCard } from "@/components/modules/CourseCard";
import { Button } from "@/components/ui/Button";
import { COURSES, COURSE_TABS } from "@/lib/data";
import { cn } from "@/lib/utils";

const FEATURED = "All courses";

export function CourseTabs() {
  const [activeTab, setActiveTab] = useState(FEATURED);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const visibleCourses = useMemo(
    () =>
      activeTab === FEATURED ? COURSES : COURSES.filter((course) => course.category === activeTab),
    [activeTab]
  );

  /** Roving tabindex: arrows move selection, Home/End jump to the ends. */
  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    const lastIndex = COURSE_TABS.length;
    let nextIndex: number | null = null;

    if (event.key === "ArrowRight") nextIndex = index === lastIndex - 1 ? 0 : index + 1;
    else if (event.key === "ArrowLeft") nextIndex = index === 0 ? lastIndex - 1 : index - 1;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = lastIndex - 1;

    if (nextIndex === null) return;

    event.preventDefault();
    const nextTab = COURSE_TABS[nextIndex];
    setActiveTab(nextTab);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <>
      <div
        role="tablist"
        aria-label="Filter courses by category"
        className="flex items-center gap-2 overflow-x-auto pb-3 mb-10 no-scrollbar justify-start md:justify-center"
      >
        {[FEATURED, ...COURSE_TABS].map((tab, index) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              role="tab"
              type="button"
              id={`course-tab-${index}`}
              aria-selected={isActive}
              aria-controls="course-tabpanel"
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveTab(tab)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={cn(
                "px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
                isActive
                  ? "bg-primary-800 text-white shadow-md shadow-primary-800/20"
                  : "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
              )}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id="course-tabpanel"
        aria-labelledby={`course-tab-${[FEATURED, ...COURSE_TABS].indexOf(activeTab)}`}
        tabIndex={-1}
        className="focus-visible:outline-none"
      >
        {visibleCourses.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-neutral-200 p-8">
            <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mx-auto mb-4 text-neutral-500">
              <Search className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold font-poppins text-neutral-900 mb-1">
              Nothing here yet
            </h3>
            <p className="text-sm text-neutral-600 max-w-sm mx-auto mb-6">
              We are still publishing courses in this category. Browse the full catalog in the
              meantime.
            </p>
            <Button variant="filled" colorScheme="primary" size="sm" href="/courses">
              Browse all courses
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
