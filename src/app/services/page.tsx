import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Home, FileSpreadsheet, HardHat, Factory, Lightbulb, ArrowRight } from "lucide-react";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Services | Alpha Estimation",
  description: "Full-service construction estimating — commercial, residential, industrial, takeoffs, and subcontractor estimates.",
};

const services = [
  { icon: Building2, title: "Commercial Estimating", desc: "Offices, retail, multi-family, healthcare and large-scale commercial projects.", href: "/services/commercial" },
  { icon: Home, title: "Residential Estimating", desc: "New homes, additions, remodels and custom residential projects.", href: "/services/residential" },
  { icon: FileSpreadsheet, title: "Material Takeoffs", desc: "Precise quantity takeoffs for all trades — delivered in 24–48 hours.", href: "/services/takeoffs" },
  { icon: HardHat, title: "Subcontractor Estimating", desc: "Trade-specific estimates for electrical, plumbing, HVAC, and more.", href: "/services/subcontractor" },
  { icon: Factory, title: "Industrial Estimating", desc: "Warehouses, manufacturing facilities, plants and industrial projects.", href: "/services/industrial" },
  { icon: Lightbulb, title: "Conceptual Estimating", desc: "Early-stage budget estimates to help with planning and feasibility.", href: "/get-a-quote" },
];

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <section className="max-w-4xl mx-auto px-4 pt-16 pb-12 text-center">
        <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Services</p>
        <h1 className="text-5xl font-bold text-white mb-4">Full-Service <span className="gradient-text">Estimating</span></h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto">
          Whatever your project type, we have the expertise to deliver accurate, bankable estimates fast.
        </p>
      </section>

      {/* Quick stats bar */}
      <div className="border-y border-white/[0.07] bg-[#0d1225] py-5">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { value: "24–48hr", label: "Delivery" },
            { value: "$349", label: "Starting Price" },
            { value: "98%", label: "Accuracy Rate" },
            { value: "500+", label: "Projects Done" },
          ].map((s, i) => (
            <div key={i} className="px-4 md:border-r md:border-white/[0.07] last:border-0">
              <div className="text-2xl font-bold gradient-text">{s.value}</div>
              <div className="text-gray-500 text-xs mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-[#0d1225] section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <Link key={i} href={svc.href} className="glass rounded-2xl p-8 hover:border-orange-500/40 transition-all group">
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-4">
                  <svc.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">{svc.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{svc.desc}</p>
                <span className="text-orange-500 text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
