import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="hero-pattern relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="animate-fade-up font-serif text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Professional Rug Cleaning in{" "}
            <span className="text-primary">London</span>
          </h1>
          <p className="mt-6 animate-fade-up text-lg text-muted-foreground">
            Expert care for all types of rugs, from antique Persian to modern
            designs. Free collection and delivery across London.
          </p>
          <div className="mt-10 animate-fade-up">
            <Button size="lg" className="rounded-full">
              Get Your Free Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};