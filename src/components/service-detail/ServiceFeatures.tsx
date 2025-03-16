
import { Check } from "lucide-react";

interface ServiceFeaturesProps {
  features: string[];
  process: Array<{ title: string; description: string }>;
}

export const ServiceFeatures = ({ features, process }: ServiceFeaturesProps) => {
  return (
    <section className="max-w-7xl py-16 px-8 mx-auto">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">Features & Benefits</h2>
            <ul className="mt-6 grid gap-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-blue-700" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Our Process</h2>
            <ul className="mt-6 space-y-6">
              {process.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-800 text-sm text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-medium">{step.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
