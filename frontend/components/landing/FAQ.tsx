"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is HERmony free to use?",
    answer:
      "Yes. The core features including cycle tracking, mood tracking, journaling and wellness insights are completely free.",
  },
  {
    question: "Can HERmony help with PCOS?",
    answer:
      "HERmony helps you monitor symptoms, track irregular cycles and organise health information. It is not a substitute for professional medical advice.",
  },
  {
    question: "Is my health data private?",
    answer:
      "Absolutely. Your information is encrypted and only accessible by you.",
  },
  {
    question: "Does HERmony predict periods?",
    answer:
      "Yes. HERmony predicts upcoming periods, ovulation and fertile windows using your recorded cycle history.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-[#fff9fd] py-28 px-6">

      <div className="mx-auto max-w-4xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >

          <p className="font-semibold uppercase tracking-[0.3em] text-pink-500">
            FAQ
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

        </motion.div>

        <Accordion
          type="single"
          collapsible
          className="space-y-5"
        >

          {faqs.map((faq, index) => (

            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-3xl border bg-white px-8 shadow-lg"
            >

              <AccordionTrigger className="text-left text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="leading-8 text-slate-600">
                {faq.answer}
              </AccordionContent>

            </AccordionItem>

          ))}

        </Accordion>

      </div>

    </section>
  );
}