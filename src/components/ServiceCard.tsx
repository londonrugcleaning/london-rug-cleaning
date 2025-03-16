
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
  return (
    <div className="service-card animate-fade-up">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
        <Icon className="h-6 w-6 text-gray-700" />
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};
