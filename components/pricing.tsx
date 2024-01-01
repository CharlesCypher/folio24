import pricingCardData from "@/data/pricing";
import { PricingCard } from "./pricing-card";

export default function Pricing() {
  return (
    <section>
      <h2 className="flex items-center justify-center text-center text-card text-2xl font-semibold mb-4">Let it happen</h2>
      <p className="text-popover text-base text-center mb-8">We offer flat-price packages with no hidden fees</p>
      {pricingCardData.map((pricingCard) => (
        <PricingCard key={pricingCard.id} pricing={pricingCard} />
      ))}
    </section>
  );
}
