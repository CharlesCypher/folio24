"use client";

import About from "@/components/about";
import Contact from "@/components/contact";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import Tools from "@/components/tools";
import Works from "@/components/works";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className="min-h-[100dvh]">
      <div className="bg-card px-6 py-7 lg:px-20 lg:py-16 flex flex-col gap-20 rounded-t-md rounded-b-3xl">
        <Header />
        <Hero />
      </div>
      <About />
      <div className="bg-card px-6 py-7 lg:px-20 lg:py-16 flex flex-col gap-20 rounded-t-lg">
        <Tools />
        <Works />
      </div>
      <div className="bg-card px-1 pt-7 lg:px-20 lg:py-16 pb-1 flex flex-col gap-20 rounded-b-lg">
        <div className="bg-foreground px-6 py-7 flex flex-col gap-20 rounded-lg">
          <Pricing />
          <Contact />
        </div>
      </div>
      <Faq />
      <Footer />
    </div>
  );
}
