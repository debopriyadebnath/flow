import Link from "next/link";

import { Button } from "@/components/ui/button";
import HeroCards from "@/components/landing/HeroCards";
import LandingNavbar from "@/components/landing/LandingNavbar";
import Features from "@/components/landing/Features";
import DashboardPreview from "@/components/landing/DashboardPreview";
import AIDemo from "@/components/landing/AIDemo";
import Stats from "@/components/landing/Stats";
import Testimonials from "@/components/landing/Testimonials";
export default function HomePage() {
  return (
    <>
      <main className="relative min-h-screen overflow-hidden">
      <LandingNavbar />

      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/videos/hermony-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">

        <section className="max-w-3xl space-y-8 text-white">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-pink-200">
            HERmony
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
            Find your rhythm.
            <br />
            Live in HERmony.
          </h1>

          <p className="max-w-xl text-base leading-7 text-gray-200 sm:text-lg sm:leading-8">
            An AI-powered women's wellness companion that helps you understand
            your cycle, track moods, manage PCOS symptoms, receive personalised
            health insights, and build healthier habits—all in one safe,
            private space.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">

            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/register">
                Get Started
              </Link>
            </Button>

            <Button
  variant="secondary"
  asChild
  size="lg"
  className="w-full sm:w-auto"
>
              <Link href="/dashboard">
                Open Dashboard
              </Link>
            </Button>

          </div>

        </section>
        <HeroCards />

      </div>

      </main>
      <Features />
      <DashboardPreview />
      <AIDemo />
      <Stats />
      <Testimonials />
    </>
  );
}