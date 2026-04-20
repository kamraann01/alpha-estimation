import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description: "Request a free construction estimate. Tell us about your project and receive a detailed cost estimate within 24–48 hours.",
};

export default function GetAQuoteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
