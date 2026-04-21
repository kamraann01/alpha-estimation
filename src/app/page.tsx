import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import HowItWorks from "@/components/home/HowItWorks";
import Portfolio from "@/components/home/Portfolio";
import WhyUs from "@/components/home/WhyUs";
import TrustBadges from "@/components/home/TrustBadges";
import Testimonials from "@/components/home/Testimonials";
import Pricing from "@/components/home/Pricing";
import HomeContact from "@/components/home/HomeContact";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <HowItWorks />
      <Portfolio />
      <WhyUs />
      <TrustBadges />
      <Testimonials />
      <Pricing />
      <HomeContact />
      <FAQ />
      <CTA />
    </>
  );
}
