interface ServiceGalleryProps {
  title: string;
  gallery: string[];
}

export const ServiceGallery = ({ title, gallery }: ServiceGalleryProps) => {
  return (
    <section className="bg-cream-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-semibold">
          Our Work
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-lg">
              <img
                src={image}
                alt={`${title} example ${index + 1}`}
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};