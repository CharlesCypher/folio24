import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";
import { Features } from "./features";
import { CalendarIcon, EditIcon, FramerIcon, ImageIcon, LaptopIcon, OptionIcon, PaintbrushIcon, StickyNoteIcon, TimerIcon } from "lucide-react";

// Define the type for the pricing data
interface PricingCardData {
  id: number;
  name: string;
  price: number;
  description: string;
  features: {
    id: number;
    icon: string;
    text: string;
  }[];
}

// Prop type for the PricingCard component
interface PricingCardProps {
  pricing: PricingCardData;
}

export const PricingCard: React.FC<PricingCardProps> = ({ pricing }) => {
  return (
    <Card className="rounded-none rounded-t-md last:rounded-t-none last:rounded-b-md lg:rounded-r-none lg:first:rounded-l-md lg:last:rounded-l-none lg:last:rounded-r-md">
      <CardContent className="p-0">
        <CardHeader>
          <p className="text-primary text-lg">{pricing.name}</p>
          <h2 className="text-5xl font-semibold pb-2.5">${pricing.price}</h2>
          <CardDescription className="text-base pb-1.5">{pricing.description}</CardDescription>
        </CardHeader>
        <Features pricing={pricing} />
        <CardFooter className="p-6">
          <Button className="w-full py-6 md:py-7 flex items-center gap-3 border-card rounded-full shadow-shadow hover:border">
            Book a Discovery Call
            <span className="text-base md:text-lg">
              <CalendarIcon size={20} />
            </span>
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
};
