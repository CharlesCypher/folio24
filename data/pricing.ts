interface PricingCardData {
  id: number;
  name: string;
  price: number;
  description: string;
  features: {
    icon: string;
    text: string;
  }[];
}

const pricingCardData: PricingCardData[] = [
  {
    id: 1,
    name: "Solo - One Page",
    price: 100,
    description: "One-page website that matches your business goal and is ready to be published immediately",
    features: [
      { icon: "StickyNoteIcon", text: "1 page with multiple sections" },
      { icon: "TimerIcon", text: "3 — 10 days turnaround" },
      { icon: "EditIcon", text: "Easy-to-Edit" },
      { icon: "PaintbrushIcon", text: "First sketch in 48 hours" },
      { icon: "FramerIcon", text: "Framer Design + Development" },
      { icon: "LaptopIcon", text: "Responsive (4 breakpoints)" },
      { icon: "OptionIcon", text: "SEO-optimized" },
      { icon: "OptionIcon", text: "1 Revision" },
      { icon: "ImageIcon", text: "Unlimited Stock Graphics" },
    ],
  },
  {
    id: 2,
    name: "Yolo - Multiple Page",
    price: 600,
    description: "Multiple-page website that matches your business goal and is ready to be published immediately",
    features: [
      { icon: "StickyNoteIcon", text: "Upto to 10 unique pages" },
      { icon: "TimerIcon", text: "5 — 15 days turnaround" },
      { icon: "EditIcon", text: "CMS Powered" },
      { icon: "PaintbrushIcon", text: "First sketch in 48 hours" },
      { icon: "FramerIcon", text: "Framer Design + Development" },
      { icon: "LaptopIcon", text: "Responsive (4 breakpoints)" },
      { icon: "OptionIcon", text: "SEO-optimized" },
      { icon: "OptionIcon", text: "3 Revision" },
      { icon: "ImageIcon", text: "Unlimited Stock Graphics" },
    ],
  },
];

export default pricingCardData;
