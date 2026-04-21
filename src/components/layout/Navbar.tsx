"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { label: "Commercial Estimating", href: "/services/commercial" },
  { label: "Residential Estimating", href: "/services/residential" },
  { label: "Takeoff Services", href: "/services/takeoffs" },
  { label: "Subcontractor Estimating", href: "/services/subcontractor" },
  { label: "Industrial Estimating", href: "/services/industrial" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#081c30]/98 backdrop-blur-lg border-b border-white/10 py-3 shadow-xl shadow-black/30"
          : "bg-[#081c30]/90 backdrop-blur-md border-b border-white/[0.06] py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center shadow-lg shadow-teal-500/30">
              <svg width="22" height="22" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                <path d="M6 30L18 5L30 30" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="14" y1="21" x2="22" y2="21" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="16" y1="19.5" x2="16" y2="22.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
                <line x1="18" y1="19.5" x2="18" y2="22.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
                <line x1="20" y1="19.5" x2="20" y2="22.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
              </svg>
            </div>
            <span className="font-bold text-[1.15rem] text-white tracking-tight">
              Alpha<span className="gradient-text">Estimation</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center" aria-label="Main navigation">

            <Link
              href="/"
              aria-current={pathname === "/" ? "page" : undefined}
              className={cn(
                "px-3.5 py-2 rounded-lg text-sm font-medium transition-colors",
                pathname === "/" ? "text-white bg-white/[0.07]" : "text-gray-300 hover:text-white hover:bg-white/[0.05]"
              )}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors",
                  pathname.startsWith("/services") ? "text-white bg-white/[0.07]" : "text-gray-300 hover:text-white hover:bg-white/[0.05]"
                )}
                aria-expanded={servicesOpen}
                aria-haspopup="menu"
              >
                Services
                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", servicesOpen && "rotate-180")} />
              </button>
              {servicesOpen && (
                <div
                  className="absolute top-full left-0 mt-1.5 w-64 bg-[#0c2140] border border-white/10 rounded-2xl py-2 shadow-2xl shadow-black/60"
                  role="menu"
                >
                  <Link
                    href="/services"
                    className="block px-4 py-2.5 text-xs text-teal-400 font-bold uppercase tracking-widest hover:bg-white/5 transition-colors rounded-t-xl"
                    role="menuitem"
                  >
                    All Services →
                  </Link>
                  <div className="border-t border-white/[0.06] mt-1 pt-1">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/[0.05] transition-colors"
                        role="menuitem"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={cn(
                  "px-3.5 py-2 rounded-lg text-sm font-medium transition-colors",
                  pathname === link.href ? "text-white bg-white/[0.07]" : "text-gray-300 hover:text-white hover:bg-white/[0.05]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <a
              href="tel:+19283817910"
              className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span className="tabular-nums">+1 (928) 381-7910</span>
            </a>
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 px-5 py-2.5 gradient-bg rounded-xl text-white font-bold text-sm hover:opacity-90 active:scale-[0.98] transition-all shadow-lg shadow-teal-500/25 border border-teal-400/20"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav
          id="mobile-nav"
          className="lg:hidden bg-[#081c30] border-t border-white/[0.08] px-4 pt-4 pb-6 space-y-0.5"
          aria-label="Mobile navigation"
        >
          <Link href="/" className="block text-gray-300 hover:text-white py-2.5 px-3 rounded-xl hover:bg-white/[0.05] transition-colors text-sm font-medium" onClick={() => setMobileOpen(false)}>Home</Link>

          {/* Services section */}
          <div className="px-3 py-2">
            <p className="text-[0.65rem] uppercase tracking-widest text-gray-500 font-bold mb-2">Services</p>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block text-gray-400 hover:text-teal-400 py-2 pl-2 text-sm transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {s.label}
              </Link>
            ))}
          </div>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-gray-300 hover:text-white py-2.5 px-3 rounded-xl hover:bg-white/[0.05] transition-colors text-sm font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-4 space-y-3 border-t border-white/[0.06] mt-3">
            <a href="tel:+19283817910" className="flex items-center gap-2 text-gray-400 px-3 py-2 text-sm">
              <Phone className="w-4 h-4 text-teal-400" /> +1 (928) 381-7910
            </a>
            <Link
              href="/get-a-quote"
              className="block w-full text-center px-5 py-3.5 gradient-bg rounded-xl text-white font-bold shadow-lg shadow-teal-500/25"
              onClick={() => setMobileOpen(false)}
            >
              Get Free Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
