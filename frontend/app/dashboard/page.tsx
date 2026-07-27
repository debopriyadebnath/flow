"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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

import { getCycles } from "@/services/cycles";
import { getProfile } from "@/services/auth";


export default function DashboardPage() {

  const [cycleDay, setCycleDay] = useState<number | null>(null);
  const [nextPeriod, setNextPeriod] = useState("");
  const [userName, setUserName] = useState("");



  useEffect(() => {

    async function loadDashboardData() {

      const token = localStorage.getItem("access");

      if (!token) return;


      try {

        // Load profile name

        const profileData = await getProfile(token);

        console.log(
          "PROFILE:",
          profileData
        );


        const user =
          profileData.user || profileData;


        setUserName(
          user.first_name || ""
        );



        // Load cycle data

        const response = await getCycles(token);


        console.log(
          "CYCLE RESPONSE:",
          response
        );


        const cycles = Array.isArray(response)
          ? response
          : response.results || [];



        if (cycles.length > 0) {


          const cycle = cycles[0];


          const startDate = new Date(
            cycle.last_period_start
          );


          const today = new Date();



          const diff =
            Math.floor(
              (
                today.getTime() -
                startDate.getTime()
              ) /
              (1000 * 60 * 60 * 24)
            ) + 1;



          setCycleDay(diff);




          const nextDate = new Date(
            startDate
          );


          nextDate.setDate(
            nextDate.getDate() +
            cycle.cycle_length_days
          );



          setNextPeriod(
            nextDate.toDateString()
          );

        }



      } catch(error) {

        console.log(
          "Dashboard error:",
          error
        );

      }

    }


    loadDashboardData();


  }, []);





  const cards = [

    {
      title: "Current Cycle Day",

      value:
        cycleDay
          ? `Day ${cycleDay}`
          : "Add cycle",

      subtitle:
        "Track your cycle phase and understand your body's rhythm.",

      icon:
        <CalendarDays className="h-5 w-5" />,

      tone: "lavender" as const,
    },


    {
      title: "Today's Mood",

      value:
        "Calm + focused",

      subtitle:
        "Log your mood daily to discover patterns.",

      icon:
        <HeartPulse className="h-5 w-5" />,

      tone: "rose" as const,
    },


    {
      title: "Water Intake",

      value:
        "1.4L / 2.5L",

      subtitle:
        "Keep sipping steadily throughout the day.",

      icon:
        <Droplets className="h-5 w-5" />,

      tone: "sky" as const,
    },


    {
      title: "Medication Reminder",

      value:
        "6:30 PM",

      subtitle:
        "Never miss important reminders.",

      icon:
        <BellRing className="h-5 w-5" />,

      tone: "gold" as const,
    },


    {
      title: "AI Tip of the Day",

      value:
        "Prioritize protein",

      subtitle:
        "Personalized wellness tips coming soon.",

      icon:
        <BrainCircuit className="h-5 w-5" />,

      tone: "mint" as const,
    },


    {
      title: "Next Period",

      value:
        nextPeriod || "Add cycle",

      subtitle:
        "Based on your cycle information.",

      icon:
        <Sparkles className="h-5 w-5" />,

      tone: "lavender" as const,
    },


    {
      title: "Journal Shortcut",

      value:
        "3 min check-in",

      subtitle:
        "Write down symptoms, feelings and thoughts.",

      icon:
        <BookOpenText className="h-5 w-5" />,

      tone: "rose" as const,
    },


    {
      title: "Daily Affirmation",

      value:
        "I honor my body's rhythm.",

      subtitle:
        "Small steps create healthy habits.",

      icon:
        <MessageCircleHeart className="h-5 w-5" />,

      tone: "sky" as const,
    },

  ];





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

                👋 Hello
                {userName && `, ${userName}`}

              </h1>


              <p className="max-w-2xl text-base leading-7 text-slate-600">

                Here is your wellness snapshot for today. Everything you need is in one calm place.

              </p>


            </div>




            <div className="flex flex-wrap gap-3">


              <Button asChild>

                <Link href="/profile">
                  Update profile
                </Link>

              </Button>



              <Button variant="secondary" asChild>

                <Link href="/cycle">
                  Add cycle
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