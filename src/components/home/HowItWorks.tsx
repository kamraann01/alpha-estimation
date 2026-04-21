"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Upload, SlidersHorizontal, FileCheck, ArrowRight, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Send Us Your Plans",
    desc: "Upload blueprints, PDF drawings, CAD files, or simply describe your project scope. We accept any format and respond within 1 hour during business hours.",
    outcome: "Confirmed & assigned to a senior estimator",
    detail: ["PDF, CAD, Revit, or sketches", "Email or secure upload portal", "Response in under 1 hour"],
  },
  {
    number: "02",
    icon: SlidersHorizontal,
    title: "We Prepare Your Estimate",
    desc: "Our certified estimators perform a full digital takeoff and build a detailed cost estimate using real-time local pricing data, CSI format, and trade-level breakdown.",
    outcome: "Detailed line-item estimate with full scope coverage",
    detail: ["Live local pricing database", "CSI division format", "Double-reviewed for accuracy"],
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Receive & Submit Winning Bids",
    desc: "Get your professional PDF + Excel estimate within 24–48 hours. Review in minutes, submit with confidence, and win more projects.",
    outcome: "PDF report + Excel spreadsheet — bid-ready",
    detail: ["Delivered in 24–48 hours", "Editable Excel breakdown", "Free revision if needed"],
  },
];

export default function HowItWorks({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section className="section-padding bg-[#0c2140] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(0,196,180,0.04),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-teal-400 font-semibold text-sm uppercase tracking-wider mb-3">Simple 3-Step Process</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              From Plans to{" "}
              <span className="gradient-text">Winning Bids</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              No complexity, no back-and-forth. Send your plans, get your estimate, win your bid.
            </p>
          </motion.div>
        )}

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 relative">

          {/* Connector line desktop */}
          <div className="hidden lg:block absolute top-[2.6rem] left-[calc(33%+1.5rem)] right-[calc(33%+1.5rem)] h-px">
            <div className="h-full bg-gradient-to-r from-teal-400/30 via-teal-400/60 to-teal-400/30" />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.14 }}
              className="group"
            >
              {/* Card */}
              <div className="bg-[#081c30] border border-white/[0.09] rounded-2xl p-7 hover:border-teal-400/25 transition-all duration-300 h-full flex flex-col">

                {/* Number + Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-14 h-14 gradient-bg rounded-2xl flex items-center justify-center shadow-lg shadow-teal-500/20 group-hover:scale-105 transition-transform duration-300">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="absolute -top-2.5 -right-2.5 w-6 h-6 bg-[#0c2140] border border-teal-400/40 rounded-full flex items-center justify-center text-teal-400 text-[10px] font-bold">
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <span className="text-teal-400/50 font-bold text-xs tracking-widest uppercase">Step {step.number}</span>
                    <h3 className="text-white font-bold text-lg leading-tight">{step.title}</h3>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">{step.desc}</p>

                {/* Detail bullets */}
                <ul className="space-y-2 mb-6">
                  {step.detail.map((d, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-gray-400">
                      <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>

                {/* Outcome chip */}
                <div className="flex items-center gap-2 bg-teal-400/[0.06] border border-teal-400/15 rounded-xl px-4 py-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                  <p className="text-teal-300/80 text-xs font-medium">{step.outcome}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="text-gray-500 text-sm mb-4">Ready to start? It takes less than 2 minutes.</p>
          <Link
            href="/get-a-quote"
            className="group inline-flex items-center gap-2 px-8 py-4 gradient-bg rounded-xl text-white font-bold text-base hover:opacity-90 transition-all shadow-lg shadow-teal-500/25"
          >
            Send Us Your Plans
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
