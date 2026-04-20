"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael Torres",
    role: "General Contractor, Texas",
    text: "Alpha Estimation saved us on a $2.1M commercial project. Their estimate was spot-on and delivered in less than 24 hours. We won the bid and hit budget.",
    stars: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Project Manager, California",
    text: "We were overwhelmed with bid deadlines. Now we outsource all our takeoffs to Alpha. Our win rate has gone from 20% to over 40% in just 3 months.",
    stars: 5,
  },
  {
    name: "David Kim",
    role: "Subcontractor, New York",
    text: "As a drywall sub, accuracy matters. Their takeoffs are incredibly detailed and always match what we actually install. Highly recommend.",
    stars: 5,
  },
  {
    name: "Carlos Mendez",
    role: "Developer, Florida",
    text: "Used them for a 45-unit residential development. Comprehensive estimate, organized Excel output, and they answered every question we had. 10/10.",
    stars: 5,
  },
  {
    name: "Lisa Chen",
    role: "Architect, Washington",
    text: "I recommend Alpha Estimation to all my contractor clients. Their conceptual estimates during design phases are invaluable for keeping projects on budget.",
    stars: 5,
  },
  {
    name: "James O'Brien",
    role: "HVAC Contractor, Illinois",
    text: "Fast, accurate, and professional. They understand the trades — not just generic estimating software. Worth every penny.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-[#0d1225]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Client Reviews</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Contractors <span className="gradient-text">Say About Us</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-orange-400 text-orange-400" />)}
            <span className="text-white font-bold ml-2">5.0</span>
            <span className="text-gray-400 text-sm">from 120+ reviews</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 hover:border-orange-500/20 transition-colors"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.stars)].map((_, j) => <Star key={j} className="w-4 h-4 fill-orange-400 text-orange-400" />)}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">&quot;{t.text}&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
