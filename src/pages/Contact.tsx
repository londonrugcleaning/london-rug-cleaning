
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Thank you for your message",
          description: "We'll get back to you as soon as possible.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast({
          title: "Error sending message",
          description: "Please try again or call us directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
                  <a href="tel:02034888344">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>020 3488 8344</span>
                  </a>
                </Button>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>info@londonrugcleaning.co.uk</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>4 Maddison Court, 145 Great North Way, NW4 1PW</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
              <Input
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
              />
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              />
              <Button 
                type="submit" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
