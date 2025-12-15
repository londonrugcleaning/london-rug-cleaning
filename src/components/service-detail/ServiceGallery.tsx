interface ServiceGalleryProps {
  title: string;
  gallery: string[];
}

import OptimizedImage from "@/components/OptimizedImage";

export const ServiceGallery = ({ title, gallery }: ServiceGalleryProps) => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Our Work
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-2xl shadow-md group">
              <OptimizedImage
                src={image}
                alt={`${title} example ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};