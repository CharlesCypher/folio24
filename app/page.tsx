import About from "@/components/about";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import Works from "@/components/works";

export default function Home() {
  return (
    <div className="min-h-[100dvh]">
      <div className="bg-card px-6 py-7 flex flex-col gap-20 rounded-md">
        <Header />
        <Hero />
      </div>
      <About />
      <div className="bg-card px-6 py-7 flex flex-col gap-20 rounded-t-md">
        <Works />
      </div>
      <div className="bg-card px-1 py-7 flex flex-col gap-20">
        <div className="bg-foreground px-6 py-7 flex flex-col gap-20 rounded-md">
          <Pricing />
        </div>
      </div>
    </div>
  );
}
