
import { Shield } from "lucide-react";
import { HeadMeta } from "@/components/HeadMeta";

const About = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About London Rug Cleaning",
    "description": "Learn about our professional rug cleaning company in London, our history, expertise, and our commitment to quality service.",
    "mainEntity": {
      "@type": "Organization",
      "name": "London Rug Cleaning",
      "foundingDate": "2010",
      "description": "Professional rug cleaning services in London since 2010.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "4 Maddison Court, 145 Great North Way",
        "addressLocality": "London",
        "postalCode": "NW4 1PW",
        "addressCountry": "UK"
      }
    }
  };

  return (
    <>
      <HeadMeta
        title="About Us | London Rug Cleaning"
        description="Learn about our professional rug cleaning company in London, our history, expertise, and our commitment to quality service."
        canonicalUrl="https://londonrugcleaning.co.uk/about"
        schema={schema}
      />
      <div className="min-h-screen">
        <section className="hero-pattern py-24">
          <div className="container mx-auto px-4">
            <h1 className="animate-fade-up text-4xl font-semibold sm:text-5xl">
              About London Rug Cleaning
            </h1>
            <p className="mt-6 animate-fade-up text-lg text-muted-foreground">
              Your trusted experts in professional rug care since 2010
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold">Our Story</h2>
                <p className="text-muted-foreground">
                  Founded in 2010, London Rug Cleaning has grown to become one of the most trusted names in professional rug care across London. Our journey began with a simple mission: to provide exceptional cleaning services for all types of rugs while ensuring customer satisfaction.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-semibold">Our Expertise</h2>
                <p className="text-muted-foreground">
                  Our team consists of certified professionals with extensive experience in handling all types of rugs, from precious antiques to modern designs. We continuously invest in training and state-of-the-art equipment to deliver the best results.
                </p>
              </div>

              <div className="mt-12 flex items-center justify-center gap-4 rounded-xl bg-cream-50 p-8">
                <Shield className="h-12 w-12 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">Our Guarantee</h3>
                  <p className="text-muted-foreground">
                    We stand behind our work with a 100% satisfaction guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
