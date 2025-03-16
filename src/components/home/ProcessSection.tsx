import { ProcessStep } from "@/components/ProcessStep";

export const ProcessSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Our Process
          </h2>
          <p className="mt-4 text-muted-foreground">
            Simple steps to get your rugs looking like new
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          <ProcessStep
            number="1"
            title="Book Collection"
            description="Schedule a free collection at a time that suits you"
          />
          <ProcessStep
            number="2"
            title="Inspection"
            description="We thoroughly inspect your rug and create a cleaning plan"
          />
          <ProcessStep
            number="3"
            title="Deep Clean"
            description="Using our specialized cleaning methods and products"
          />
          <ProcessStep
            number="4"
            title="Free Delivery"
            description="We return your beautifully cleaned rug to your door"
          />
        </div>
      </div>
    </section>
  );
};