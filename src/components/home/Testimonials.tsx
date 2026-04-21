"use client";

import { motion } from "framer-motion";
import { Star, Quote, BadgeCheck } from "lucide-react";

const testimonials = [
  {
    name: "Michael Torres",
    company: "Torres Construction Co.",
    role: "General Contractor",
    location: "Dallas, TX",
    text: "Alpha Estimation saved us on a $2.1M commercial project. Their estimate was spot-on and delivered in less than 24 hours. We won the bid and came in under budget.",
    project: "Commercial Office · $2.1M",
    initials: "MT",
    gradient: "from-teal-500 to-teal-700",
    ring: "ring-teal-500/30",
  },
  {
    name: "Sarah Johnson",
    company: "JL Property Group",
    role: "Project Manager",
    location: "Los Angeles, CA",
    text: "We were overwhelmed with bid deadlines. Now we outsource all our takeoffs to Alpha. Our win rate jumped from 20% to over 40% in just three months.",
    project: "Multi-Family Dev · 32 Units",
    initials: "SJ",
    gradient: "from-purple-500 to-purple-700",
    ring: "ring-purple-500/30",
  },
  {
    name: "David Kim",
    company: "Metro Drywall Group",
    role: "Drywall Subcontractor",
    location: "New York, NY",
    text: "As a drywall sub, accuracy matters. Their takeoffs are incredibly detailed and always match what we actually install on site. Highly recommend to any trade.",
    project: "Interior Finishes · 85,000 sq ft",
    initials: "DK",
    gradient: "from-green-500 to-green-700",
    ring: "ring-green-500/30",
  },
  {
    name: "Carlos Mendez",
    company: "Meridian Developments",
    role: "Real Estate Developer",
    location: "Miami, FL",
    text: "Used them for a 45-unit residential development. Comprehensive estimate, organized Excel output, and they answered every question we had. Would use again in a heartbeat.",
    project: "Residential Dev · 45 Units",
    initials: "CM",
    gradient: "from-teal-500 to-teal-700",
    ring: "ring-teal-500/30",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-[#0c2140]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-teal-400 font-semibold text-sm uppercase tracking-wider mb-3">Client Reviews</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Contractors <span className="gradient-text">Say About Us</span>
          </h2>
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4.5 h-4.5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-white font-bold text-lg">5.0</span>
            <span className="text-gray-400 text-sm">· 120+ verified reviews</span>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="group relative bg-[#081c30] border border-white/[0.08] rounded-2xl p-6 hover:border-teal-400/25 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300 flex flex-col"
            >
              {/* Top row: stars + project badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-1.5 text-yellow-400 text-xs font-bold">5.0</span>
                </div>
              </div>

              {/* Quote icon */}
              <Quote className="w-5 h-5 text-teal-400/30 mb-3 shrink-0" />

              {/* Review text */}
              <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-5">{t.text}</p>

              {/* Project chip */}
              <span className="inline-block mb-5 text-[11px] font-medium text-teal-300/70 bg-teal-400/[0.06] border border-teal-400/15 rounded-full px-3 py-1 self-start">
                {t.project}
              </span>

              {/* Reviewer row */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.07]">
                {/* Avatar */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 ring-2 ${t.ring} bg-gradient-to-br ${t.gradient}`}
                >
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <p className="text-white font-semibold text-sm leading-tight truncate">{t.name}</p>
                  <p className="text-gray-500 text-xs truncate">{t.company}</p>
                  <p className="text-gray-600 text-[11px]">{t.role} · {t.location}</p>
                </div>
                <div className="ml-auto shrink-0">
                  <span className="inline-flex items-center gap-1 text-[11px] text-green-400 bg-green-400/10 border border-green-400/20 rounded-full px-2 py-0.5 font-medium">
                    <BadgeCheck className="w-3 h-3" />
                    Verified
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Source strip */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 text-xs mt-10"
        >
          Reviews collected from Google, Trustpilot, and direct client feedback · Updated April 2026
        </motion.p>
      </div>
    </section>
  );
}
