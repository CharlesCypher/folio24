import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Faq() {
  return (
    <section className="px-6 py-16">
      <h2 className="text-2xl text-card font-semibold mb-1">Good to know</h2>
      <p className="text-popover text-base mb-10">Things worth consideration</p>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="bg-foreground border-none rounded-lg mb-6 hover:bg-popover/30 group">
          <AccordionTrigger className="text-card py-0 p-9 ">How fast?</AccordionTrigger>
          <AccordionContent className="text-popover text-base pb-8 px-9">Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="bg-foreground border-none rounded-lg mb-6 hover:bg-popover/30 group">
          <AccordionTrigger className="text-card py-0 p-9">How easy?</AccordionTrigger>
          <AccordionContent className="text-popover text-base pb-8 px-9">Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="bg-foreground border-none rounded-lg mb-6 hover:bg-popover/30 group">
          <AccordionTrigger className="text-card py-0 p-9">Who&apos;s behind?</AccordionTrigger>
          <AccordionContent className="text-popover text-base pb-8 px-9">Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="bg-foreground border-none rounded-lg hover:bg-popover/30 group">
          <AccordionTrigger className="text-card py-0 p-9">How good?</AccordionTrigger>
          <AccordionContent className="text-popover text-base pb-8 px-9">Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
