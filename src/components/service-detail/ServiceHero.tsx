
import { Star } from "lucide-react";
import { CTAButtons } from "../CTAButtons";

interface ServiceHeroProps {
  title: string;
  description: string;
  heroImage: string;
}

import OptimizedImage from "@/components/OptimizedImage";

export const ServiceHero = ({ title, description, heroImage }: ServiceHeroProps) => {
  return (
    <section className="relative h-[50vh] min-h-[300px] overflow-hidden pt-12">
      <div className="absolute inset-0">
        <OptimizedImage
          src={heroImage}
          alt={title}
          className="h-full w-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="container relative z-10 mx-auto flex h-full items-center px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg text-white/90">
            {description}
          </p>
          <div className="mt-4 flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-white">Rated 4.9/5 by our customers</span>
          </div>
          <div className="mt-8">
            <CTAButtons variant="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};
