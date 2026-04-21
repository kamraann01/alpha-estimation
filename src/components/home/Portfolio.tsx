"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, Home, Factory, MapPin, Ruler, ArrowRight, CheckCircle } from "lucide-react";

const projects = [
  {
    title: "47-Story Mixed-Use Tower",
    type: "Commercial",
    location: "Miami, FL",
    area: "320,000 sq ft",
    value: "$2.8M Estimate",
    turnaround: "3 business days",
    Icon: Building2,
    headerClass: "from-teal-900 to-teal-700",
    highlights: [
      "Structural steel & concrete takeoff",
      "Full MEP scope",
      "Curtain wall system",
      "Interior finishes",
    ],
  },
  {
    title: "45-Unit Residential Dev.",
    type: "Residential",
    location: "San Diego, CA",
    area: "78,000 sq ft",
    value: "$4.1M Estimate",
    turnaround: "48 hours",
    Icon: Home,
    headerClass: "from-slate-700 to-slate-500",
    highlights: [
      "Complete site work",
      "Wood framing takeoff",
      "MEP rough-in",
      "All finish trades",
    ],
  },
  {
    title: "Industrial Distribution Center",
    type: "Industrial",
    location: "Phoenix, AZ",
    area: "180,000 sq ft",
    value: "$1.2M Estimate",
    turnaround: "2 business days",
    Icon: Factory,
    headerClass: "from-gray-700 to-gray-500",
    highlights: [
      "Pre-engineered structure",
      "Dock leveler equipment",
      "HVAC & electrical",
      "Full site development",
    ],
  },
];

export default function Portfolio() {
  return (
    <section id="case-studies" className="section-padding bg-[#081c30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-[#0c2140] border border-white/10 rounded-2xl overflow-hidden hover:border-teal-400/30 transition-all duration-300"
            >
              {/* Visual header */}
              <div className={`relative h-44 bg-gradient-to-br ${p.headerClass} flex items-center justify-center overflow-hidden`}>
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                <p.Icon className="w-16 h-16 text-white/20" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-teal-400/20 text-teal-300 text-xs font-semibold rounded-full border border-teal-400/30">
                    {p.type}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 text-right">
                  <p className="text-white font-bold text-lg">{p.value}</p>
                  <p className="text-white/60 text-xs">in {p.turnaround}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
                <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-4">
                  <MapPin className="w-3.5 h-3.5" />
                  {p.location}
                  <span className="mx-1">·</span>
                  <Ruler className="w-3.5 h-3.5" />
                  {p.area}
                </div>
                <ul className="space-y-2 mb-5">
                  {p.highlights.map((h, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-400 text-sm">
                      <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center gap-1.5 text-teal-400 text-sm font-medium group-hover:gap-2.5 transition-all duration-200 hover:text-teal-300"
                >
                  Get a similar estimate <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
