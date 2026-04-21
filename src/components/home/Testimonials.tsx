"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael Torres",
    role: "General Contractor",
    location: "Texas",
    text: "Alpha Estimation saved us on a $2.1M commercial project. Their estimate was spot-on and delivered in less than 24 hours. We won the bid and hit budget.",
    stars: 5,
    initial: "M",
    color: "from-teal-500 to-teal-700",
  },
  {
    name: "Sarah Johnson",
    role: "Project Manager",
    location: "California",
    text: "We were overwhelmed with bid deadlines. Now we outsource all our takeoffs to Alpha. Our win rate has gone from 20% to over 40% in just 3 months.",
    stars: 5,
    initial: "S",
    color: "from-purple-500 to-purple-700",
  },
  {
    name: "David Kim",
    role: "Drywall Subcontractor",
    location: "New York",
    text: "As a drywall sub, accuracy matters. Their takeoffs are incredibly detailed and always match what we actually install. Highly recommend to any trade.",
    stars: 5,
    initial: "D",
    color: "from-green-500 to-green-700",
  },
  {
    name: "Carlos Mendez",
    role: "Real Estate Developer",
    location: "Florida",
    text: "Used them for a 45-unit residential development. Comprehensive estimate, organized Excel output, and they answered every question we had. 10/10.",
    stars: 5,
    initial: "C",
    color: "from-teal-500 to-teal-700",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-[#0c2140]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
            </div>
            <span className="text-white font-bold text-lg">5.0</span>
            <span className="text-gray-400 text-sm">· 120+ verified reviews</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[#0c2140] border border-white/[0.08] rounded-2xl p-6 hover:border-teal-400/20 transition-colors flex flex-col"
            >
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(t.stars)].map((_, j) => <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
              </div>

              <Quote className="w-6 h-6 text-teal-400/40 mb-3 shrink-0" />
              <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-6">{t.text}</p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.08]">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 bg-gradient-to-br ${t.color}`}>
                  {t.initial}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role} · {t.location}</p>
                </div>
                <div className="ml-auto">
                  <span className="text-xs text-green-400 bg-green-400/10 border border-green-400/20 rounded-full px-2 py-0.5">✓ Verified</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
