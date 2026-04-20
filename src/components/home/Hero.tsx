"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Clock, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0f1e]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(249,115,22,0.08),transparent_60%)]" />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "64px 64px" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-orange-400 mb-8">
          <Star className="w-4 h-4 fill-orange-400" />
          Trusted by 500+ Contractors Worldwide
        </motion.div>

        {/* Headline */}
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Precision. Speed.{" "}
          <span className="gradient-text">Reliability.</span>
          <br />
          <span className="text-4xl md:text-5xl lg:text-6xl">Your Estimation Partner</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
          We deliver fast, accurate construction cost estimates for General Contractors & Subcontractors globally. Stop missing bids — let us handle the numbers.
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/get-a-quote" className="flex items-center gap-2 px-8 py-4 gradient-bg rounded-xl text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-orange-500/20">
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="/how-it-works" className="flex items-center gap-2 px-8 py-4 glass rounded-xl text-white font-semibold text-lg hover:bg-white/10 transition-colors">
            How It Works
          </Link>
        </motion.div>

        {/* Trust Badges */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="flex flex-col sm:flex-row items-center justify-center gap-8">
          {[
            { icon: <Shield className="w-5 h-5 text-orange-500" />, text: "Accuracy Guaranteed" },
            { icon: <Clock className="w-5 h-5 text-orange-500" />, text: "24–48hr Turnaround" },
            { icon: <Star className="w-5 h-5 text-orange-500" />, text: "500+ Happy Clients" },
          ].map((b, i) => (
            <div key={i} className="flex items-center gap-2 text-gray-400">
              {b.icon}
              <span className="text-sm font-medium">{b.text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0f1e] to-transparent" />
    </section>
  );
}
