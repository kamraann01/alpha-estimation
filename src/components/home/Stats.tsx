"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FolderOpen, ThumbsUp, Clock, Award } from "lucide-react";

const stats = [
  {
    value: 650,
    suffix: "+",
    label: "Projects Completed",
    desc: "Across all sectors worldwide",
    Icon: FolderOpen,
    color: "text-teal-400",
    bg: "bg-teal-400/10",
    border: "border-teal-400/20",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    desc: "Based on verified client surveys",
    Icon: ThumbsUp,
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/20",
  },
  {
    value: 48,
    suffix: "hr",
    label: "Max Turnaround",
    desc: "Rush same-day available",
    Icon: Clock,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
  },
  {
    value: 18,
    suffix: "+",
    label: "Years Combined Experience",
    desc: "Senior certified estimators",
    Icon: Award,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20",
  },
];

function Counter({ end, suffix, delay = 0 }: { end: number; suffix: string; delay?: number }) {
  const [count, setCount] = useState(end); // default to end value — never shows 0
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Use native IntersectionObserver — reliable in all environments
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();

          // Small delay for stagger effect
          const startTimeout = setTimeout(() => {
            setCount(0);
            const duration = 1600;
            const steps = 55;
            const stepTime = duration / steps;
            let current = 0;
            const timer = setInterval(() => {
              current += end / steps;
              if (current >= end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(Math.floor(current));
              }
            }, stepTime);
          }, delay);

          return () => clearTimeout(startTimeout);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, delay, started]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-16 border-y border-white/[0.07] bg-[#0c2140] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(0,196,180,0.04),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-2">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group text-center lg:border-r lg:border-white/[0.07] last:border-0 px-6 py-4 hover:bg-white/[0.02] rounded-xl transition-colors duration-200"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${stat.bg} border ${stat.border} mb-4 group-hover:scale-105 transition-transform duration-200`}>
                <stat.Icon className={`w-5 h-5 ${stat.color}`} />
              </div>

              {/* Animated number */}
              <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-1">
                <Counter end={stat.value} suffix={stat.suffix} delay={i * 120} />
              </div>

              <p className="text-white font-semibold text-sm mb-0.5">{stat.label}</p>
              <p className="text-gray-500 text-xs leading-snug">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
