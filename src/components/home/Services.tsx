"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Building2, Home, Zap, HardHat, Factory, Ruler,
  ArrowRight, Clock, CheckCircle
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Commercial Estimating",
    tag: "Most Requested",
    tagColor: "bg-teal-400/10 text-teal-400 border-teal-400/20",
    desc: "Detailed cost estimates for office buildings, retail centers, hotels, and mixed-use developments. CSI-formatted line items with local pricing.",
    bullets: ["Full CSI division breakdown", "Local labor & material rates", "PDF + Excel deliverable"],
    href: "/services/commercial",
    turnaround: "24–48 hr",
    iconBg: "bg-teal-400/[0.12]",
    iconBorder: "border-teal-400/25",
    iconColor: "text-teal-400",
    glowColor: "group-hover:shadow-teal-500/20",
  },
  {
    icon: Home,
    title: "Residential Estimating",
    tag: null,
    tagColor: "",
    desc: "Accurate estimates for custom homes, multi-family, condos, and renovations. Scope-matched to your plans with room-by-room detail.",
    bullets: ["Single & multi-family", "Renovation & addition scopes", "Fixture & finish allowances"],
    href: "/services/residential",
    turnaround: "24–48 hr",
    iconBg: "bg-sky-400/[0.12]",
    iconBorder: "border-sky-400/25",
    iconColor: "text-sky-400",
    glowColor: "group-hover:shadow-sky-500/20",
  },
  {
    icon: Ruler,
    title: "Quantity Takeoffs",
    tag: null,
    tagColor: "",
    desc: "Digital quantity takeoffs for every trade — concrete, framing, drywall, roofing, flooring, and more. Delivered in your preferred format.",
    bullets: ["All CSI trades covered", "CAD / PDF / Revit accepted", "Formatted to your template"],
    href: "/services/takeoffs",
    turnaround: "24 hr",
    iconBg: "bg-violet-400/[0.12]",
    iconBorder: "border-violet-400/25",
    iconColor: "text-violet-400",
    glowColor: "group-hover:shadow-violet-500/20",
  },
  {
    icon: HardHat,
    title: "Subcontractor Estimating",
    tag: null,
    tagColor: "",
    desc: "Trade-specific estimates for MEP, electrical, plumbing, HVAC, drywall, and specialty subs. Scope-ready for your bid package.",
    bullets: ["Specialty trade scopes", "Material & labor split", "Bid-ready format"],
    href: "/services/subcontractor",
    turnaround: "24–48 hr",
    iconBg: "bg-orange-400/[0.12]",
    iconBorder: "border-orange-400/25",
    iconColor: "text-orange-400",
    glowColor: "group-hover:shadow-orange-500/20",
  },
  {
    icon: Factory,
    title: "Industrial Estimating",
    tag: null,
    tagColor: "",
    desc: "Complex estimates for warehouses, manufacturing plants, distribution centers, and industrial facilities with detailed MEP and structural scopes.",
    bullets: ["Pre-engineered structures", "Heavy MEP scopes", "Site & civil included"],
    href: "/services/industrial",
    turnaround: "48–72 hr",
    iconBg: "bg-amber-400/[0.12]",
    iconBorder: "border-amber-400/25",
    iconColor: "text-amber-400",
    glowColor: "group-hover:shadow-amber-500/20",
  },
  {
    icon: Zap,
    title: "Conceptual Estimating",
    tag: "Early Stage",
    tagColor: "bg-purple-400/10 text-purple-300 border-purple-400/20",
    desc: "Budget-level estimates from sketches, narratives, or schematic designs. Ideal for feasibility studies, developer underwriting, and early planning.",
    bullets: ["No full plans required", "System-level cost ranges", "Developer & owner friendly"],
    href: "/get-a-quote",
    turnaround: "Same day",
    iconBg: "bg-emerald-400/[0.12]",
    iconBorder: "border-emerald-400/25",
    iconColor: "text-emerald-400",
    glowColor: "group-hover:shadow-emerald-500/20",
  },
];

export default function Services() {
  return (
    <section className="section-padding bg-[#081c30]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-label mx-auto mb-5">Our Services</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything You Need.{" "}
            <span className="gradient-text">One Partner.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            From conceptual budgets to full bid-ready packages — we cover every scope so you can bid more and win more.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <Link
                href={service.href}
                className="group relative flex flex-col h-full bg-[#0c2140] border border-white/[0.08] rounded-2xl p-7 card-lift hover:border-teal-400/25 overflow-hidden"
              >
                {/* Subtle top accent line — shows on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] gradient-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

                {/* Icon + tag row */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md ${service.glowColor} ${service.iconBg} border ${service.iconBorder}`}>
                    <service.icon className={`w-5 h-5 ${service.iconColor}`} />
                  </div>
                  <div className="flex items-center gap-2">
                    {service.tag && (
                      <span className={`text-[11px] font-semibold border rounded-full px-2.5 py-0.5 ${service.tagColor}`}>
                        {service.tag}
                      </span>
                    )}
                    <span className="flex items-center gap-1 text-[11px] text-gray-500 bg-white/[0.04] border border-white/[0.07] rounded-full px-2.5 py-0.5">
                      <Clock className="w-3 h-3" />
                      {service.turnaround}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-teal-50 transition-colors duration-200">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{service.desc}</p>

                <ul className="space-y-1.5 mb-6 flex-1">
                  {service.bullets.map((b, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-400 text-xs">
                      <CheckCircle className={`w-3.5 h-3.5 ${service.iconColor} shrink-0`} />
                      {b}
                    </li>
                  ))}
                </ul>

                <span className="inline-flex items-center gap-1.5 text-teal-400 text-sm font-semibold group-hover:gap-3 transition-all duration-200">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
        >
          <p className="text-gray-400 text-sm">Not sure which service fits your project?</p>
          <Link
            href="/get-a-quote"
            className="inline-flex items-center gap-2 px-6 py-2.5 gradient-bg rounded-lg text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-md shadow-teal-500/20"
          >
            Get a Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
