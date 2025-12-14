import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";

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
        } catch (parseError) { }
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
          title: "Message Sent Successfully!",
          description: "We'll get back to you within 24 hours.",
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

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute left-0 bottom-0 h-[300px] w-[300px] bg-blue-400 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get in touch for a free quote or expert advice on your rug cleaning needs.
          </p>
        </div>
      </section>

      <section className="py-20 -mt-20 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8 space-y-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      Opening Hours
                    </h3>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="font-medium text-slate-900">8am - 8pm</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Saturday</span>
                        <span className="font-medium text-slate-900">9am - 6pm</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sunday</span>
                        <span className="font-medium text-slate-900">10am - 4pm</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-6 pt-6 border-t border-slate-100">
                    <a href="tel:02034888344" className="flex items-start gap-4 group hover:bg-slate-50 p-3 -mx-3 rounded-lg transition-colors">
                      <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                        <Phone className="h-6 w-6 text-blue-700" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Call Us</p>
                        <p className="text-slate-600 group-hover:text-blue-700 transition-colors">020 3488 8344</p>
                      </div>
                    </a>

                    <a href="mailto:info@londonrugcleaning.co.uk" className="flex items-start gap-4 group hover:bg-slate-50 p-3 -mx-3 rounded-lg transition-colors">
                      <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                        <Mail className="h-6 w-6 text-blue-700" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Email Us</p>
                        <p className="text-slate-600 group-hover:text-blue-700 transition-colors break-all">info@londonrugcleaning.co.uk</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 p-3 -mx-3">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-blue-700" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Visit Us</p>
                        <p className="text-slate-600">4 Maddison Court<br />145 Great North Way<br />London, NW4 1PW</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-xl h-full">
                <CardHeader className="p-8 pb-0">
                  <CardTitle className="text-2xl sm:text-3xl font-bold text-slate-900">Get a Free Quote</CardTitle>
                  <CardDescription className="text-lg mt-2 text-slate-600">
                    Fill out the form below and we'll get back to you with a competitive price for your rug cleaning.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  {error && (
                    <div className="mb-6 bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg flex items-start gap-3">
                      <div className="mt-1"><Phone className="h-4 w-4" /></div>
                      <div>
                        <p className="font-medium">Something went wrong.</p>
                        <p className="text-sm mt-1">{error}</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number</label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="07799 123456"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your rugs (size, type, condition)..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="min-h-[150px] bg-slate-50 border-slate-200 focus:bg-white transition-colors resize-none text-base"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-lg h-14"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">Processing...</span>
                      ) : (
                        <span className="flex items-center gap-2">Send Message <CheckCircle2 className="w-5 h-5" /></span>
                      )}
                    </Button>
                    <p className="text-xs text-center text-slate-400 mt-4">
                      By submitting this form, you agree to our privacy policy. Your details are safe with us.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
