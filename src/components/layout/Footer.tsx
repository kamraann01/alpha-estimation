import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const socialLinks = [
  {
    href: "https://www.facebook.com/alphaestimation",
    label: "Facebook",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/company/alphaestimation",
    label: "LinkedIn",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/@alphaestimation",
    label: "YouTube",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#051525" />
      </svg>
    ),
  },
  {
    href: "https://x.com/alphaestimation",
    label: "X (Twitter)",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const services = [
  { label: "Commercial Estimating", href: "/services/commercial" },
  { label: "Residential Estimating", href: "/services/residential" },
  { label: "Quantity Takeoffs", href: "/services/takeoffs" },
  { label: "Subcontractor Estimating", href: "/services/subcontractor" },
  { label: "Industrial Estimating", href: "/services/industrial" },
  { label: "Conceptual Estimating", href: "/get-a-quote" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const certBadges = [
  "CPE Certified",
  "ASPE Member",
  "E&O Insured",
  "BBB Accredited",
  "Licensed & Bonded",
];

export default function Footer() {
  return (
    <footer className="bg-[#051525] border-t border-white/[0.08]">

      {/* Trust bar */}
      <div className="border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {certBadges.map((b) => (
              <span key={b} className="text-gray-500 text-xs font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400/50 shrink-0" />
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center font-bold text-white text-sm shadow-md shadow-teal-500/20">AE</div>
              <span className="font-bold text-xl text-white">Alpha<span className="gradient-text">Estimation</span></span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              Precision construction cost estimates for General Contractors &amp; Subcontractors. 650+ projects delivered. Guaranteed accuracy.
            </p>
            <div className="flex items-center gap-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400/60" />
              <span className="text-teal-400/70 text-xs font-medium">Serving contractors in all 50 states</span>
            </div>
            <div className="flex items-center gap-2.5 mb-6">
              {socialLinks.map(({ href, label, svg }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/[0.05] border border-white/[0.08] rounded-lg flex items-center justify-center text-gray-400 hover:text-teal-400 hover:border-teal-400/20 transition-all"
                >
                  {svg}
                </a>
              ))}
            </div>
            {/* Hours */}
            <div className="flex items-start gap-2.5 text-gray-500 text-xs">
              <Clock className="w-3.5 h-3.5 text-teal-400/60 mt-0.5 shrink-0" />
              <div>
                <p className="text-gray-400 font-medium">Business Hours</p>
                <p>Mon–Fri: 8:00 AM – 6:00 PM CST</p>
                <p>Sat: 9:00 AM – 2:00 PM CST</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Our Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-teal-400 transition-colors shrink-0" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Company</h4>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-teal-400 transition-colors shrink-0" />
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+19283817910" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group">
                  <div className="w-8 h-8 bg-teal-400/[0.08] border border-teal-400/15 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-teal-400/15 transition-colors">
                    <Phone className="w-3.5 h-3.5 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-500 mb-0.5">Phone</p>
                    <p className="text-sm text-gray-300 font-medium">+1 (928) 381-7910</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:contact@alphaestimation.com" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group">
                  <div className="w-8 h-8 bg-teal-400/[0.08] border border-teal-400/15 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-teal-400/15 transition-colors">
                    <Mail className="w-3.5 h-3.5 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-500 mb-0.5">Email</p>
                    <p className="text-sm text-gray-300 font-medium">contact@alphaestimation.com</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-teal-400/[0.08] border border-teal-400/15 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-teal-400" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 mb-0.5">Office</p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    117 S Lexington St STE 100<br />
                    Harrisonville, MO 64701
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-6">
              <Link
                href="/get-a-quote"
                className="block w-full text-center py-3 gradient-bg rounded-xl text-white text-sm font-bold hover:opacity-90 transition-opacity shadow-md shadow-teal-500/20"
              >
                Get a Free Quote →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-7 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Alpha Estimation LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
