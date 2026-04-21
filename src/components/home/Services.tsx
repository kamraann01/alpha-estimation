"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, Home, Zap, HardHat, Factory, Ruler } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Commercial Estimating",
    desc: "Accurate cost estimates for office buildings, retail, hospitality, and large-scale commercial projects.",
    href: "/services/commercial",
  },
  {
    icon: Home,
    title: "Residential Estimating",
    desc: "Precise estimates for single-family homes, multi-family, condos, and renovation projects.",
    href: "/services/residential",
  },
  {
    icon: Ruler,
    title: "Takeoff Services",
    desc: "Digital quantity takeoffs for all trades — concrete, framing, drywall, roofing, and more.",
    href: "/services/takeoffs",
  },
  {
    icon: HardHat,
    title: "Subcontractor Estimating",
    desc: "Specialized estimates for MEP, electrical, plumbing, HVAC, and specialty trade contractors.",
    href: "/services/subcontractor",
  },
  {
    icon: Factory,
    title: "Industrial Estimating",
    desc: "Complex industrial project estimating including warehouses, manufacturing facilities, and plants.",
    href: "/services/industrial",
  },
  {
    icon: Zap,
    title: "Conceptual Estimating",
    desc: "Early-stage budget estimates from schematic designs or project descriptions — before full plans.",
    href: "/get-a-quote",
  },
];

export default function Services() {
  return (
    <section className="section-padding bg-[#081c30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-teal-400 font-semibold text-sm uppercase tracking-wider mb-3">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Comprehensive <span className="gradient-text">Estimating Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            From concept to full bid package — we cover every trade and project type so you never miss a deadline.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={service.href} className="group block glass-hover rounded-2xl p-8 transition-all duration-300 h-full">
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{service.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-teal-400 text-sm font-medium group-hover:gap-2.5 transition-all duration-200">
                  Learn more <span className="text-base">→</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
