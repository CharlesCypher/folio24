import React from "react";
import { CalendarIcon, EditIcon, FramerIcon, ImageIcon, LaptopIcon, OptionIcon, PaintbrushIcon, StickyNoteIcon, TimerIcon } from "lucide-react";

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

export const Features: React.FC<PricingCardProps> = ({ pricing }) => {
  const featuresData = pricing;

  return (
    <div className="flex flex-col gap-6 mb-8 px-6">
      {featuresData.features.map((feature) => (
        <div key={feature.id} className="flex items-center gap-4">
          <div className="">{getIconByName(feature.icon, 24, "text-primary")}</div>
          <div className="">
            <p className="text-foreground text-base">{feature.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Helper function to get an icon by its name
function getIconByName(iconName: string, size: number, className: string) {
  switch (iconName) {
    case "StickyNoteIcon":
      return <StickyNoteIcon size={size} className={className} />;
    case "TimerIcon":
      return <TimerIcon size={size} className={className} />;
    case "EditIcon":
      return <EditIcon size={size} className={className} />;
    case "CalendarIcon":
      return <CalendarIcon size={size} className={className} />;
    case "FramerIcon":
      return <FramerIcon size={size} className={className} />;
    case "ImageIcon":
      return <ImageIcon size={size} className={className} />;
    case "LaptopIcon":
      return <LaptopIcon size={size} className={className} />;
    case "OptionIcon":
      return <OptionIcon size={size} className={className} />;
    case "PaintbrushIcon":
      return <PaintbrushIcon size={size} className={className} />;
    default:
      return null; // Return a default icon or handle the case accordingly
  }
}
