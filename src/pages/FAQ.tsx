import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="min-h-screen">
      <section className="hero-pattern py-24">
        <div className="container mx-auto px-4">
          <h1 className="animate-fade-up font-serif text-4xl font-semibold sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 animate-fade-up text-lg text-muted-foreground">
            Find answers to common questions about our rug cleaning services
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto max-w-3xl px-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How long does the cleaning process take?</AccordionTrigger>
              <AccordionContent>
                The typical turnaround time for our rug cleaning service is 5-7 working days. However, this can vary depending on the size, condition, and type of rug. We also offer express cleaning services for urgent requirements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Do you offer free collection and delivery?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer free collection and delivery for all London postcodes. Our team will carefully wrap and transport your rug to our facility and return it once the cleaning is complete.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What types of rugs do you clean?</AccordionTrigger>
              <AccordionContent>
                We clean all types of rugs including Persian, Oriental, Turkish, Indian, Chinese, Modern, Antique, Silk, Wool, and Synthetic rugs. Our experts are trained to handle even the most delicate and valuable pieces.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Are your cleaning products safe?</AccordionTrigger>
              <AccordionContent>
                Yes, we use eco-friendly, pH-balanced cleaning products that are safe for your rugs, your family, and the environment. Our cleaning solutions are specially formulated to be gentle yet effective.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default FAQ;