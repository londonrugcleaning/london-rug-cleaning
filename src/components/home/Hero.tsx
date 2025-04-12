
import { Truck, Shield, MapPin } from "lucide-react";
import { CTAButtons } from "../CTAButtons";
import Review from "../ui/review";

export const Hero = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Expert Rug Care",
      description: "Specialized in Persian & Oriental Rugs"
    },
    {
      icon: Truck,
      title: "Free Collection",
      description: "Available across London"
    },
    {
      icon: MapPin,
      title: "Local Service",
      description: "Professional rug cleaners near you"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-4">
      <div className="absolute inset-0 opacity-5" aria-hidden="true" />
      <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center">
            <div className="animate-fade-up space-y-8">
              <h1 className="hero-xl">
                Professional
                <span className="text-blue-800"> Rug Cleaning </span>
                <span className="block">Service in London</span>
              </h1>

              <Review />

              <p className="hero-lg">
                Expert care for all types of rugs - From antique Persian to modern designs. Trusted by London residents for over 30 years.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <CTAButtons />
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -right-24 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-200/60 blur-3xl" aria-hidden="true" />
            <img
              src="/images/Professional Rug Cleaning London.webp"
              alt="Professional rug cleaning service in London"
              className="relative z-10 max-w-xl rounded-2xl shadow-2xl translate-x-20"
              loading="lazy"
              width={576}
              height={384}
            />
          </div>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="animate-fade-up rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <Icon className="h-6 w-6 text-blue-800" aria-hidden="true" />
                </div>
                <h2 className="mb-2 font-semibold">{benefit.title}</h2>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
