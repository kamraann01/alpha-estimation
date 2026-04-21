"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, Shield, Award, CheckCircle, TrendingUp, Clock, BadgeCheck, Zap } from "lucide-react";

const trustBar = [
  { icon: Shield,      label: "E&O Insured" },
  { icon: Award,       label: "CPE Certified" },
  { icon: BadgeCheck,  label: "ASPE Member" },
  { icon: BadgeCheck,  label: "BBB A+ Rated" },
];

const costBreakdown = [
  { label: "Concrete & Foundations", value: "$148,000", pct: 22 },
  { label: "Structural Steel",       value: "$210,000", pct: 31 },
  { label: "MEP Systems",            value: "$195,000", pct: 29 },
  { label: "Finishes & Interiors",   value: "$122,000", pct: 18 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-[#081c30]/92" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_30%_40%,rgba(0,196,180,0.10),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_70%,rgba(0,196,180,0.05),transparent)]" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-teal-400 mb-7 border border-teal-400/20"
            >
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse shrink-0" />
              Trusted by 500+ Contractors Worldwide
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-5xl md:text-6xl xl:text-[4.25rem] font-bold text-white leading-[1.06] tracking-tight mb-6"
            >
              Win More Bids with{" "}
              <span className="gradient-text">Precision Construction</span>{" "}
              Estimates
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-lg text-gray-300 leading-relaxed mb-10 max-w-lg"
            >
              Fast, accurate cost estimates and takeoffs for General Contractors &amp; Subcontractors.{" "}
              <span className="text-white font-semibold">24–48 hour delivery.</span>{" "}
              <span className="text-white font-semibold">Accuracy guaranteed.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                href="/get-a-quote"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 gradient-bg rounded-xl text-white font-bold text-base hover:opacity-90 transition-all shadow-lg shadow-teal-500/30"
              >
                Get Your Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+19283817910"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 glass rounded-xl text-white font-semibold text-base hover:bg-white/[0.08] transition-colors border border-white/15 hover:border-teal-400/30"
              >
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                Call (928) 381-7910
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.38 }}
            >
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-3">Credentials &amp; Certifications</p>
              <div className="flex flex-wrap gap-2.5">
                {trustBar.map((t, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.09] rounded-lg px-3.5 py-2 text-gray-300 text-sm"
                  >
                    <t.icon className="w-4 h-4 text-teal-400 shrink-0" />
                    {t.label}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Dashboard card */}
          <div className="hidden lg:flex flex-col gap-3">

            {/* Top floating badge */}
            <motion.div
              initial={{ opacity: 0, y: -10, x: 10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.45, delay: 0.75 }}
              className="self-end"
            >
              <div className="glass border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl shadow-black/30">
                <div className="w-8 h-8 bg-green-400/10 rounded-xl flex items-center justify-center border border-green-500/20 shrink-0">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">Estimate Delivered</p>
                  <p className="text-gray-400 text-xs">Commercial Office — $2.1M</p>
                </div>
                <span className="ml-2 text-gray-500 text-xs whitespace-nowrap">2h ago</span>
              </div>
            </motion.div>

            {/* Main dashboard card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28 }}
              className="bg-[#0c2140] border border-white/[0.12] rounded-3xl overflow-hidden shadow-2xl shadow-black/50"
            >
              {/* macOS-style header bar */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.08] bg-white/[0.02]">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400/60" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
                    <span className="w-3 h-3 rounded-full bg-green-400/60" />
                  </div>
                  <p className="text-gray-500 text-xs font-medium">Project Estimate Dashboard</p>
                </div>
                <span className="flex items-center gap-1.5 px-2.5 py-1 bg-green-500/15 text-green-400 text-xs font-semibold rounded-full border border-green-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Delivered
                </span>
              </div>

              <div className="p-6">
                {/* Project info */}
                <div className="mb-5">
                  <p className="text-gray-500 text-xs mb-0.5">Project</p>
                  <h3 className="text-white font-bold text-base">Commercial Office Building — 12,000 sq ft</h3>
                </div>

                {/* Cost breakdown bars */}
                <div className="space-y-3 mb-6">
                  {costBreakdown.map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-gray-400">{item.label}</span>
                        <span className="text-white font-semibold">{item.value}</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.pct}%` }}
                          transition={{ duration: 0.9, delay: 0.55 + i * 0.1, ease: "easeOut" }}
                          className="h-full gradient-bg rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Total */}
                <div className="flex items-center justify-between py-4 border-t border-b border-white/[0.08] mb-5">
                  <span className="text-gray-400 text-sm font-medium">Total Estimate</span>
                  <span className="text-2xl font-extrabold text-white">$675,000</span>
                </div>

                {/* Stat chips */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { icon: Clock,      label: "Delivered",  value: "18 hrs" },
                    { icon: Zap,        label: "Accuracy",   value: "±3%" },
                    { icon: BadgeCheck, label: "Format",     value: "PDF + XLS" },
                  ].map((s, i) => (
                    <div key={i} className="flex flex-col items-center text-center bg-white/[0.03] border border-white/[0.07] rounded-xl py-3 px-2 hover:border-teal-400/20 transition-colors">
                      <s.icon className="w-3.5 h-3.5 text-teal-400 mb-1.5" />
                      <p className="text-white font-bold text-sm leading-none">{s.value}</p>
                      <p className="text-gray-500 text-[10px] mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Bottom floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 10, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.45, delay: 0.95 }}
              className="self-start"
            >
              <div className="glass border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl shadow-black/30">
                <div className="w-8 h-8 bg-teal-400/10 rounded-xl flex items-center justify-center border border-teal-400/20 shrink-0">
                  <TrendingUp className="w-4 h-4 text-teal-400" />
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">Bid Won</p>
                  <p className="text-gray-400 text-xs">Residential Dev — 45 units</p>
                </div>
                <span className="ml-2 text-gray-500 text-xs whitespace-nowrap">Yesterday</span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#081c30] to-transparent" />
    </section>
  );
}
