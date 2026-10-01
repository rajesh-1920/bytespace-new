import React from "react";
import Link from "next/link";
import { Category } from "@/types";
import {
  Palette,
  Code2,
  BrainCircuit,
  BarChart3,
  Clapperboard,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

interface CategoryCardProps {
  category: Category;
}

const ICON_CLASS = "w-6 h-6 text-primary-800";

const ICONS_MAP: Record<string, React.ReactNode> = {
  Palette: <Palette className={ICON_CLASS} />,
  Code2: <Code2 className={ICON_CLASS} />,
  BrainCircuit: <BrainCircuit className={ICON_CLASS} />,
  BarChart3: <BarChart3 className={ICON_CLASS} />,
  Clapperboard: <Clapperboard className={ICON_CLASS} />,
  TrendingUp: <TrendingUp className={ICON_CLASS} />,
};

export function CategoryCard({ category }: CategoryCardProps) {
  const icon = ICONS_MAP[category.iconName] ?? <Palette className={ICON_CLASS} />;

  return (
    <Link
      href={`/courses?category=${category.slug}`}
      className="group relative p-6 rounded-2xl bg-neutral-50 hover:bg-white border border-neutral-200/80 hover:border-primary-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center group-hover:bg-primary-50 group-hover:border-primary-200 transition-colors">
          {icon}
        </div>
        <div className="w-8 h-8 rounded-full bg-transparent group-hover:bg-primary-800 group-hover:text-white flex items-center justify-center text-neutral-500 transition-all">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      <div>
        <h3 className="text-base font-semibold text-neutral-900 font-poppins group-hover:text-primary-800 transition-colors mb-1">
          {category.name}
        </h3>
        <p className="text-xs text-neutral-600 font-medium">
          {category.coursesCount} Courses Available
        </p>
      </div>
    </Link>
  );
}
