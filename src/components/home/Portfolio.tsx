"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Ruler, ArrowRight, CheckCircle, Clock, TrendingUp } from "lucide-react";

/* ─── Custom blueprint SVG illustrations ─── */
function CommercialIllustration() {
  return (
    <svg viewBox="0 0 280 160" fill="none" className="absolute inset-0 w-full h-full opacity-30" aria-hidden="true">
      {/* Ground line */}
      <line x1="20" y1="140" x2="260" y2="140" stroke="#00C4B4" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Tower body */}
      <rect x="90" y="30" width="100" height="110" stroke="#00C4B4" strokeWidth="1.5" fill="none"/>
      {/* Floor lines */}
      {[44,58,72,86,100,114,128].map((y, i) => (
        <line key={i} x1="90" y1={y} x2="190" y2={y} stroke="#00C4B4" strokeWidth="0.6" opacity="0.5"/>
      ))}
      {/* Window grid */}
      {[104,130,156].map((x, i) =>
        [38,52,66,80,94,108,122].map((y, j) => (
          <rect key={`${i}-${j}`} x={x} y={y} width="16" height="10" stroke="#00C4B4" strokeWidth="0.6" fill="rgba(0,196,180,0.04)" opacity="0.7"/>
        ))
      )}
      {/* Left wing */}
      <rect x="50" y="70" width="40" height="70" stroke="#00C4B4" strokeWidth="1" fill="none" opacity="0.5"/>
      {[84,98,112,126].map((y, i) => (
        <line key={i} x1="50" y1={y} x2="90" y2={y} stroke="#00C4B4" strokeWidth="0.5" opacity="0.3"/>
      ))}
      {/* Right wing */}
      <rect x="190" y="70" width="40" height="70" stroke="#00C4B4" strokeWidth="1" fill="none" opacity="0.5"/>
      {[84,98,112,126].map((y, i) => (
        <line key={i} x1="190" y1={y} x2="230" y2={y} stroke="#00C4B4" strokeWidth="0.5" opacity="0.3"/>
      ))}
      {/* Roof detail */}
      <line x1="90" y1="30" x2="140" y2="12" stroke="#00C4B4" strokeWidth="1" opacity="0.7"/>
      <line x1="190" y1="30" x2="140" y2="12" stroke="#00C4B4" strokeWidth="1" opacity="0.7"/>
      {/* Dimension arrows */}
      <line x1="24" y1="30" x2="24" y2="140" stroke="#00C4B4" strokeWidth="0.7" opacity="0.4" strokeDasharray="3 2"/>
      <text x="16" y="88" fill="#00C4B4" fontSize="7" opacity="0.5" textAnchor="middle" transform="rotate(-90 16 88)">47 FL</text>
      <line x1="90" y1="152" x2="190" y2="152" stroke="#00C4B4" strokeWidth="0.7" opacity="0.4" strokeDasharray="3 2"/>
      <text x="140" y="159" fill="#00C4B4" fontSize="7" opacity="0.5" textAnchor="middle">320k sqft</text>
    </svg>
  );
}

function ResidentialIllustration() {
  return (
    <svg viewBox="0 0 280 160" fill="none" className="absolute inset-0 w-full h-full opacity-30" aria-hidden="true">
      {/* Ground */}
      <line x1="20" y1="138" x2="260" y2="138" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Main building */}
      <rect x="60" y="80" width="160" height="58" stroke="#a78bfa" strokeWidth="1.5" fill="none"/>
      {/* Roof */}
      <polyline points="50,80 140,28 230,80" stroke="#a78bfa" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
      {/* Roof ridge detail */}
      <line x1="140" y1="28" x2="140" y2="80" stroke="#a78bfa" strokeWidth="0.7" strokeDasharray="3 2" opacity="0.5"/>
      {/* Siding lines */}
      {[93,106,119,132].map((y,i) => (
        <line key={i} x1="60" y1={y} x2="220" y2={y} stroke="#a78bfa" strokeWidth="0.5" opacity="0.3"/>
      ))}
      {/* Windows */}
      <rect x="76" y="92" width="28" height="22" stroke="#a78bfa" strokeWidth="0.9" fill="rgba(167,139,250,0.06)"/>
      <line x1="90" y1="92" x2="90" y2="114" stroke="#a78bfa" strokeWidth="0.5" opacity="0.5"/>
      <line x1="76" y1="103" x2="104" y2="103" stroke="#a78bfa" strokeWidth="0.5" opacity="0.5"/>
      <rect x="176" y="92" width="28" height="22" stroke="#a78bfa" strokeWidth="0.9" fill="rgba(167,139,250,0.06)"/>
      <line x1="190" y1="92" x2="190" y2="114" stroke="#a78bfa" strokeWidth="0.5" opacity="0.5"/>
      <line x1="176" y1="103" x2="204" y2="103" stroke="#a78bfa" strokeWidth="0.5" opacity="0.5"/>
      {/* Door */}
      <rect x="126" y="104" width="28" height="34" stroke="#a78bfa" strokeWidth="0.9" fill="rgba(167,139,250,0.04)"/>
      <circle cx="149" cy="121" r="2" stroke="#a78bfa" strokeWidth="0.7" fill="none" opacity="0.6"/>
      {/* Chimney */}
      <rect x="170" y="40" width="14" height="24" stroke="#a78bfa" strokeWidth="0.9" fill="none" opacity="0.6"/>
      {/* Framing annotation */}
      <line x1="246" y1="80" x2="246" y2="138" stroke="#a78bfa" strokeWidth="0.7" opacity="0.4" strokeDasharray="3 2"/>
      <text x="256" y="112" fill="#a78bfa" fontSize="7" opacity="0.5" textAnchor="middle" transform="rotate(90 256 112)">45 UNITS</text>
      {/* Lot boundary dashed */}
      <rect x="36" y="20" width="208" height="124" stroke="#a78bfa" strokeWidth="0.6" strokeDasharray="4 3" fill="none" opacity="0.2"/>
    </svg>
  );
}

function IndustrialIllustration() {
  return (
    <svg viewBox="0 0 280 160" fill="none" className="absolute inset-0 w-full h-full opacity-30" aria-hidden="true">
      {/* Ground */}
      <line x1="10" y1="138" x2="270" y2="138" stroke="#fb923c" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Main warehouse body */}
      <rect x="20" y="68" width="200" height="70" stroke="#fb923c" strokeWidth="1.5" fill="none"/>
      {/* Barrel/arched roof */}
      <path d="M20 68 Q120 28 220 68" stroke="#fb923c" strokeWidth="1.5" fill="none"/>
      {/* Roof purlins */}
      {[0.2,0.4,0.6,0.8].map((t, i) => {
        const x = 20 + t * 200;
        const y = 68 - 40 * Math.sin(Math.PI * t);
        return <line key={i} x1={x} y1={y} x2={x} y2="138" stroke="#fb923c" strokeWidth="0.5" opacity="0.3"/>;
      })}
      {/* Loading dock doors */}
      {[32, 72, 112, 152].map((x, i) => (
        <rect key={i} x={x} y="100" width="28" height="38" stroke="#fb923c" strokeWidth="0.9" fill="rgba(251,146,60,0.05)"/>
      ))}
      {/* Dock bumpers */}
      {[32, 72, 112, 152].map((x, i) => (
        <rect key={i} x={x+4} y="134" width="20" height="4" stroke="#fb923c" strokeWidth="0.5" fill="rgba(251,146,60,0.1)" opacity="0.6"/>
      ))}
      {/* Office block attached on right */}
      <rect x="220" y="90" width="48" height="48" stroke="#fb923c" strokeWidth="1" fill="none" opacity="0.7"/>
      <rect x="228" y="96" width="16" height="12" stroke="#fb923c" strokeWidth="0.7" fill="rgba(251,146,60,0.05)" opacity="0.8"/>
      <rect x="248" y="96" width="12" height="12" stroke="#fb923c" strokeWidth="0.7" fill="rgba(251,146,60,0.05)" opacity="0.8"/>
      {/* Sprinkler / mezzanine line */}
      <line x1="20" y1="96" x2="220" y2="96" stroke="#fb923c" strokeWidth="0.6" strokeDasharray="4 3" opacity="0.35"/>
      {/* Dimension */}
      <line x1="20" y1="150" x2="220" y2="150" stroke="#fb923c" strokeWidth="0.7" opacity="0.4" strokeDasharray="3 2"/>
      <text x="120" y="158" fill="#fb923c" fontSize="7" opacity="0.5" textAnchor="middle">180k sqft</text>
    </svg>
  );
}

const illustrations = [CommercialIllustration, ResidentialIllustration, IndustrialIllustration];

const projects = [
  {
    title: "47-Story Mixed-Use Tower",
    type: "Commercial",
    typeBg: "bg-teal-400/15 text-teal-300 border-teal-400/25",
    gradientFrom: "#071e1c",
    gradientTo: "#050f0e",
    accentLine: "bg-teal-400",
    location: "Miami, FL",
    area: "320,000 sq ft",
    value: "$2.8M",
    turnaround: "3 business days",
    result: "Bid Won",
    resultBg: "bg-green-400/10 text-green-400 border-green-400/20",
    highlights: [
      "Structural steel & concrete takeoff",
      "Full MEP scope \u2014 3 floors detailed",
      "Curtain wall & glazing systems",
      "Interior finishes by unit type",
    ],
    stat: { label: "Accuracy vs. Final GMP", value: "\u00b12.1%" },
  },
  {
    title: "45-Unit Residential Dev.",
    type: "Residential",
    typeBg: "bg-purple-400/15 text-purple-300 border-purple-400/25",
    gradientFrom: "#120d24",
    gradientTo: "#0b0816",
    accentLine: "bg-purple-400",
    location: "San Diego, CA",
    area: "78,000 sq ft",
    value: "$4.1M",
    turnaround: "48 hours",
    result: "Under Budget",
    resultBg: "bg-teal-400/10 text-teal-400 border-teal-400/20",
    highlights: [
      "Complete site work & utilities",
      "Wood framing & sheathing takeoff",
      "MEP rough-in all 45 units",
      "All finish trades by unit & common area",
    ],
    stat: { label: "Time to first revision", value: "0 \u2014 delivered right" },
  },
  {
    title: "Industrial Distribution Ctr.",
    type: "Industrial",
    typeBg: "bg-orange-400/15 text-orange-300 border-orange-400/25",
    gradientFrom: "#1a0f05",
    gradientTo: "#100900",
    accentLine: "bg-orange-400",
    location: "Phoenix, AZ",
    area: "180,000 sq ft",
    value: "$1.2M",
    turnaround: "2 business days",
    result: "Awarded",
    resultBg: "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",
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
          <p className="section-label mx-auto mb-5">Case Studies</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Project Estimates</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Real projects. Real accuracy. See how we help contractors win bids across every sector.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => {
            const Illustration = illustrations[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group bg-[#0c2140] border border-white/[0.09] rounded-2xl overflow-hidden hover:border-white/20 hover:shadow-2xl hover:shadow-black/30 hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
              >
                {/* Blueprint illustration header */}
                <div
                  className="relative h-44 overflow-hidden"
                  style={{ background: `linear-gradient(160deg, ${p.gradientFrom}, ${p.gradientTo})` }}
                >
                  {/* Dot grid */}
                  <div className="absolute inset-0"
                    style={{
                      backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  {/* Custom SVG illustration */}
                  <Illustration />
                  {/* Type + Result badges */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className={`text-xs font-semibold border rounded-full px-3 py-1 backdrop-blur-sm ${p.typeBg}`}>
                      {p.type}
                    </span>
                    <span className={`text-xs font-semibold border rounded-full px-3 py-1 backdrop-blur-sm ${p.resultBg}`}>
                      \u2713 {p.result}
                    </span>
                  </div>
                  {/* Accent top line */}
                  <div className={`absolute top-0 left-0 right-0 h-0.5 ${p.accentLine} opacity-60`} />
                </div>

                {/* Value + turnaround strip */}
                <div className="flex items-center divide-x divide-white/[0.07] border-b border-white/[0.07]">
                  <div className="flex-1 px-5 py-3">
                    <p className="text-gray-500 text-[11px] uppercase tracking-wide mb-0.5">Estimate Value</p>
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
                    <span className="mx-1 text-white/10">\u00b7</span>
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
            );
          })}
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
