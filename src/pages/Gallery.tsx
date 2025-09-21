import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContactSection } from "@/components/home/ContactSection";

interface GalleryImage {
  id: number;
  before: string;
  title: string;
  description: string;
  category: string;
}

const galleryItems: GalleryImage[] = [
  {
    id: 1,
    before: "/images/Complete restoration of a 100-year-old Persian rug.webp",
    title: "Persian Rug Restoration",
    description: "Complete restoration of a 100-year-old Persian rug",
    category: "persian",
  },
  {
    id: 2,
    before: "/images/Red wine stain completely removed from silk rug.webp",
    title: "Wine Stain Removal",
    description: "Red wine stain completely removed from silk rug",
    category: "stains",
  },
  {
    id: 3,
    before: "/images/Deep cleaning of an antique oriental rug.webp",
    title: "Oriental Rug Cleaning",
    description: "Deep cleaning of an antique oriental rug",
    category: "oriental",
  },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <section className="hero-pattern pt-32">
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
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="persian">Persian Rugs</TabsTrigger>
              <TabsTrigger value="oriental">Oriental Rugs</TabsTrigger>
              <TabsTrigger value="stains">Stain Removal</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <p className="mb-2 text-sm font-medium text-center">Before</p>
                          <img
                            src={item.before}
                            alt={`${item.title} before cleaning`}
                            className="h-full w-full rounded-lg object-cover"
                          />
                          <p className="mb-2 text-sm font-medium text-center">After</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="persian" className="mt-0">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredItems
                  .filter((item) => item.category === "persian")
                  .map((item) => (
                    <Card key={item.id} className="overflow-hidden">
                      <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <p className="mb-2 text-sm font-medium">Before</p>
                            <img
                              src={item.before}
                              alt={`${item.title} before cleaning`}
                              className="h-48 w-full rounded-lg object-cover"
                            />
                          </div>
                          <div>
                            <p className="mb-2 text-sm font-medium">After</p>
                            <img
                              src={item.after}
                              alt={`${item.title} after cleaning`}
                              className="h-48 w-full rounded-lg object-cover"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="oriental" className="mt-0">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredItems
                  .filter((item) => item.category === "oriental")
                  .map((item) => (
                    <Card key={item.id} className="overflow-hidden">
                      <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <p className="mb-2 text-sm font-medium">Before</p>
                            <img
                              src={item.before}
                              alt={`${item.title} before cleaning`}
                              className="h-48 w-full rounded-lg object-cover"
                            />
                          </div>
                          <div>
                            <p className="mb-2 text-sm font-medium">After</p>
                            <img
                              src={item.after}
                              alt={`${item.title} after cleaning`}
                              className="h-48 w-full rounded-lg object-cover"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="stains" className="mt-0">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredItems
                  .filter((item) => item.category === "stains")
                  .map((item) => (
                    <Card key={item.id} className="overflow-hidden">
                      <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <p className="mb-2 text-sm font-medium">Before</p>
                            <img
                              src={item.before}
                              alt={`${item.title} before cleaning`}
                              className="h-48 w-full rounded-lg object-cover"
                            />
                          </div>
                          <div>
                            <p className="mb-2 text-sm font-medium">After</p>
                            <img
                              src={item.after}
                              alt={`${item.title} after cleaning`}
                              className="h-48 w-full rounded-lg object-cover"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>

        <ContactSection ></ContactSection>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
