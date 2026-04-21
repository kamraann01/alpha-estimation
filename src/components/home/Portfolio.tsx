"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, Home, Factory, MapPin, Ruler, ArrowRight, CheckCircle, Clock, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "47-Story Mixed-Use Tower",
    type: "Commercial",
    typeBg: "bg-teal-400/15 text-teal-300 border-teal-400/25",
    location: "Miami, FL",
    area: "320,000 sq ft",
    value: "$2.8M",
    label: "Estimate Value",
    turnaround: "3 business days",
    result: "Bid Won",
    resultBg: "bg-green-400/10 text-green-400 border-green-400/20",
    Icon: Building2,
    gradientFrom: "#0d3d38",
    gradientTo: "#0a2a27",
    iconColor: "text-teal-400/25",
    highlights: [
      "Structural steel & concrete takeoff",
      "Full MEP scope — 3 floors detailed",
      "Curtain wall & glazing systems",
      "Interior finishes by unit type",
    ],
    stat: { label: "Accuracy vs. Final GMP", value: "±2.1%" },
  },
  {
    title: "45-Unit Residential Dev.",
    type: "Residential",
    typeBg: "bg-purple-400/15 text-purple-300 border-purple-400/25",
    location: "San Diego, CA",
    area: "78,000 sq ft",
    value: "$4.1M",
    label: "Estimate Value",
    turnaround: "48 hours",
    result: "Under Budget",
    resultBg: "bg-teal-400/10 text-teal-400 border-teal-400/20",
    Icon: Home,
    gradientFrom: "#1e1040",
    gradientTo: "#140b2e",
    iconColor: "text-purple-400/25",
    highlights: [
      "Complete site work & utilities",
      "Wood framing & sheathing takeoff",
      "MEP rough-in all 45 units",
      "All finish trades by unit & common area",
    ],
    stat: { label: "Time to first revision", value: "0 — delivered right" },
  },
  {
    title: "Industrial Distribution Ctr.",
    type: "Industrial",
    typeBg: "bg-orange-400/15 text-orange-300 border-orange-400/25",
    location: "Phoenix, AZ",
    area: "180,000 sq ft",
    value: "$1.2M",
    label: "Estimate Value",
    turnaround: "2 business days",
    result: "Awarded",
    resultBg: "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",
    Icon: Factory,
    gradientFrom: "#2a1a08",
    gradientTo: "#1c1106",
    iconColor: "text-orange-400/25",
    highlights: [
      "Pre-engineered metal building scope",
      "Dock levelers & dock equipment",
      "HVAC, electrical & fire suppression",
      "Full site development & paving",
    ],
    stat: { label: "Delivery vs. deadline", value: "6 hrs early" },
  },
];

export default function Portfolio() {
  return (
    <section id="case-studies" className="section-padding bg-[#081c30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-teal-400 font-semibold text-sm uppercase tracking-wider mb-3">Case Studies</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Project Estimates</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Real projects. Real accuracy. See how we help contractors win bids across every sector.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group bg-[#0c2140] border border-white/[0.09] rounded-2xl overflow-hidden hover:border-teal-400/30 hover:shadow-xl hover:shadow-teal-500/5 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Visual header */}
              <div
                className="relative h-48 flex items-end p-5 overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo})` }}
              >
                {/* Grid pattern */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
                {/* Big faded icon */}
                <p.Icon className={`absolute right-4 top-1/2 -translate-y-1/2 w-28 h-28 ${p.iconColor}`} />

                {/* Type + Result badges */}
                <div className="relative flex items-center justify-between w-full">
                  <span className={`text-xs font-semibold border rounded-full px-3 py-1 ${p.typeBg}`}>
                    {p.type}
                  </span>
                  <span className={`text-xs font-semibold border rounded-full px-3 py-1 ${p.resultBg}`}>
                    ✓ {p.result}
                  </span>
                </div>
              </div>

              {/* Value + turnaround strip */}
              <div className="flex items-center divide-x divide-white/[0.07] border-b border-white/[0.07]">
                <div className="flex-1 px-5 py-3">
                  <p className="text-gray-500 text-[11px] uppercase tracking-wide mb-0.5">{p.label}</p>
                  <p className="text-white font-bold text-xl">{p.value}</p>
                </div>
                <div className="flex-1 px-5 py-3">
                  <p className="text-gray-500 text-[11px] uppercase tracking-wide mb-0.5">Delivered</p>
                  <div className="flex items-center gap-1.5 text-white font-semibold text-sm">
                    <Clock className="w-3.5 h-3.5 text-teal-400" />
                    {p.turnaround}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-white font-bold text-lg mb-1.5">{p.title}</h3>
                <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-4">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  {p.location}
                  <span className="mx-1 text-white/10">·</span>
                  <Ruler className="w-3.5 h-3.5 shrink-0" />
                  {p.area}
                </div>

                <ul className="space-y-2 mb-4 flex-1">
                  {p.highlights.map((h, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-400 text-xs">
                      <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Accuracy stat */}
                <div className="flex items-center gap-2 bg-teal-400/[0.05] border border-teal-400/10 rounded-xl px-4 py-2.5 mb-5">
                  <TrendingUp className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <p className="text-gray-400 text-xs">{p.stat.label}:</p>
                  <p className="text-teal-300 text-xs font-semibold">{p.stat.value}</p>
                </div>

                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-1.5 text-teal-400 text-sm font-semibold group-hover:gap-2.5 transition-all duration-200 hover:text-teal-300"
                >
                  Get a similar estimate
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 text-xs mt-10"
        >
          Project details shared with client permission. Estimate values represent total project cost.
        </motion.p>
      </div>
    </section>
  );
}
