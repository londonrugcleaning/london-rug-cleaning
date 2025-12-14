
import { Truck, Shield, MapPin, Calculator, Calendar } from "lucide-react";
import { CTAButtons } from "../CTAButtons";
import Review from "../ui/review";
import OptimizedImage from "@/components/OptimizedImage";

export const Hero = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Experts in Oriental Rugs",
      description: "Specialized care for Persian, Silk & Antique rugs"
    },
    {
      icon: Truck,
      title: "Free Collection & Delivery",
      description: "Covering all London postcodes"
    },
    {
      icon: Calendar,
      title: "7-Day Service",
      description: "Flexible booking times to suit you"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 pt-20 pb-16 lg:pt-32 lg:pb-24">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] bg-blue-400 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute left-0 bottom-0 h-[400px] w-[400px] bg-blue-300 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col justify-center text-center lg:text-left">
            <div className="animate-fade-up space-y-8">
              <div className="flex justify-center lg:justify-start">
                <Review />
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-tight">
                Professional
                <span className="text-blue-600 block mt-2"> Rug Cleaning </span>
                <span className="block mt-2">Service in London</span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Restore the vibrant colors and soft texture of your fine rugs. We specialize in the cleaning and restoration of Persian, Oriental, and handmade rugs with over 30 years of expertise.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row justify-center lg:justify-start">
                <CTAButtons />
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block animate-fade-up order-last">
            <div className="absolute -inset-4 bg-white/50 rounded-2xl blur-xl -z-10"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500 ring-1 ring-slate-100">
              <OptimizedImage
                src="/images/Professional Rug Cleaning London.webp"
                alt="Professional rug cleaning service in London"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow">
              <div className="bg-green-100 p-2 rounded-full">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Guaranteed</p>
                <p className="text-sm font-bold text-slate-900">100% Satisfaction</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon className="w-24 h-24 text-blue-600 transform rotate-12" />
                </div>

                <div className="relative z-10">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                  </div>
                  <h2 className="mb-3 text-xl font-bold text-slate-900">{benefit.title}</h2>
                  <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
