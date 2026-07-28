"use client";

import { motion } from "framer-motion";
import { HeartHandshake, ShieldCheck, Brain, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: HeartHandshake,
    number: "12K+",
    title: "Women Supported",
    color: "text-pink-500",
  },
  {
    icon: TrendingUp,
    number: "98%",
    title: "Prediction Accuracy",
    color: "text-violet-500",
  },
  {
    icon: Brain,
    number: "24/7",
    title: "AI Assistance",
    color: "text-sky-500",
  },
  {
    icon: ShieldCheck,
    number: "100%",
    title: "Private & Secure",
    color: "text-emerald-500",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#fff9fd] py-24 px-6">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat, index) => {

            const Icon = stat.icon;

            return (

              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                className="rounded-3xl bg-white p-8 text-center shadow-xl"
              >

                <Icon
                  className={`mx-auto h-10 w-10 ${stat.color}`}
                />

                <h2 className="mt-6 text-5xl font-bold text-slate-900">
                  {stat.number}
                </h2>

                <p className="mt-3 text-slate-600">
                  {stat.title}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}