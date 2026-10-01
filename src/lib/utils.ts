import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Reduce a label to comparable words so slug and category can be matched even
 * when they differ in punctuation. `ui-ux-design` and `UI/UX Design` both
 * normalise to "ui ux design"; `ai-machine-learning` and
 * `AI & Machine Learning` both become "ai machine learning".
 */
export function normalizeLabel(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

/**
 * True when `haystack` contains `needle`, ignoring punctuation and case.
 */
export function labelIncludes(haystack: string, needle: string): boolean {
  const target = normalizeLabel(needle);
  if (!target) return true;
  return normalizeLabel(haystack).includes(target);
}

/**
 * Compact a headcount for display: 1420 -> "1.4K", 3100 -> "3.1K",
 * 940 -> "940". Keeps stat tiles and proof chips from wrapping.
 */
export function formatCompactNumber(value: number): string {
  if (value < 1000) return String(value);
  const thousands = value / 1000;
  return `${thousands % 1 === 0 ? thousands : thousands.toFixed(1)}K`;
}
