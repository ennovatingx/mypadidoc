import Navbar from "@/pages/home/components/Navbar";
import HeroSection from "@/pages/home/components/HeroSection";
import HowItWorks from "@/pages/home/components/HowItWorks";
import ChatPreview from "@/pages/home/components/ChatPreview";
import TrustSection from "@/pages/home/components/TrustSection";
import WhatWeHelpWith from "@/pages/home/components/WhatWeHelpWith";
import PartnersSection from "@/pages/home/components/PartnersSection";
import Testimonials from "@/pages/home/components/Testimonials";
import SignUpForm from "@/pages/home/components/SignUpForm";
import InstitutionalForm from "@/pages/home/components/InstitutionalForm";
import CTABanner from "@/pages/home/components/CTABanner";
import Footer from "@/pages/home/components/Footer";

export default function Home() {
  return (
    <div className="relative w-full bg-background-50">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <ChatPreview />
      <TrustSection />
      <WhatWeHelpWith />
      <PartnersSection />
      <Testimonials />
      <SignUpForm />
      <InstitutionalForm />
      <CTABanner />
      <Footer />
    </div>
  );
}