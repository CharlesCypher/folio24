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

const pricingCardData: PricingCardData[] = [
  {
    id: 1,
    name: "Solo - One Page",
    price: 850,
    description: "One-page website that matches your business goal and is ready to be published immediately",
    features: [
      { id: 1, icon: "StickyNoteIcon", text: "1 page with multiple sections" },
      { id: 2, icon: "TimerIcon", text: "3 — 10 days turnaround" },
      { id: 3, icon: "EditIcon", text: "Easy-to-Edit" },
      { id: 4, icon: "PaintbrushIcon", text: "First sketch in 48 hours" },
      { id: 5, icon: "FramerIcon", text: "Framer Design + Development" },
      { id: 6, icon: "LaptopIcon", text: "Responsive (4 breakpoints)" },
      { id: 7, icon: "OptionIcon", text: "SEO-optimized" },
      { id: 8, icon: "OptionIcon", text: "1 Revision" },
      { id: 9, icon: "ImageIcon", text: "Unlimited Stock Graphics" },
    ],
  },
  {
    id: 2,
    name: "Yolo - Multiple Page",
    price: 2700,
    description: "Multiple-page website that matches your business goal and is ready to be published immediately",
    features: [
      { id: 10, icon: "StickyNoteIcon", text: "Upto to 10 unique pages" },
      { id: 11, icon: "TimerIcon", text: "5 — 15 days turnaround" },
      { id: 12, icon: "EditIcon", text: "CMS Powered" },
      { id: 13, icon: "PaintbrushIcon", text: "First sketch in 48 hours" },
      { id: 14, icon: "FramerIcon", text: "Framer Design + Development" },
      { id: 15, icon: "LaptopIcon", text: "Responsive (4 breakpoints)" },
      { id: 16, icon: "OptionIcon", text: "SEO-optimized" },
      { id: 17, icon: "OptionIcon", text: "3 Revision" },
      { id: 18, icon: "ImageIcon", text: "Unlimited Stock Graphics" },
    ],
  },
];

export default pricingCardData;
