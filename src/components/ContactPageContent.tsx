
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

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
      const response = await fetch('/functions/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        let errorMessage = `Server error: ${response.status}`;

        try {
          const text = await response.text();
          if (text && text.trim()) {
            const errorData = JSON.parse(text);
            errorMessage = errorData.message || errorMessage;
          }
        } catch (parseError) {
          // Ignore parse errors
        }

        throw new Error(errorMessage);
      }

      let data;
      try {
        const text = await response.text();
        data = text ? JSON.parse(text) : {};
      } catch (parseError) {
        throw new Error("Invalid response from server");
      }

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
      <div className="min-h-screen">
        <section className="hero-pattern py-24">
          <div className="container mx-auto px-4">
            <h1 className="animate-fade-up text-4xl font-semibold sm:text-5xl">
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
                  <h2 className="text-3xl font-semibold">Get a Free Quote</h2>
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
                  <div className="border border-red-500/50 text-red-600 p-4 rounded-lg mb-6">
                    <div className="flex flex-col gap-2">
                      <p>{error}</p>
                      <Button asChild variant="outline" size="sm" className="flex items-center gap-2 w-fit">
                        <a href="tel:02034888344" aria-label="Call us at 020 3488 8344">
                          <Phone className="h-4 w-4" aria-hidden="true" />
                          <span>Call us: 020 3488 8344</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    aria-label="Your Name"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    aria-label="Email Address"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    aria-label="Phone Number"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  />
                  <textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    aria-label="Your Message"
                    className="flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
