
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Mail, Phone, MapPin } from "lucide-react";
import { HeadMeta } from "@/components/HeadMeta";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      console.log("Contact form - Submitting form data:", formData);
      
      // Fixed API path to ensure it works with Cloudflare Pages
      const response = await fetch('/functions/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log("Contact form - Response status:", response.status);
      
      if (!response.ok) {
        const text = await response.text();
        console.log("Contact form - Error response text:", text);
        
        let errorData;
        try {
          errorData = text ? JSON.parse(text) : { message: "Unknown error occurred" };
        } catch (e) {
          console.error("Failed to parse error response:", e);
          errorData = { message: `Server error: ${response.status}` };
        }
        
        throw new Error(errorData.message || "Failed to send message");
      }
      
      const data = await response.json();
      console.log("Contact form - Response data:", data);
      
      if (data.success) {
        toast({
          title: "Thank you for your message",
          description: "We'll get back to you as soon as possible.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
        setError(null);
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Contact form - Submission error:", error);
      
      const errorMessage = error instanceof Error 
        ? error.message 
        : "Our email system is currently unavailable. Please call us directly.";
        
      setError(errorMessage);
      
      toast({
        title: "Error sending message",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact London Rug Cleaning",
    "description": "Get in touch with our rug cleaning experts for a free quote",
    "provider": {
      "@type": "LocalBusiness",
      "name": "London Rug Cleaning",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "4 Maddison Court, 145 Great North Way",
        "addressLocality": "London",
        "postalCode": "NW4 1PW",
        "addressCountry": "UK"
      },
      "telephone": "02034888344",
      "email": "info@londonrugcleaning.co.uk"
    }
  };

  return (
    <>
      <HeadMeta
        title="Contact Us | London Rug Cleaning"
        description="Contact our rug cleaning experts for a free quote. We offer professional rug cleaning services across London with free collection and delivery."
        canonicalUrl="https://londonrugcleaning.co.uk/contact"
        schema={schema}
      />
      <div className="min-h-screen">
        <section className="hero-pattern py-24">
          <div className="container mx-auto px-4">
            <h1 className="animate-fade-up font-serif text-4xl font-semibold sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-6 animate-fade-up text-lg text-muted-foreground">
              Get in touch for a free quote or any questions
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="font-serif text-3xl font-semibold">Get a Free Quote</h2>
                  <p className="text-muted-foreground">
                    We're here to help with all your rug cleaning needs. Contact us for a free quote or any questions you may have.
                  </p>
                </div>
                <div className="space-y-4">
                  <Button asChild variant="link" className="flex items-center justify-start gap-3 p-0 hover:text-primary">
                    <a href="tel:02034888344" aria-label="Call us at 020 3488 8344">
                      <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                      <span>020 3488 8344</span>
                    </a>
                  </Button>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                    <span>info@londonrugcleaning.co.uk</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                    <span>4 Maddison Court, 145 Great North Way, NW4 1PW</span>
                  </div>
                </div>
              </div>

              <div>
                {error && (
                  <Alert variant="destructive" className="mb-6">
                    <AlertDescription className="flex flex-col gap-2">
                      <p>{error}</p>
                      <Button asChild variant="outline" size="sm" className="flex items-center gap-2 w-fit">
                        <a href="tel:02034888344" aria-label="Call us at 020 3488 8344">
                          <Phone className="h-4 w-4" aria-hidden="true" />
                          <span>Call us: 020 3488 8344</span>
                        </a>
                      </Button>
                    </AlertDescription>
                  </Alert>
                )}
              
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    aria-label="Your Name"
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    aria-label="Email Address"
                  />
                  <Input
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    aria-label="Phone Number"
                  />
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    aria-label="Your Message"
                  />
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                    aria-label={isSubmitting ? "Sending..." : "Send Message"}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
