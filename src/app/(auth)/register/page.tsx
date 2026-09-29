"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { GoogleIcon, GithubIcon } from "@/components/ui/Icons";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  BookOpen,
  Clock,
  Star,
  Users,
  CheckCircle2,
} from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert("Please agree to the Terms of Service to continue.");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      window.location.href = "/courses";
    }, 800);
  };

  return (
    <div className="min-h-screen flex w-full bg-white">
      {/* Left Panel: Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between p-6 sm:p-12 lg:p-16 xl:p-20 overflow-y-auto">
        {/* Top Header */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-primary-800 flex items-center justify-center text-white font-bold shadow-md shadow-primary-800/20">
              <span className="text-lg font-poppins">B</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-400 -ml-0.5 mt-2"></span>
            </div>
            <span className="text-xl font-bold font-poppins text-neutral-950 tracking-tight">
              Byte<span className="text-primary-800">Space</span>
            </span>
          </Link>
          <Link
            href="/"
            className="text-xs font-semibold text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            ← Back to website
          </Link>
        </div>

        {/* Center: Register Form */}
        <div className="max-w-md w-full mx-auto my-auto py-4">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-800 mb-1 block font-poppins">
              Welcome to ByteSpace
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-poppins text-neutral-950 tracking-tight">
              Create an Account
            </h1>
            <p className="text-sm text-neutral-600 mt-2">
              Sign up today and get instant access to hundreds of courses.
            </p>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            <button
              type="button"
              className="flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl border border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300 text-xs font-semibold text-neutral-700 transition-all"
            >
              <GoogleIcon className="w-4 h-4" />
              <span>Google</span>
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl border border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300 text-xs font-semibold text-neutral-700 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </button>
          </div>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-neutral-200" />
            <span className="text-xs text-neutral-400 font-medium uppercase">
              or register with email
            </span>
            <div className="flex-1 h-px bg-neutral-200" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="block text-xs font-bold font-poppins uppercase tracking-wider text-neutral-700 mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Jamie Davis"
                  required
                  className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all"
                />
                <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold font-poppins uppercase tracking-wider text-neutral-700 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="designer@example.com"
                  required
                  className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all"
                />
                <Mail className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold font-poppins uppercase tracking-wider text-neutral-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  minLength={6}
                  className="w-full pl-10 pr-10 py-2.5 text-sm rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all"
                />
                <Lock className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3 text-neutral-400 hover:text-neutral-600 focus:outline-none"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-2 pt-1">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="w-4 h-4 mt-0.5 rounded border-neutral-300 text-primary-800 focus:ring-primary-500 cursor-pointer"
              />
              <label
                htmlFor="terms"
                className="text-xs text-neutral-600 cursor-pointer font-medium leading-tight"
              >
                I agree to the{" "}
                <Link href="/terms" className="text-primary-800 font-bold hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-primary-800 font-bold hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <Button
              type="submit"
              variant="filled"
              colorScheme="primary"
              size="lg"
              disabled={isLoading}
              className="w-full justify-center text-sm font-bold shadow-md shadow-primary-800/20 mt-2"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              {isLoading ? "Creating Account..." : "Continue"}
            </Button>
          </form>

          <p className="text-center text-xs text-neutral-600 mt-5 font-medium">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary-800 font-bold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>

        {/* Bottom footer note */}
        <div className="text-xs text-neutral-400 text-center pt-4">
          © {new Date().getFullYear()} ByteSpace Inc.
        </div>
      </div>

      {/* Right Panel: Brand Promotional Visual (from Figma Frame 47:351) */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-primary-950 via-primary-900 to-neutral-950 p-12 xl:p-16 flex-col justify-between relative overflow-hidden text-white">
        {/* Glow decoration */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary-600/20 rounded-full blur-3xl pointer-events-none" />

        {/* Top badge */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-accent-400" />
          </div>
          <span className="text-xs font-semibold tracking-wider uppercase text-neutral-300">
            ByteSpace Community
          </span>
        </div>

        {/* Middle Visual: Showcase Card */}
        <div className="my-auto max-w-md w-full mx-auto space-y-6">
          <div>
            <h2 className="text-3xl xl:text-4xl font-extrabold font-poppins text-white leading-tight mb-3">
              Sign up and come in
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed">
              The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.
            </p>
          </div>

          {/* Floating Course Preview Card */}
          <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-2xl">
            <div className="flex items-center justify-between mb-3 text-xs text-neutral-300">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-accent-400" />
                17 Lessons
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-accent-400" />
                2 hours 16 mins
              </span>
              <span className="px-2 py-0.5 rounded-md bg-accent-400 text-neutral-950 font-bold text-[10px]">
                Beginner
              </span>
            </div>

            <h4 className="text-base font-bold font-poppins text-white mb-2">
              The Power of Big Data & Machine Learning
            </h4>
            <p className="text-xs text-neutral-400 mb-4">by purepearl studio</p>

            <div className="flex items-center justify-between pt-3 border-t border-white/10">
              <div className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-accent-400 text-accent-400" />
                <span className="text-xs font-bold text-white">4.9</span>
                <span className="text-[11px] text-neutral-400">(240 reviews)</span>
              </div>
              <span className="text-lg font-bold font-poppins text-accent-400">
                $25 <span className="text-xs text-neutral-400 font-normal">/lifetime</span>
              </span>
            </div>
          </div>

          {/* Happy students counter */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-accent-400/20 flex items-center justify-center text-accent-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-neutral-400">Join Community</p>
                <p className="text-sm font-bold text-white font-poppins">10,000+ Creators</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-accent-400 text-xs font-bold">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>4.9 / 5.0 Rating</span>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="text-xs text-neutral-400 flex items-center justify-between">
          <span>Free registration • No credit card required</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        </div>
      </div>
    </div>
  );
}
