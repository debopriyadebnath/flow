"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { GlassCard } from "../hermony/glass-card";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "College Student",
    review:
      "HERmony helped me understand my cycle for the first time. The AI insights are surprisingly helpful and easy to understand.",
  },
  {
    name: "Ananya Roy",
    role: "Software Engineer",
    review:
      "I love having my journal, mood tracker and cycle tracker all in one place. It has become part of my daily routine.",
  },
  {
    name: "Megha Patel",
    role: "Working Professional",
    review:
      "The PCOS tracking and reminders keep me consistent. The interface is beautiful and calming to use.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-28 px-6">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-pink-500">
            TESTIMONIALS
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Loved by women everywhere.
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">

          {testimonials.map((user, index) => (

            <motion.div
              key={user.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
            >
              <GlassCard className="h-full">

                <div className="flex gap-1 text-yellow-400">

                  <Star fill="currentColor" size={18}/>
                  <Star fill="currentColor" size={18}/>
                  <Star fill="currentColor" size={18}/>
                  <Star fill="currentColor" size={18}/>
                  <Star fill="currentColor" size={18}/>

                </div>

                <p className="mt-6 leading-8 text-slate-600">
                  "{user.review}"
                </p>

                <div className="mt-8">

                  <h3 className="font-semibold text-slate-900">
                    {user.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {user.role}
                  </p>

                </div>

              </GlassCard>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}