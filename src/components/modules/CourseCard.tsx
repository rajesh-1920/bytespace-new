import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Course } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { BookOpen, Clock, MessageSquare, Star, Users } from "lucide-react";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="group flex flex-col rounded-2xl bg-white border border-neutral-200/90 overflow-hidden hover:shadow-xl hover:border-primary-300 transition-all duration-300">
      {/* Thumbnail Container */}
      <Link href={`/courses/${course.id}`} className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 block">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="neutral" size="sm" className="bg-white/90 backdrop-blur-sm text-neutral-800 font-semibold border-none shadow-sm">
            {course.level}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="accent" size="sm" className="font-semibold shadow-sm">
            {course.category}
          </Badge>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Metadata chips */}
          <div className="flex items-center gap-3 text-xs text-neutral-500 mb-2.5">
            <span className="flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-neutral-500" />
              {course.lessonsCount} Lessons
            </span>
            <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-neutral-500" />
              {course.duration}
            </span>
            <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
            <span className="flex items-center gap-1">
              <MessageSquare className="w-3.5 h-3.5 text-neutral-500" />
              {course.reviewsCount}
            </span>
          </div>

          {/* Title */}
          <Link href={`/courses/${course.id}`}>
            <h3 className="text-base font-bold text-neutral-900 font-poppins line-clamp-2 group-hover:text-primary-800 transition-colors mb-2 leading-snug">
              {course.title}
            </h3>
          </Link>

          {/* Creator info */}
          <div className="flex items-center gap-2 mb-4">
            <div className="relative w-6 h-6 rounded-full overflow-hidden shrink-0 border border-neutral-200">
              <Image
                src={course.creator.avatar}
                alt={course.creator.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xs text-neutral-600 font-medium">
              by <span className="text-neutral-900 font-semibold">{course.creator.name}</span>
            </span>
          </div>
        </div>

        {/* Price & Enrolled Bottom Bar */}
        <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 fill-rating-400 text-rating-400" />
            <span className="text-xs font-bold text-neutral-900">{course.rating}</span>
            <span className="text-xs text-neutral-500">({course.reviewsCount})</span>
          </div>

          <div className="flex items-center gap-2">
            {course.originalPrice && (
              <span className="text-xs text-neutral-400 line-through">
                ${course.originalPrice}
              </span>
            )}
            <span className="text-lg font-bold font-poppins text-primary-800">
              ${course.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
