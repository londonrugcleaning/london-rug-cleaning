import { ServiceCard } from "@/components/ServiceCard";
import {
    Droplets,
    Home,
    Award,
    Paintbrush,
    Gem,
    Feather,
    Scissors,
    ShieldCheck,
} from "lucide-react";

const services = [
    {
        id: "persian-rug-cleaning",
        title: "Persian Rug Cleaning",
        description:
            "Expert care for your valuable Persian rugs using traditional methods and modern technology",
        icon: Gem,
    },
    {
        id: "oriental-rug-cleaning",
        title: "Oriental Rug Cleaning",
        description:
            "Specialized cleaning for delicate oriental rugs with attention to detail",
        icon: Paintbrush,
    },
    {
        id: "wool-rug-cleaning",
        title: "Wool Rug Cleaning",
        description:
            "Professional wool rug cleaning that preserves fiber integrity and natural colors",
        icon: Feather,
    },
    {
        id: "area-rug-cleaning",
        title: "Area Rug Cleaning",
        description: "Comprehensive cleaning solutions for all types of area rugs",
        icon: Home,
    },
    {
        id: "synthetic-rug-cleaning",
        title: "Synthetic Rug Cleaning",
        description:
            "Specialized cleaning for modern synthetic rugs using advanced techniques",
        icon: ShieldCheck,
    },
    {
        id: "antique-rug-cleaning",
        title: "Antique Rug Cleaning",
        description:
            "Delicate handling and restoration of vintage and antique rugs",
        icon: Award,
    },
    {
        id: "hand-knotted-rug-cleaning",
        title: "Hand-Knotted Rug Cleaning",
        description: "Meticulous cleaning of handcrafted luxury rugs",
        icon: Scissors,
    },
    {
        id: "rug-stain-removal",
        title: "Rug Stain Removal",
        description: "Professional spot and stain treatment for all rug types",
        icon: Droplets,
    },
];

export const ServicesList = () => {
    return (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
                <a
                    key={service.id}
                    href={`/services/${service.id}`}
                    className="block h-full group"
                >
                    <ServiceCard
                        title={service.title}
                        description={service.description}
                        icon={service.icon}
                    />
                </a>
            ))}
        </div>
    );
};
