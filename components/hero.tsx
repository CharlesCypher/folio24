import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <main>
      <section>
        <h1 className="text-[2.5rem] text-foreground leading-[1.15em] font-semibold mb-6">
          <span className="text-primary">Goal-Oriented Websites</span> that Deliver the Message, Easy and Fast
        </h1>
        <p className="text-popover mb-8">
          We design and build Framer websites for tech founders to gain trust, look big, talk clearly and compete smart
        </p>
        <Button className="w-full text-base flex items-center gap-2 py-7 border-card rounded-full shadow-shadow hover:border">
          Let&apos;s Talk
          <span>
            <ArrowRight size={20} className="-rotate-45" />
          </span>
        </Button>
        <div className="">
          <div className="flex items-center justify-center gap-2 pt-8 pb-4 text-center">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
            </span>
            <p className="text-secondary">Available from now</p>
          </div>
        </div>
      </section>
    </main>
  );
}
