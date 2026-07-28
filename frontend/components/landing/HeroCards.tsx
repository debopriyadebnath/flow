"use client";

import { motion } from "framer-motion";
import { Sparkles, Droplets, Heart, Calendar } from "lucide-react";

import { GlassCard } from "../hermony/glass-card";

export default function HeroCards() {
  return (
    <div className="hidden lg:flex flex-1 justify-end">

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="grid w-[420px] grid-cols-2 gap-5"
      >

        <GlassCard>
          <Calendar className="mb-3 h-8 w-8 text-pink-500" />

          <p className="text-sm text-gray-500">
            Current Cycle
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            Day 16
          </h3>

          <p className="mt-1 text-pink-500">
            Ovulation Phase
          </p>
        </GlassCard>

        <GlassCard className="mt-10">
          <Heart className="mb-3 h-8 w-8 text-rose-500" />

          <p className="text-sm text-gray-500">
            Mood Today
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            Happy 😊
          </h3>

          <p className="mt-1 text-pink-500">
            Energy High
          </p>
        </GlassCard>

        <GlassCard>
          <Droplets className="mb-3 h-8 w-8 text-sky-500" />

          <p className="text-sm text-gray-500">
            Water Intake
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            5 / 8
          </h3>

          <p className="mt-1 text-sky-500">
            Glasses
          </p>
        </GlassCard>

        <GlassCard className="mt-10">
          <Sparkles className="mb-3 h-8 w-8 text-violet-500" />

          <p className="text-sm text-gray-500">
            AI Insight
          </p>

          <p className="mt-2 font-medium">
            Great day for a light workout and plenty of hydration 🌸
          </p>
        </GlassCard>

      </motion.div>

    </div>
  );
}