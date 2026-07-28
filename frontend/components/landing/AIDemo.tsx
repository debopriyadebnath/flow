"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AIDemo() {
  return (
    <section
      id="ai"
      className="bg-white py-28 px-6"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
        >

          <p className="font-semibold uppercase tracking-[0.3em] text-pink-500">
            HERMONY AI
          </p>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            Your personal
            <br />
            AI wellness companion.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Ask anything about your cycle, hormones, PCOS, nutrition,
            symptoms or emotional wellbeing.
            HERmony AI gives thoughtful,
            personalised guidance whenever you need it.
          </p>

          <Button
            className="mt-10 rounded-full bg-pink-500 px-8 py-6 hover:bg-pink-600"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Try HERmony AI
          </Button>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="space-y-6"
        >

          {/* User */}

          <div className="ml-auto max-w-md rounded-3xl bg-pink-500 p-5 text-white shadow-xl">
            <p className="font-semibold">
              You
            </p>

            <p className="mt-2">
              I've been feeling tired before my periods lately.
              Is that normal?
            </p>
          </div>

          {/* AI */}

          <div className="max-w-lg rounded-3xl border border-pink-100 bg-pink-50 p-6 shadow-xl">

            <p className="font-semibold text-pink-500">
              HERmony AI 🌸
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Fatigue before your period can happen because of hormonal
              changes. Staying hydrated, eating iron-rich foods and getting
              enough sleep may help. If symptoms become severe or affect
              daily life, it's a good idea to consult a healthcare
              professional.
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}