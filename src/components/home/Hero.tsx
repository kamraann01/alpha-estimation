"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Clock, Star, CheckCircle, TrendingUp } from "lucide-react";

const trustBadges = [
  { icon: Shield, text: "Accuracy Guaranteed" },
  { icon: Clock, text: "24–48hr Turnaround" },
  { icon: Star, text: "500+ Happy Clients" },
];

const floatingCards = [
  {
    icon: CheckCircle,
    color: "text-green-400",
    bg: "bg-green-400/10",
    title: "Estimate Delivered",
    sub: "Commercial Office — $2.1M",
    time: "2 hours ago",
  },
  {
    icon: TrendingUp,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    title: "Bid Won",
    sub: "Residential Development — 45 units",
    time: "Yesterday",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#0a0f1e]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(249,115,22,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_80%,rgba(249,115,22,0.06),transparent)]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Copy */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-orange-400 mb-7 border border-orange-500/20"
            >
              <Star className="w-3.5 h-3.5 fill-orange-400" />
              Trusted by 500+ Contractors Worldwide
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
            >
              Win More Bids
              <br />
              With{" "}
              <span className="gradient-text">Precision</span>
              <br />
              Estimates.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-400 leading-relaxed mb-10 max-w-xl"
            >
              We deliver fast, accurate construction cost estimates for General Contractors & Subcontractors worldwide — so you can bid confidently and grow your business.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                href="/get-a-quote"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 gradient-bg rounded-xl text-white font-bold text-base hover:opacity-90 transition-all shadow-lg shadow-orange-500/25"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass rounded-xl text-white font-semibold text-base hover:bg-white/8 transition-colors border border-white/10 hover:border-white/20"
              >
                View Services
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-6"
            >
              {trustBadges.map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-400">
                  <b.icon className="w-4 h-4 text-orange-500" />
                  <span className="text-sm">{b.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Visual */}
          <div className="hidden lg:block relative">
            {/* Main card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass rounded-3xl p-8 border border-white/10"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-gray-400 text-sm">Project Estimate</p>
                  <h3 className="text-white font-bold text-lg">Commercial Office — 12,000 sq ft</h3>
                </div>
                <span className="px-3 py-1 bg-green-500/15 text-green-400 text-xs font-semibold rounded-full border border-green-500/20">
                  Delivered
                </span>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  { label: "Concrete & Foundations", value: "$148,000", pct: 22 },
                  { label: "Structural Steel", value: "$210,000", pct: 31 },
                  { label: "MEP Systems", value: "$195,000", pct: 29 },
                  { label: "Finishes & Interiors", value: "$122,000", pct: 18 },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">{item.label}</span>
                      <span className="text-white font-medium">{item.value}</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.pct}%` }}
                        transition={{ duration: 0.8, delay: 0.6 + i * 0.1 }}
                        className="h-full gradient-bg rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-5 border-t border-white/10">
                <span className="text-gray-400 text-sm">Total Estimate</span>
                <span className="text-2xl font-bold text-white">$675,000</span>
              </div>
            </motion.div>

            {/* Floating cards */}
            {floatingCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.2 }}
                className={`absolute glass rounded-xl px-4 py-3 border border-white/10 flex items-center gap-3 min-w-[220px] ${
                  i === 0 ? "-left-10 -top-5" : "-right-8 -bottom-8"
                }`}
              >
                <div className={`w-8 h-8 ${card.bg} rounded-lg flex items-center justify-center shrink-0`}>
                  <card.icon className={`w-4 h-4 ${card.color}`} />
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">{card.title}</p>
                  <p className="text-gray-500 text-xs">{card.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0f1e] to-transparent" />
    </section>
  );
}
