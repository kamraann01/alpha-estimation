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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const showBg = !isHome || scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        showBg
          ? "bg-[#0a0f1e]/97 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-blue-500/30">
              AE
            </div>
            <span className="font-bold text-xl text-white">
              Alpha<span className="gradient-text">Estimation</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            <Link href="/" aria-current={pathname === "/" ? "page" : undefined} className={cn("transition-colors text-sm font-medium", pathname === "/" ? "text-white" : "text-gray-300 hover:text-white")}>Home</Link>

            {/* Services Dropdown */}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className={cn("flex items-center gap-1 transition-colors text-sm font-medium", pathname.startsWith("/services") ? "text-white" : "text-gray-300 hover:text-white")} aria-expanded={servicesOpen} aria-haspopup="menu">
                Services <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", servicesOpen && "rotate-180")} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-60 bg-[#0d1427] border border-white/10 rounded-xl py-2 shadow-2xl shadow-black/50" role="menu">
                  <Link href="/services" className="block px-4 py-2.5 text-xs text-blue-500 font-semibold uppercase tracking-wider hover:bg-white/5 transition-colors" role="menuitem">
                    All Services →
                  </Link>
                  <div className="border-t border-white/5 mt-1 pt-1">
                    {services.map((s) => (
                      <Link key={s.href} href={s.href} className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors" role="menuitem">
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/how-it-works" aria-current={pathname === "/how-it-works" ? "page" : undefined} className={cn("transition-colors text-sm font-medium", pathname === "/how-it-works" ? "text-white" : "text-gray-300 hover:text-white")}>How It Works</Link>
            <Link href="/pricing" aria-current={pathname === "/pricing" ? "page" : undefined} className={cn("transition-colors text-sm font-medium", pathname === "/pricing" ? "text-white" : "text-gray-300 hover:text-white")}>Pricing</Link>
            <Link href="/about" aria-current={pathname === "/about" ? "page" : undefined} className={cn("transition-colors text-sm font-medium", pathname === "/about" ? "text-white" : "text-gray-300 hover:text-white")}>About</Link>
            <Link href="/contact" aria-current={pathname === "/contact" ? "page" : undefined} className={cn("transition-colors text-sm font-medium", pathname === "/contact" ? "text-white" : "text-gray-300 hover:text-white")}>Contact</Link>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+19283817910" className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-blue-500" />
              +1 (928) 381-7910
            </a>
            <Link href="/get-a-quote" className="px-5 py-2.5 gradient-bg rounded-lg text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-md shadow-blue-500/20">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav id="mobile-nav" className="lg:hidden bg-[#0d1427] border-t border-white/10 px-4 py-6 space-y-1" aria-label="Mobile navigation">
          <Link href="/" className="block text-gray-300 hover:text-white py-2.5 px-3 rounded-lg hover:bg-white/5 transition-colors" onClick={() => setMobileOpen(false)}>Home</Link>
          <div className="py-2 px-3">
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">Services</p>
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="block text-gray-300 hover:text-white py-2 pl-3 hover:text-blue-400 transition-colors text-sm" onClick={() => setMobileOpen(false)}>
                {s.label}
              </Link>
            ))}
          </div>
          <Link href="/how-it-works" className="block text-gray-300 hover:text-white py-2.5 px-3 rounded-lg hover:bg-white/5 transition-colors" onClick={() => setMobileOpen(false)}>How It Works</Link>
          <Link href="/pricing" className="block text-gray-300 hover:text-white py-2.5 px-3 rounded-lg hover:bg-white/5 transition-colors" onClick={() => setMobileOpen(false)}>Pricing</Link>
          <Link href="/about" className="block text-gray-300 hover:text-white py-2.5 px-3 rounded-lg hover:bg-white/5 transition-colors" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/contact" className="block text-gray-300 hover:text-white py-2.5 px-3 rounded-lg hover:bg-white/5 transition-colors" onClick={() => setMobileOpen(false)}>Contact</Link>
          <div className="pt-3 space-y-3">
            <a href="tel:+19283817910" className="flex items-center gap-2 text-gray-300 px-3 py-2">
              <Phone className="w-4 h-4 text-blue-500" /> +1 (928) 381-7910
            </a>
            <Link href="/get-a-quote" className="block w-full text-center px-5 py-3.5 gradient-bg rounded-xl text-white font-bold shadow-lg shadow-blue-500/20" onClick={() => setMobileOpen(false)}>
              Get a Free Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

