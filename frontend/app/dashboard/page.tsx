"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  BellRing,
  BookOpenText,
  BrainCircuit,
  CalendarDays,
  Droplets,
  HeartPulse,
  MessageCircleHeart,
  Sparkles,
} from "lucide-react";

import { DashboardCard } from "@/components/dashboard/dashboard-card";
import { Button } from "@/components/ui/button";


const cards = [
  {
    title: "Current Cycle Day",
    value: "Day 18",
    subtitle:
      "You are likely in your ovulation window. Great time for deep work and gentle movement.",
    icon: <CalendarDays className="h-5 w-5" />,
    tone: "lavender" as const,
  },
  {
    title: "Today's Mood",
    value: "Calm + focused",
    subtitle:
      "Your last three mood logs suggest steady energy with mild afternoon dips.",
    icon: <HeartPulse className="h-5 w-5" />,
    tone: "rose" as const,
  },
  {
    title: "Water Intake",
    value: "1.4L / 2.5L",
    subtitle:
      "Keep sipping steadily. Hydration is especially helpful during this phase.",
    icon: <Droplets className="h-5 w-5" />,
    tone: "sky" as const,
  },
  {
    title: "Medication Reminder",
    value: "6:30 PM",
    subtitle:
      "Medication reminder for today.",
    icon: <BellRing className="h-5 w-5" />,
    tone: "gold" as const,
  },
  {
    title: "AI Tip of the Day",
    value: "Prioritize protein",
    subtitle:
      "Balanced meals can support energy and wellness.",
    icon: <BrainCircuit className="h-5 w-5" />,
    tone: "mint" as const,
  },
  {
    title: "Next Period",
    value: "In 10 days",
    subtitle:
      "Based on your cycle tracking.",
    icon: <Sparkles className="h-5 w-5" />,
    tone: "lavender" as const,
  },
  {
    title: "Journal Shortcut",
    value: "3 min check-in",
    subtitle:
      "Write your symptoms, mood, or thoughts.",
    icon: <BookOpenText className="h-5 w-5" />,
    tone: "rose" as const,
  },
  {
    title: "Daily Affirmation",
    value: "I honor my body's rhythm.",
    subtitle:
      "A reminder that progress can be gentle.",
    icon: <MessageCircleHeart className="h-5 w-5" />,
    tone: "sky" as const,
  },
];


export default function DashboardPage() {

  const [userName, setUserName] = useState("there");


  useEffect(() => {

    const savedUser = localStorage.getItem("user");

    if (savedUser) {

      const user = JSON.parse(savedUser);

      setUserName(user.first_name);

    }

  }, []);



  return (

    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(244,231,255,0.95),_transparent_40%),linear-gradient(180deg,#fff9fd_0%,#fff 100%)] px-4 py-8 sm:px-6 lg:px-8">

      <div className="mx-auto flex max-w-7xl flex-col gap-8">


        <header className="overflow-hidden rounded-[2rem] border border-black/5 bg-white/80 p-6 shadow-sm backdrop-blur md:p-8">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">


            <div className="space-y-3">

              <p className="text-sm font-medium uppercase tracking-[0.24em] text-violet-500">
                HERmony
              </p>


              <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                👋 Hello, {userName}
              </h1>


              <p className="max-w-2xl text-base leading-7 text-slate-600">
                Here is your wellness snapshot for today. Everything you need is
                in one calm place, from cycle insights to gentle nudges for
                hydration, mood, and medication.
              </p>

            </div>



            <div className="flex flex-wrap gap-3">

              <Button asChild>
                <Link href="/profile">
                  Update profile
                </Link>
              </Button>


              <Button variant="secondary" asChild>
                <Link href="/register">
                  Invite support
                </Link>
              </Button>

            </div>


          </div>

        </header>



        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

          {cards.map((card) => (

            <DashboardCard
              key={card.title}
              {...card}
            />

          ))}

        </section>


      </div>

    </main>

  );
}