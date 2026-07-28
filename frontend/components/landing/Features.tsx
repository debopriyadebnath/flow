"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Brain,
  Heart,
  Droplets,
  NotebookPen,
  ShieldCheck,
} from "lucide-react";

import { GlassCard } from "../hermony/glass-card";

const features = [
  {
    icon: CalendarDays,
    title: "Smart Cycle Tracking",
    description:
      "Predict upcoming periods, ovulation, fertile window and receive intelligent reminders.",
    color: "text-pink-500",
  },
  {
    icon: Brain,
    title: "AI Health Assistant",
    description:
      "Chat with AI to understand symptoms, hormones, PCOS and everyday wellness.",
    color: "text-violet-500",
  },
  {
    icon: Heart,
    title: "Mood Analysis",
    description:
      "Track emotions, discover patterns and understand how your cycle affects your mood.",
    color: "text-rose-500",
  },
  {
    icon: Droplets,
    title: "Healthy Habits",
    description:
      "Monitor hydration, sleep, workouts and medication from one dashboard.",
    color: "text-sky-500",
  },
  {
    icon: NotebookPen,
    title: "Private Journal",
    description:
      "Write daily reflections, symptoms and memories securely in your personal journal.",
    color: "text-orange-500",
  },
  {
    icon: ShieldCheck,
    title: "Privacy First",
    description:
      "Your health data stays encrypted, secure and completely under your control.",
    color: "text-emerald-500",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative bg-[#fff9fd] py-28 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-pink-500 font-semibold uppercase tracking-[0.3em]">
            FEATURES
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Everything you need,
            <br />
            all in one place.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            HERmony combines AI, wellness tracking and personalised insights
            to help women understand their bodies better every single day.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
              >

                <GlassCard
                  className="
                  h-full
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-2xl
                  "
                >

                  <Icon
                    className={`h-10 w-10 ${feature.color}`}
                  />

                  <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {feature.description}
                  </p>

                </GlassCard>

              </motion.div>

            );
          })}

        </div>

      </div>
    </section>
  );
}