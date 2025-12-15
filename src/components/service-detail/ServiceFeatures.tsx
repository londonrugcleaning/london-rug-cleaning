
import { Check } from "lucide-react";

interface ServiceFeaturesProps {
  features: string[];
  process: Array<{ title: string; description: string }>;
}

export const ServiceFeatures = ({ features, process }: ServiceFeaturesProps) => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-16 md:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8">Features & Benefits</h2>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-lg text-slate-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8">Our Process</h2>
            <div className="space-y-8 relative">
              {/* Connecting Line */}
              <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-slate-200"></div>

              {process.map((step, index) => (
                <div key={index} className="relative flex gap-6">
                  <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold ring-4 ring-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
