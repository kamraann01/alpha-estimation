"use client";

import { motion } from "framer-motion";
import { Star, BadgeCheck } from "lucide-react";

const testimonials = [
  {
    name: "Michael Torres",
    company: "Torres Construction Co.",
    role: "General Contractor",
    location: "Dallas, TX",
    text: "Alpha Estimation saved us on a $2.1M commercial project. Their estimate was spot-on and delivered in less than 24 hours. We won the bid and came in under budget — first time that's happened in years.",
    project: "Commercial Office · $2.1M",
    initials: "MT",
    avatarGradient: "from-teal-500 to-teal-700",
    avatarRing: "ring-teal-400/40",
    source: "Google",
    sourceColor: "text-blue-400",
  },
  {
    name: "Sarah Johnson",
    company: "JL Property Group",
    role: "Project Manager",
    location: "Los Angeles, CA",
    text: "We were overwhelmed with bid deadlines. Now we outsource all our takeoffs to Alpha. Our win rate jumped from 20% to over 40% in just three months. The ROI is insane.",
    project: "Multi-Family Dev · 32 Units",
    initials: "SJ",
    avatarGradient: "from-purple-500 to-purple-700",
    avatarRing: "ring-purple-400/40",
    source: "Trustpilot",
    sourceColor: "text-green-400",
  },
  {
    name: "David Kim",
    company: "Metro Drywall Group",
    role: "Drywall Subcontractor",
    location: "New York, NY",
    text: "As a drywall sub, accuracy matters. Their takeoffs are incredibly detailed and always match what we actually install on site. No more surprise cost overruns. Highly recommend to any trade.",
    project: "Interior Finishes · 85,000 sq ft",
    initials: "DK",
    avatarGradient: "from-green-500 to-green-700",
    avatarRing: "ring-green-400/40",
    source: "Google",
    sourceColor: "text-blue-400",
  },
  {
    name: "Carlos Mendez",
    company: "Meridian Developments",
    role: "Real Estate Developer",
    location: "Miami, FL",
    text: "Used them for a 45-unit residential development. Comprehensive estimate, beautifully organized Excel output, and they answered every question same-day. 10/10 — would use again in a heartbeat.",
    project: "Residential Dev · 45 Units",
    initials: "CM",
    avatarGradient: "from-orange-500 to-orange-700",
    avatarRing: "ring-orange-400/40",
    source: "Direct",
    sourceColor: "text-teal-400",
  },
];

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function TrustpilotIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="#00B67A">
      <path d="M12 0l3.09 6.26L22 7.27l-5 4.87 1.18 6.88L12 15.77l-6.18 3.25L7 12.14 2 7.27l6.91-1.01L12 0z"/>
    </svg>
  );
}

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
          <p className="section-label mx-auto mb-5">Client Reviews</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Contractors <span className="gradient-text">Say About Us</span>
          </h2>
          {/* Aggregate rating pill */}
          <div className="inline-flex items-center gap-3 bg-white/[0.05] border border-white/[0.1] rounded-full px-6 py-2.5">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-white font-bold">5.0</span>
            <span className="w-px h-4 bg-white/20" />
            <span className="text-gray-400 text-sm">120+ verified reviews</span>
          </div>
        </motion.div>

        {/* 2×2 card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="group bg-[#081c30] border border-white/[0.08] rounded-2xl p-7 hover:border-teal-400/25 hover:shadow-xl hover:shadow-teal-500/5 hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
            >
              {/* Top: stars row + source badge */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-yellow-400 text-xs font-bold">5.0</span>
                </div>
                {/* Source badge */}
                <div className="flex items-center gap-1.5 bg-white/[0.04] border border-white/[0.08] rounded-full px-2.5 py-1">
                  {t.source === "Google" ? <GoogleIcon /> : t.source === "Trustpilot" ? <TrustpilotIcon /> : (
                    <span className="w-3.5 h-3.5 rounded-full gradient-bg flex items-center justify-center text-[7px] font-bold text-white">AE</span>
                  )}
                  <span className="text-gray-500 text-[11px]">{t.source}</span>
                </div>
              </div>

              {/* Large opening quote mark */}
              <div className="text-teal-400/15 text-7xl font-serif leading-none mb-1 select-none">&ldquo;</div>

              {/* Review text */}
              <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-5 -mt-4">{t.text}</p>

              {/* Project chip */}
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-teal-300/70 bg-teal-400/[0.06] border border-teal-400/15 rounded-full px-3 py-1 self-start mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400/60" />
                {t.project}
              </span>

              {/* Reviewer row */}
              <div className="flex items-center gap-3.5 pt-5 border-t border-white/[0.07]">
                {/* Avatar with initials */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-base shrink-0 ring-2 ${t.avatarRing} bg-gradient-to-br ${t.avatarGradient} shadow-md`}>
                  {t.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-bold text-sm leading-tight">{t.name}</p>
                  <p className="text-teal-400/80 text-xs font-medium truncate">{t.company}</p>
                  <p className="text-gray-500 text-[11px] mt-0.5">{t.role} · {t.location}</p>
                </div>
                <div className="shrink-0">
                  <span className="inline-flex items-center gap-1 text-[11px] text-green-400 bg-green-400/[0.08] border border-green-400/20 rounded-full px-2.5 py-1 font-semibold">
                    <BadgeCheck className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 text-xs mt-10"
        >
          Reviews collected from Google, Trustpilot, and direct client feedback &middot; Updated April 2026
        </motion.p>
      </div>
    </section>
  );
}
