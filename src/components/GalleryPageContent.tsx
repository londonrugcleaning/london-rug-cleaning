import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { ContactSection } from "@/components/home/ContactSection";
import OptimizedImage from "@/components/OptimizedImage";

interface GalleryImage {
  id: number;
  thumb: string;
  full: string;
  title: string;
  description: string;
}

const galleryItems: GalleryImage[] = [
  {
    id: 1,
    thumb: "/images/Complete restoration of a 100-year-old Persian rug.webp",
    full: "/images/Complete restoration of a 100-year-old Persian rug.webp",
    title: "Complete restoration of a 100-year-old Persian rug",
    description: "Expert restoration bringing new life to a century-old masterpiece",
  },
  {
    id: 2,
    thumb: "/images/Red wine stain completely removed from silk rug.webp",
    full: "/images/Red wine stain completely removed from silk rug.webp",
    title: "Red wine stain completely removed from silk rug",
    description: "Specialized stain removal treatment for delicate silk fibers",
  },
  {
    id: 3,
    thumb: "/images/Deep cleaning of an antique oriental rug.webp",
    full: "/images/Deep cleaning of an antique oriental rug.webp",
    title: "Deep cleaning of an antique oriental rug",
    description: "Thorough deep cleaning restoring vibrant colors and texture",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <section className="hero-pattern pt-32 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="animate-fade-up text-4xl font-semibold sm:text-5xl">
            Before & After Gallery
          </h1>
          <p className="mt-6 animate-fade-up text-lg text-muted-foreground">
            See the remarkable transformations we achieve with our expert rug
            cleaning services
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
            {galleryItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl leading-tight">{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="mb-2 text-sm font-medium text-center text-muted-foreground uppercase tracking-wider">Before & After</p>
                      <OptimizedImage
                        src={item.thumb}
                        alt={`${item.title} cleaning result`}
                        className="h-64 w-full rounded-lg object-cover cursor-pointer hover:opacity-95 transition-opacity"
                        onClick={() => setSelectedImage(item.full)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <ContactSection />
        </div>
      </section>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden bg-transparent border-none shadow-none">
          <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Full size view"
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl pointer-events-auto bg-white"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
