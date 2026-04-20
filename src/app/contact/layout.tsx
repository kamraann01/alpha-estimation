import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Alpha Estimation. Call, email, or fill out our contact form. We respond within 1–2 business hours.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact Us | Alpha Estimation", description: "Get in touch with Alpha Estimation. Call +1 (928) 381-7910 or email us.", url: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
