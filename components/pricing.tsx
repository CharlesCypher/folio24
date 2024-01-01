import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon, EditIcon, FramerIcon, ImageIcon, LaptopIcon, OptionIcon, PaintbrushIcon, StickyNoteIcon, TimerIcon } from "lucide-react";

export default function Pricing() {
  return (
    <section>
      <h2 className="flex items-center justify-center text-center text-card text-2xl font-semibold mb-4">Let it happen</h2>
      <p className="text-popover text-base text-center mb-8">We offer flat-price packages with no hidden fees</p>
      <Card>
        <CardContent className="p-0">
          <CardHeader>
            <p className="text-primary text-lg">Solo - One Page</p>
            <h2 className="text-5xl font-semibold pb-2.5">$1000</h2>
            <CardDescription className="text-base pb-1.5">
              One-page website that matches your business goal and is ready to be published immediately
            </CardDescription>
          </CardHeader>
          <div className="flex flex-col gap-6 mb-8 px-6">
            <div className="flex items-center gap-4">
              <div className="">
                <StickyNoteIcon size={24} className="text-primary" />
              </div>
              <div className="">
                <p className="text-foreground text-base">1 page with multiple sections</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="">
                <TimerIcon size={24} className="text-primary" />
              </div>
              <div className="">
                <p className="text-foreground text-base">3 — 10 days turnaround</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="">
                <EditIcon size={24} className="text-primary" />
              </div>
              <div className="">
                <p className="text-foreground text-base">Easy-to-Edit</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="">
                <PaintbrushIcon size={24} className="text-primary" />
              </div>
              <div className="">
                <p className="text-foreground text-base">First sketch in 48 hours</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="">
                <FramerIcon size={24} className="text-primary" />
              </div>
              <div className="">
                <p className="text-foreground text-base">Framer Design + Development</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="">
                <LaptopIcon size={24} className="text-primary" />
              </div>
              <div className="">
                <p className="text-foreground text-base">Responsive (4 breakpoints)</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="">
                <OptionIcon size={24} className="text-primary" />
              </div>
              <div className="">
                <p className="text-foreground text-base">SEO-optimized</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="">
                <ImageIcon size={24} className="text-primary" />
              </div>
              <div className="">
                <p className="text-foreground text-base">Unlimited Stock Graphics</p>
              </div>
            </div>
          </div>
          <CardFooter className="p-6">
            <Button className="w-full py-6 flex items-center gap-3 rounded-full">
              Book a Discovery Call
              <span>
                <CalendarIcon size={20} />
              </span>
            </Button>
          </CardFooter>
        </CardContent>
      </Card>
    </section>
  );
}
