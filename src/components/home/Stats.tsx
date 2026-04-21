"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Projects Completed", desc: "Across all sectors" },
  { value: 98, suffix: "%", label: "Client Satisfaction", desc: "Based on client surveys" },
  { value: 48, suffix: "hr", label: "Max Turnaround", desc: "Rush same-day available" },
  { value: 15, suffix: "+", label: "Years Experience", desc: "Combined team expertise" },
];

function Counter({ end, suffix, active }: { end: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [active, end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 border-y border-white/[0.07] bg-[#0d1225] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(59,130,246,0.04),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center lg:border-r lg:border-white/[0.07] last:border-0 px-4"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-1">
                <Counter end={stat.value} suffix={stat.suffix} active={isInView} />
              </div>
              <p className="text-white font-semibold text-sm mb-0.5">{stat.label}</p>
              <p className="text-gray-500 text-xs">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
