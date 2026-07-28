"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, BrainCircuit } from "lucide-react";

export default function DashboardPreview() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff9fd] to-white py-28">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-pink-200/30 blur-[140px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row">

        {/* Left Side */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >

          <p className="font-semibold uppercase tracking-[0.3em] text-pink-500">
            DASHBOARD
          </p>

          <h2 className="mt-5 text-5xl font-bold leading-tight text-slate-900">
            Everything important,
            <br />
            always within reach.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Track your cycle, monitor moods, chat with AI, record journals,
            analyse symptoms and build healthier habits from one beautiful
            dashboard.
          </p>

          <div className="mt-10 space-y-6">

            <div className="flex items-start gap-4">
              <BrainCircuit className="mt-1 text-violet-500" />
              <div>
                <h3 className="font-semibold text-slate-900">
                  AI Wellness Insights
                </h3>
                <p className="text-slate-600">
                  Smart recommendations based on your health data.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Sparkles className="mt-1 text-pink-500" />
              <div>
                <h3 className="font-semibold text-slate-900">
                  Personalised Experience
                </h3>
                <p className="text-slate-600">
                  Every prediction adapts to your lifestyle and cycle.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <ShieldCheck className="mt-1 text-emerald-500" />
              <div>
                <h3 className="font-semibold text-slate-900">
                  Private & Secure
                </h3>
                <p className="text-slate-600">
                  Your health data remains encrypted and protected.
                </p>
              </div>
            </div>

          </div>

        </motion.div>

        {/* Phone Mockup */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-1 justify-center"
        >

          <div className="rounded-[3rem] bg-slate-900 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.25)]">

            <div className="h-[640px] w-[320px] overflow-hidden rounded-[2.5rem] bg-white">

              {/* Replace this later with your real dashboard screenshot */}

              <div className="flex h-full items-center justify-center bg-gradient-to-br from-pink-50 via-white to-violet-50">

                <div className="text-center">

                  <p className="text-sm uppercase tracking-[0.3em] text-pink-500">
                    HERmony
                  </p>

                  <h3 className="mt-4 text-3xl font-bold text-slate-900">
                    Dashboard Preview
                  </h3>

                  <p className="mt-4 px-10 text-slate-600">
                    Your real dashboard screenshot will appear here after we
                    finish building it.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}