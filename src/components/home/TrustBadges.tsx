"use client";

import { motion } from "framer-motion";
import { Shield, Award, Star, ThumbsUp, Users, CheckCircle } from "lucide-react";

const badges = [
  { Icon: Shield,       title: "E&O Insurance",    desc: "Protected on every project" },
  { Icon: Award,        title: "CPE Certified",    desc: "ASPE certified estimators" },
  { Icon: CheckCircle,  title: "ASPE Member",      desc: "Prof. Estimators Society" },
  { Icon: Star,         title: "120+ Reviews",     desc: "5.0 average rating" },
  { Icon: ThumbsUp,     title: "BBB Accredited",   desc: "A+ Business Rating" },
  { Icon: Users,        title: "Licensed & Bonded", desc: "All 50 states" },
];

export default function TrustBadges() {
  return (
    <section className="py-14 border-y border-white/[0.07] bg-[#0d1225] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(59,130,246,0.04),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs uppercase tracking-widest text-gray-500 mb-8 font-semibold"
        >
          Certifications & Trust
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex flex-col items-center text-center p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-blue-500/20 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-3">
                <b.Icon className="w-5 h-5 text-blue-500" />
              </div>
              <p className="text-white font-semibold text-sm mb-0.5">{b.title}</p>
              <p className="text-gray-500 text-xs leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
