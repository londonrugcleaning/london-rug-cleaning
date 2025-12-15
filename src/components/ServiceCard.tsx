
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
  return (
    <div className="group h-full rounded-2xl bg-white p-8 shadow-xs hover:shadow-xl transition-all duration-300 border border-slate-100">
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 group-hover:bg-blue-600 transition-colors duration-300">
        <Icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="mb-3 text-xl font-bold text-slate-900">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
};
