"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { label: "Commercial Estimating", href: "/services/commercial" },
  { label: "Residential Estimating", href: "/services/residential" },
  { label: "Takeoff Services", href: "/services/takeoffs" },
  { label: "Subcontractor Estimating", href: "/services/subcontractor" },
  { label: "Industrial Estimating", href: "/services/industrial" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-[#0a0f1e]/95 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center font-bold text-white text-sm">
              AE
            </div>
            <span className="font-bold text-xl text-white">
              Alpha<span className="gradient-text">Estimation</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Home</Link>

            {/* Services Dropdown */}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Services <ChevronDown className="w-4 h-4" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 glass rounded-xl py-2 shadow-2xl">
                  {services.map((s) => (
                    <Link key={s.href} href={s.href} className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/how-it-works" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">How It Works</Link>
            <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Pricing</Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">About</Link>
            <Link href="/faq" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">FAQ</Link>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+19283817910" className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-orange-500" />
              +1 (928) 381-7910
            </a>
            <Link href="/get-a-quote" className="px-5 py-2.5 gradient-bg rounded-lg text-white font-semibold text-sm hover:opacity-90 transition-opacity">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0d1427] border-t border-white/10 px-4 py-6 space-y-4">
          <Link href="/" className="block text-gray-300 hover:text-white py-2" onClick={() => setMobileOpen(false)}>Home</Link>
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Services</p>
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="block text-gray-300 hover:text-white py-1.5 pl-3" onClick={() => setMobileOpen(false)}>
                {s.label}
              </Link>
            ))}
          </div>
          <Link href="/how-it-works" className="block text-gray-300 hover:text-white py-2" onClick={() => setMobileOpen(false)}>How It Works</Link>
          <Link href="/pricing" className="block text-gray-300 hover:text-white py-2" onClick={() => setMobileOpen(false)}>Pricing</Link>
          <Link href="/about" className="block text-gray-300 hover:text-white py-2" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/faq" className="block text-gray-300 hover:text-white py-2" onClick={() => setMobileOpen(false)}>FAQ</Link>
          <Link href="/get-a-quote" className="block w-full text-center px-5 py-3 gradient-bg rounded-lg text-white font-semibold" onClick={() => setMobileOpen(false)}>
            Get a Free Quote
          </Link>
        </div>
      )}
    </header>
  );
}
