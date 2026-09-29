import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outlined" | "ghost" | "round";
  colorScheme?: "primary" | "accent" | "neutral" | "white";
  size?: "sm" | "md" | "lg" | "icon";
  href?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "filled",
      colorScheme = "primary",
      size = "md",
      href,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    // Size styles
    const sizeStyles = {
      sm: "text-xs px-3 py-1.5 rounded-lg gap-1.5",
      md: "text-sm px-5 py-2.5 rounded-xl gap-2",
      lg: "text-base px-6 py-3.5 rounded-xl gap-2.5 font-semibold",
      icon: "p-2.5 rounded-full",
    };

    // Color & Variant combination styles
    let variantStyles = "";

    if (variant === "filled") {
      switch (colorScheme) {
        case "primary":
          variantStyles =
            "bg-primary-800 text-white hover:bg-primary-700 active:bg-primary-900 focus:ring-primary-400 shadow-sm";
          break;
        case "accent":
          variantStyles =
            "bg-accent-400 text-neutral-950 hover:bg-accent-300 active:bg-accent-500 focus:ring-accent-400 font-semibold shadow-sm";
          break;
        case "neutral":
          variantStyles =
            "bg-neutral-950 text-white hover:bg-neutral-800 active:bg-neutral-900 focus:ring-neutral-400";
          break;
        case "white":
          variantStyles =
            "bg-white text-neutral-950 hover:bg-neutral-50 active:bg-neutral-100 focus:ring-neutral-300 shadow-sm";
          break;
      }
    } else if (variant === "outlined") {
      switch (colorScheme) {
        case "primary":
          variantStyles =
            "border border-primary-800 text-primary-800 bg-transparent hover:bg-primary-50 active:bg-primary-100 focus:ring-primary-300";
          break;
        case "accent":
          variantStyles =
            "border border-accent-600 text-neutral-950 bg-transparent hover:bg-accent-50 active:bg-accent-100 focus:ring-accent-300";
          break;
        case "neutral":
          variantStyles =
            "border border-neutral-200 text-neutral-800 bg-transparent hover:bg-neutral-50 hover:border-neutral-300 active:bg-neutral-100 focus:ring-neutral-300";
          break;
        case "white":
          variantStyles =
            "border border-white/40 text-white bg-transparent hover:bg-white/10 active:bg-white/20 focus:ring-white/50";
          break;
      }
    } else if (variant === "ghost") {
      switch (colorScheme) {
        case "primary":
          variantStyles =
            "text-primary-800 bg-transparent hover:bg-primary-50 active:bg-primary-100";
          break;
        case "accent":
          variantStyles =
            "text-neutral-950 bg-transparent hover:bg-accent-100 active:bg-accent-200";
          break;
        case "neutral":
          variantStyles =
            "text-neutral-700 bg-transparent hover:bg-neutral-100 active:bg-neutral-200";
          break;
        case "white":
          variantStyles =
            "text-white bg-transparent hover:bg-white/10 active:bg-white/20";
          break;
      }
    } else if (variant === "round") {
      variantStyles =
        "rounded-full p-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 active:scale-95";
    }

    const combinedClasses = cn(
      baseStyles,
      sizeStyles[size],
      variantStyles,
      className
    );

    if (href) {
      return (
        <Link href={href} className={combinedClasses}>
          {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={combinedClasses}
        {...props}
      >
        {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
