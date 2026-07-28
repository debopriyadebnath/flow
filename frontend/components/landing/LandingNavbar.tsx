"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function LandingNavbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="fixed top-6 left-1/2 z-50 -translate-x-1/2"
    >
      <div
        className="
          flex
          items-center
          gap-16
          rounded-full
          border
          border-white/20
          bg-white/10
          px-10
          py-4
          backdrop-blur-2xl
          shadow-[0_10px_50px_rgba(0,0,0,0.18)]
        "
      >
        {/* Logo */}

        <Link
          href="/"
          className="
            text-3xl
            font-bold
            tracking-tight
            text-white
          "
        >
          HER
          <span className="text-pink-300">mony</span>
        </Link>

        {/* Navigation */}

        <div className="hidden lg:flex items-center gap-8">

          <a
            href="#features"
            className="text-white transition duration-300 hover:text-pink-300"
          >
            Features
          </a>

          <a
            href="#ai"
            className="text-white transition duration-300 hover:text-pink-300"
          >
            AI
          </a>

          <a
            href="#pcos"
            className="text-white transition duration-300 hover:text-pink-300"
          >
            PCOS
          </a>

          <a
            href="#about"
            className="text-white transition duration-300 hover:text-pink-300"
          >
            About
          </a>

        </div>

        {/* Buttons */}

        <div className="hidden lg:flex items-center gap-3">

          <Link
            href="/login"
            className="
              rounded-full
              border
              border-white/30
              px-5
              py-2
              text-white
              transition-all
              duration-300
              hover:bg-white/10
            "
          >
            Login
          </Link>

          <Link
            href="/register"
            className="
              rounded-full
              bg-pink-500
              px-5
              py-2
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:bg-pink-600
            "
          >
            Get Started
          </Link>

        </div>
      </div>
    </motion.nav>
  );
}