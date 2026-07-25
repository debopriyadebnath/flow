import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(244,231,255,0.95),_transparent_40%),linear-gradient(180deg,#fff9fd_0%,#fff_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-10">
        <section className="max-w-3xl space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-violet-500">HERmony</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">Find your rhythm. Live in HERmony.</h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            An AI-powered women&apos;s wellness companion that helps you understand your cycle, track mood, manage PCOS
            symptoms, and build healthier daily habits in one private space.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/register">Get started</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/dashboard">Open dashboard</Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
