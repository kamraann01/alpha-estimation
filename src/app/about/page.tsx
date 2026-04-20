import CTA from "@/components/home/CTA";
import type { Metadata } from "next";
import { Users, Award, Target, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Alpha Estimation — your trusted construction estimating partner with 15+ years of experience.",
};

const values = [
  { icon: Target, title: "Precision First", desc: "Every estimate is built with meticulous attention to detail, using current cost data and local market insights." },
  { icon: Award, title: "Accountability", desc: "We stand behind every number we produce. Our team reviews every estimate before delivery." },
  { icon: Users, title: "Client-Focused", desc: "Your success is our success. We work as an extension of your team, not just a vendor." },
  { icon: Globe, title: "Global Reach", desc: "We serve contractors and developers across the US, Canada, UK, and worldwide." },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 pt-16 pb-16 text-center">
        <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">About Us</p>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Your Trusted <span className="gradient-text">Estimation Partner</span>
        </h1>
        <p className="text-gray-400 text-xl leading-relaxed max-w-3xl mx-auto">
          Alpha Estimation was founded with one mission: to help contractors bid smarter, win more projects, and grow their business without drowning in paperwork.
        </p>
      </section>

      {/* Story */}
      <section className="section-padding bg-[#0d1225]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">We Know Construction</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Our team is made up of experienced estimators, project managers, and former contractors who have spent years in the field. We understand the pressure of tight bid deadlines, the cost of losing a project, and the complexity of modern construction.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                That experience is exactly what we bring to every estimate. We don&apos;t just run numbers through software — we apply real-world knowledge to produce estimates that win.
              </p>
              <p className="text-gray-400 leading-relaxed">
                With 15+ years of combined experience and over 500 completed projects across all sectors, Alpha Estimation is the partner busy contractors trust.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "500+", label: "Projects Delivered" },
                { value: "15+", label: "Years Experience" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "48hr", label: "Max Turnaround" },
              ].map((stat, i) => (
                <div key={i} className="glass rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-[#0a0f1e]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our <span className="gradient-text">Values</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="glass rounded-2xl p-6 text-center hover:border-orange-500/30 transition-colors">
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
