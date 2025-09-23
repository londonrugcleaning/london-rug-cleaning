
import { useState } from "react";
import { Button } from "@/components/ui/button";

import { useToast } from "@/hooks/use-toast";
import { Phone, X } from "lucide-react";

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const QuoteModal = ({ open, onOpenChange }: QuoteModalProps) => {
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
      const response = await fetch('/api/send-email', {
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
        onOpenChange(false);
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Form submission error:", error);

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
    <>
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => onOpenChange(false)}
        >
          <div
            className="bg-white p-6 rounded-lg max-w-[425px] w-full mx-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100"
              onClick={() => onOpenChange(false)}
            >
              <X className="h-4 w-4" />
            </button>
            <div className="text-xl font-semibold">Get a Free Quote</div>
            {error && (
              <div className="border border-red-500/50 text-red-600 p-4 rounded-lg my-2">
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

            <form onSubmit={handleSubmit} className="space-y-4 py-4">
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
              <div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                  aria-label={isSubmitting ? "Sending..." : "Submit Request"}
                >
                  {isSubmitting ? "Sending..." : "Submit Request"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
