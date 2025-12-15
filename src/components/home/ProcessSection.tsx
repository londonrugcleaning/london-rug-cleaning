import { ProcessStep } from "@/components/ProcessStep";

export const ProcessSection = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Process
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Simple steps to get your rugs looking like new
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10"></div>

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