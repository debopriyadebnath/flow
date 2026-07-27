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

import { GlassCard } from "@/components/hermony/glass-card";
import { GradientBadge } from "@/components/hermony/gradient-badge";

import { getCycles } from "@/services/cycles";
import { getMoods } from "@/services/mood";



export default function DashboardPage() {


  const [cycle, setCycle] = useState<any>(null);

  const [latestMood, setLatestMood] = useState<any>(null);



  useEffect(() => {


    async function loadDashboard() {


      const token = localStorage.getItem("access");


      if (!token) return;



      try {


        const cycleData = await getCycles(token);

        const moodData = await getMoods(token);



        setCycle(
          cycleData?.[0] || null
        );


        setLatestMood(
          moodData?.[0] || null
        );


      } catch(error) {

        console.log(
          "Dashboard error:",
          error
        );

      }


    }



    loadDashboard();


  }, []);





  const cards = [


    {
      title: "Cycle Journey",

      value:
        cycle
        ? `${cycle.cycle_length_days} days`
        : "Start tracking",

      subtitle:
        cycle
        ? "Your cycle rhythm is being monitored ✨"
        : "Add your first cycle entry",

      icon:
        <CalendarDays className="h-5 w-5" />,

    },



    {
      title: "Today's Mood",

      value:
        latestMood?.mood ||
        "No mood yet",

      subtitle:
        latestMood?.note ||
        "Take a moment to check in 💗",

      icon:
        <HeartPulse className="h-5 w-5" />,

    },



    {
      title: "Hydration",

      value:
        "1.4L",

      subtitle:
        "Keep nourishing yourself 🌊",

      icon:
        <Droplets className="h-5 w-5" />,

    },



    {
      title: "Medication",

      value:
        "No reminders",

      subtitle:
        "Add your health reminders",

      icon:
        <BellRing className="h-5 w-5" />,

    },



    {
      title: "AI Wellness",

      value:
        "Coming soon",

      subtitle:
        "Personalised insights powered by AI 🤖",

      icon:
        <BrainCircuit className="h-5 w-5" />,

    },



    {
      title: "Next Period",

      value:
        cycle
        ? "Estimated soon"
        : "Add cycle",

      subtitle:
        "Based on your tracking history",

      icon:
        <Sparkles className="h-5 w-5" />,

    },



    {
      title: "Journal",

      value:
        "3 min",

      subtitle:
        "Write your thoughts today",

      icon:
        <BookOpenText className="h-5 w-5" />,

    },



    {
      title: "Affirmation",

      value:
        "I trust my body",

      subtitle:
        "Your rhythm matters 🌸",

      icon:
        <MessageCircleHeart className="h-5 w-5" />,

    },


  ];






  return (

    <main
      className="
      min-h-screen
      bg-[#fff8fc]
      p-6
      "
    >


      <div
        className="
        mx-auto
        max-w-7xl
        space-y-8
        "
      >



        {/* HERO SECTION */}


        <GlassCard
          className="
          bg-gradient-to-br
          from-pink-100
          via-purple-50
          to-blue-100
          "
        >


          <GradientBadge>
            🌸 HERmony Wellness
          </GradientBadge>



          <h1
            className="
            mt-5
            text-5xl
            font-bold
            text-slate-800
            "
          >

            Hello, Debopriya ✨

          </h1>



          <p
            className="
            mt-3
            max-w-xl
            text-lg
            text-slate-600
            "
          >

            Your body has a rhythm.
            Let's understand it together 💗

          </p>




          <div
            className="
            mt-8
            flex
            flex-wrap
            gap-4
            "
          >


            <div
              className="
              rounded-3xl
              bg-white/70
              p-5
              "
            >

              <p className="text-sm text-slate-500">
                Wellness Score
              </p>


              <p
                className="
                text-3xl
                font-bold
                text-pink-500
                "
              >
                82%
              </p>


            </div>





            <div
              className="
              rounded-3xl
              bg-white/70
              p-5
              "
            >

              <p className="text-sm text-slate-500">
                Tracking Streak
              </p>


              <p
                className="
                text-3xl
                font-bold
                "
              >

                🔥 7 days

              </p>


            </div>


          </div>




          <div className="mt-8 flex gap-3">


            <Button asChild>

              <Link href="/cycles">
                Track Cycle
              </Link>

            </Button>



            <Button
              variant="secondary"
              asChild
            >

              <Link href="/mood">
                Log Mood
              </Link>

            </Button>


          </div>



        </GlassCard>






        {/* CARDS */}



        <section
          className="
          grid
          gap-5
          md:grid-cols-2
          xl:grid-cols-3
          "
        >


          {cards.map((card)=>(


            <GlassCard
              key={card.title}
            >


              <div
                className="
                flex
                items-center
                gap-3
                text-pink-500
                "
              >

                {card.icon}


                <h2
                  className="
                  font-semibold
                  text-slate-800
                  "
                >

                  {card.title}

                </h2>


              </div>




              <p
                className="
                mt-5
                text-3xl
                font-bold
                text-slate-900
                "
              >

                {card.value}

              </p>




              <p
                className="
                mt-3
                text-sm
                leading-6
                text-slate-600
                "
              >

                {card.subtitle}

              </p>



            </GlassCard>


          ))}



        </section>




      </div>


    </main>

  );


}