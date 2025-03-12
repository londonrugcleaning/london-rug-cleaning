import { TestimonialCard } from "@/components/TestimonialCard";

export const TestimonialsSection = () => {
  return (
    <section className="bg-gray-100 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-muted-foreground">
            Read about experiences from our satisfied customers
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            name="Sarah Johnson"
            role="Homeowner in Chelsea"
            content="Exceptional service! They removed a wine stain I thought was permanent. My Persian rug looks brand new."
          />
          <TestimonialCard
            name="James Wilson"
            role="Interior Designer"
            content="As an interior designer, I trust them with my clients' valuable rugs. Their attention to detail is outstanding."
          />
          <TestimonialCard
            name="Emma Thompson"
            role="Antique Collector"
            content="Their expertise in handling antique rugs is impressive. They restored my 19th-century rug beautifully."
          />
        </div>
      </div>
    </section>
  );
};