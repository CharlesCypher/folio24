import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <main>
      <section>
        <h1 className="text-[2.5rem] md:text-5xl md:w-4/5 lg:text-[4rem] lg:w-full xl:w-3/5 text-foreground leading-[1.18] md:leading-[1.1825] lg:leading-[1.185] font-semibold mb-6">
          <span className="text-primary">Goal-Oriented Websites</span> that Deliver the Message, Easy and Fast
        </h1>
        <p className="text-popover mb-8 md:text-lg lg:mb-16 lg:w-1/2">
          We design and build Framer websites for tech founders to gain trust, look big, talk clearly and compete smart
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <Button className="w-full lg:w-96 text-base flex items-center gap-2 py-7 border-card rounded-full shadow-shadow hover:border">
            Let&apos;s Talk
            <span>
              <ArrowRight size={20} className="-rotate-45" />
            </span>
          </Button>
          <div className="hidden lg:flex w-full h-[0.5px] bg-background"></div>
          <div className="">
            <div className="flex items-center justify-center gap-2 pt-8 pb-4 lg:pt-0 lg:pb-0 text-center">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
              </span>
              <p className="w-max text-secondary">Available from now</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
